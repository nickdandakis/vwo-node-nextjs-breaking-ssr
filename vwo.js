import VWO from 'vwo-node-sdk';
import { useQuery } from 'react-query';
import { CookieStorage } from 'cookie-storage';

import {
  VWO_ACCOUNT_ID,
  VWO_SDK_KEY,
} from './config';

export const VWO_UUID_COOKIE_NAME = '_vwo_uuid_v2';

function getQueryKey({ campaignKey, userID }) {
  return ['vwo-experiment', campaignKey, userID];
}

export async function getVWOClient() {
  const settingsFile = await VWO.getSettingsFile(VWO_ACCOUNT_ID, VWO_SDK_KEY);
  const client = VWO.launch({
    settingsFile,
  });

  return client;
}

export async function getVWOExperiment({ campaignKey, userID }) {
  const client = await getVWOClient();
  const variation = client.activate(campaignKey, userID);

  if (!variation) {
    return null; // because nextjs SSR complains if undefined
  }

  return variation;
}

export async function prefetchVWOExperiment({
  queryClient,
  campaignKey,
  userID,
}) {
  return queryClient.prefetchQuery(
    getQueryKey({ campaignKey, userID }),
    async () => {
      return getVWOExperiment({ campaignKey, userID });
    }
  );
}

export async function fetchVWOExperiment({
  queryClient,
  campaignKey,
  userID,
}) {
  return queryClient.fetchQuery(
    getQueryKey({ campaignKey, userID }),
    async () => {
      return getVWOExperiment({ campaignKey, userID });
    }
  );
}

export function useVWOExperiment({ campaignKey, userID }) {
  // to run this experiment serverside, simply call prefetchVWOExperiment, read VWO_UUID_COOKIE_NAME cookie,
  // and pass through that cookie's value

  return useQuery(
    getQueryKey({ campaignKey, userID }),
    async () => getVWOExperiment({ campaignKey, userID }),
    {
      enabled: !!userID && !!campaignKey,
      staleTime: 5 * 60 * 1000, // 5mins
    }
  );
}
