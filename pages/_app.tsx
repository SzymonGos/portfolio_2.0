import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import '../styles/index.scss'

export default ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return <Component {...pageProps} />
}
