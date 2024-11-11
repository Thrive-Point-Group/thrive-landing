import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/squarelogo.png" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />

                <title>Thrive</title>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}