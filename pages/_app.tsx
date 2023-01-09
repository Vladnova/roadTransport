import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default App;
