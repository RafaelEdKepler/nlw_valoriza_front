import Head from 'next/head'
import GlobalStyle from '../src/style/global';
import RegisterPage from './RegisterPage';
import InitialPage from './InitialPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Deixe o seu elogio!</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Benne&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyle/>
      <RegisterPage/>
      
    </div>
  )
}
