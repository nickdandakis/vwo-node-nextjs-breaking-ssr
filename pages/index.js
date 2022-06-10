import { parseCookies } from 'cookie-storage';
import { QueryClient, dehydrate } from 'react-query';

import {
  VWO_ACCOUNT_ID,
  VWO_SDK_KEY,
  VWO_EXPERIMENT_CAMPAIGN_KEY,
  VWO_EXPERIMENT_CONTROL_VARIATION_KEY,
  VWO_EXPERIMENT_TEST_VARIATION_KEY,
} from '../config';
import {
  VWO_UUID_COOKIE_NAME,
  useVWOExperiment,
  prefetchVWOExperiment,
} from '../vwo';

export default function IndexPage({ userID }) {
  const { data: variation } = useVWOExperiment({ campaignKey: VWO_EXPERIMENT_CAMPAIGN_KEY, userID });
  
  return (
    <div>
      <h1>Minimal repro of VWO SDK with broken SSR</h1>
      <p>
        Comment the lines related to prefetching to turn off SSR.
      </p>
      <p>
        Inspect this page's source to see SSR working (ie
        view-source:http://localhost:3000/ and search for your configured
        variation)
      </p>

      {variation === VWO_EXPERIMENT_CONTROL_VARIATION_KEY ? (
        <h2 style={{ color: 'gray' }}>
          Serving the control {variation}
        </h2>
      ) : variation === VWO_EXPERIMENT_TEST_VARIATION_KEY ? (
        <h2 style={{ color: 'green' }}>
          Serving new variation {variation}
        </h2>
      ) : (
        <h2 style={{ color: 'red' }}>
          Serving no experiment
        </h2>
      )}
      
      <h3>Configuration</h3>
      <dl>
        <dt>VWO Account ID</dt>
        <dd>{VWO_ACCOUNT_ID}</dd>
        
        <dt>VWO SDK key</dt>
        <dd>{VWO_SDK_KEY}</dd>

        <dt>VWO campaign key</dt>
        <dd>{VWO_EXPERIMENT_CAMPAIGN_KEY}</dd>

        <dt>VWO control variation key</dt>
        <dd>{VWO_EXPERIMENT_CONTROL_VARIATION_KEY}</dd>

        <dt>VWO experiment variation key</dt>
        <dd>{VWO_EXPERIMENT_TEST_VARIATION_KEY}</dd>

        <dt>VWO user cookie (ie {VWO_UUID_COOKIE_NAME})</dt>
        <dd>{userID ? userID : 'No cookie found, are you running an adblocker?'}</dd>
      </dl>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req?.headers?.cookie || []);
  const userID = cookies[VWO_UUID_COOKIE_NAME];

  const queryClient = new QueryClient();

  // SSR of VWO causes an ECONNRESET
  await prefetchVWOExperiment({
    queryClient,
    campaignKey: VWO_EXPERIMENT_CAMPAIGN_KEY,
    userID,
  });

  return {
    props: {
      userID: userID ?? '',
      dehydratedState: dehydrate(queryClient),
    },
  }
}
