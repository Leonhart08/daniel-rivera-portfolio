import React from 'react'

import '@/styles/styles.scss'

import LangProvider from '@/contexts/langProvider';

const App = ({ Component, pageProps }) => {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  )
}

export default App;
