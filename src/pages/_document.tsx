import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
            </Head>
            <body className='lg:bg-app lg:bg-cover lg:bg-no-repeat bg-black'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}