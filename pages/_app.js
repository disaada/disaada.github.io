// next helpers
// components
// libs
import Layout from '../components/layout'
// styles
import '../styles/globals.css'
// api calls

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
