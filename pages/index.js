import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mint Ventures AI Demo!</title>
        <link rel="icon" href="/MV_favicon.svg" />
      </Head>

      <main>
        <Header title="Welcome to Mint Ventures AI Pitch Brand Risk Assessment Assistant Demo!" />
        <p className="description">
          Describe a company/brand and this AI agent will rate the severity and describe the potential types of brand risks. Get started by clicking on the bot icon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
