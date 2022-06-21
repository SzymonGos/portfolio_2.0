import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='min-h-screen font-montserrat font-default text-base text-gray-300'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
