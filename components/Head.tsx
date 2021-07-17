import NextHead from 'next/head';

export default function Head() {
    return(
        <NextHead>
            <title>Nick Zou | Designer, Developer, Manager</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&family=Roboto:wght@700;400&display=swap" rel="stylesheet"></link>
            <script src="https://kit.fontawesome.com/134f31dab6.js" crossOrigin="anonymous" async></script>
            <meta name="description" content="Toronto based designer, front-end developer, and web development manager. Here to help you solve your technical challenges and bring your product to market quickly and efficiently."></meta>
        </NextHead>
    )
};