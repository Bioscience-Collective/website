import Head from "next/head"

export default function Meta(props) {
    return (
        <Head>
            {props.title ? (
                <title>{props.title} | M3TA — The hackathon for hackathon organizers.</title>
            ) : (
                    <title>M3TA — The hackathon for hackathon organizers.</title>
                )}
            <meta name="description" content="Join us to build the tools that you wish you had for the next generation of hackathon organizers." />
            <meta property="og:site_name" content="M3TA &ndash; The hackathon for hackathon organizers." />
            <meta property="og:title" content="M3TA &ndash; The hackathon for hackathon organizers." />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Join us to build the tools that you wish you had for the next generation of hackathon organizers." />
            <meta property="og:image" content="https://m3ta.io/assets/images/share.jpg?v10880503247951" />
            <meta property="og:image:type" content="image/jpeg" /><meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="600" /><meta property="og:url" content="https://m3ta.io" />
            <meta property="twitter:card" content="summary_large_image" />
            <link rel="icon" type="image/png" href="favicon.png"></link>
            <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
            {props.children}
        </Head>
    )
}