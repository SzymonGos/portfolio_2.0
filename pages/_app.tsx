import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'

export default ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return <Component {...pageProps} />
}
