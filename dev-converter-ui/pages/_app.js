import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="h-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
