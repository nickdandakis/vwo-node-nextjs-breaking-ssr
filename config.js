// VWO account ID, found in VWO dashboard
export const VWO_ACCOUNT_ID = process.env.NEXT_PUBLIC_VWO_ACCOUNT_ID;
// VWO SDK key, found in VWO dashboard after configuring a fullstack project
export const VWO_SDK_KEY = process.env.NEXT_PUBLIC_VWO_SDK_KEY;

// This is just a minimal repro, so the following environment variables just
// exist to setup some A/B test campaign, with two variations (one control, one "test")
export const VWO_EXPERIMENT_CAMPAIGN_KEY = process.env.NEXT_PUBLIC_VWO_EXPERIMENT_CAMPAIGN_KEY;
export const VWO_EXPERIMENT_CONTROL_VARIATION_KEY = process.env.NEXT_PUBLIC_VWO_EXPERIMENT_CONTROL_VARIATION_KEY;
export const VWO_EXPERIMENT_TEST_VARIATION_KEY = process.env.NEXT_PUBLIC_VWO_EXPERIMENT_TEST_VARIATION_KEY;
