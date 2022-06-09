import React from 'react';
import { QueryClient, Hydrate, QueryClientProvider } from 'react-query';

function Application({ Component, pageProps }) {
 const [queryClient] = React.useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default Application;