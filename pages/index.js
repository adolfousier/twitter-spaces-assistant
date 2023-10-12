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
        <Header title="Welcome to Mint Ventures AI Twitter Spaces Q&A Assistant Demo!" />
        <p className="description">
          This AI Agent will help you prepare for a Twitter Spaces or interviews by drafting ten potential questions a host may ask on a topic.</p> 
          <p>Get started by clicking on the bot icon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
