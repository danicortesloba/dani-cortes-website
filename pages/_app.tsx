import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/global.css'
import Head from "next/head";
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <title>DANI CORTES</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps}/>
    </div>
  )
}
