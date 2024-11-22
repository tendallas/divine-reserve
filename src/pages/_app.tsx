import type { AppProps } from 'next/app';
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next';
import { Rubik as Font } from 'next/font/google'

const font = Font({ subsets: ['latin'], weight: ['400', '600', '700'] });

import '../i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>5 Minute Gourmet</title>
      </Head>
      <Component {...pageProps} />
    </main>
)}
export default appWithTranslation(MyApp);