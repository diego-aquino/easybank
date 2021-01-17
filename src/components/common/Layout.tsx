import { FC, HTMLAttributes } from 'react';
import Head from 'next/head';

import { Container } from 'styles/components/common/Layout';
import Header from './Header';
import Footer from './Footer';

interface Props extends HTMLAttributes<HTMLDivElement> {
  pageTitle: string;
}

const Layout: FC<Props> = ({ pageTitle, children, ...rest }) => (
  <Container {...rest}>
    <Head>
      <title>{pageTitle}</title>
    </Head>

    <Header />
    <main>{children}</main>
    <Footer />
  </Container>
);

export default Layout;
