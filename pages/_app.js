import React from "react";
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || React.Fragment;

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
