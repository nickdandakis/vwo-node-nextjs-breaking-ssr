import React from 'react';
import Head from 'next/head';
import { QueryClient, Hydrate, QueryClientProvider } from 'react-query';

function Application({ Component, pageProps }) {
 const [queryClient] = React.useState(() => new QueryClient());
  
  return (
    <>
      <Head>
        <title key="title">vwo-node-sdk + next</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default Application;
