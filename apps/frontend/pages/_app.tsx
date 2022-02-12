import '../styles/globals.css'
import type { AppProps } from 'next/app'
import StaticLayout from '../components/page-layouts/StaticLayout'
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StaticLayout>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </StaticLayout>
    </QueryClientProvider>
  )
}

export default MyApp
