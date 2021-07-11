import type { AppProps } from 'next/app'
import Head from '@components/Head';
import Header from '@components/Header/Header';
import '@styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">
      <Head />
      <body>
      <Header />
      <Component {...pageProps} />
      </body>
    </html>
  )
}
export default MyApp
