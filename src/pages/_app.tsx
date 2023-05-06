import '@/styles/globals.css'
import type { AppProps } from 'next/app'
//impory bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Layouts from '@/layouts';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}
