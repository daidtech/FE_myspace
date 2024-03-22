import UserLayout from 'src/layouts/UserLayout';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import 'styles/global.scss';
import 'styles/custom_bootstrap.scss';
import 'styles/variables.scss';
import 'styles/comments.scss';

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

export default function MyApp({ Component, pageProps }: Props) {

  return (
    <UserLayout>
      <Component {...pageProps} />
    </UserLayout>
  )
}