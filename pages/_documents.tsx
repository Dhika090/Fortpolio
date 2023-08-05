import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';
class MyDocument extends Document {
   render(){
    return (
      <Html lang='en'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="/favicon1.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap" rel="stylesheet"/>
        </Head>
        <body className='bg-fixed bg-gradient-to-r dark:from-dark-100 dark:to-dark-200 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument