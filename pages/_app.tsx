import UserLayout from 'components/layouts/UserLayout';
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { ReactNode } from 'react';
import { SSRProvider } from 'react-bootstrap';
import 'styles/global.scss'
import 'styles/custom_bootstrap.scss'
import 'styles/variables.scss';

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {

  return (
    <UserLayout>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </UserLayout>
  )
}

export default MyApp