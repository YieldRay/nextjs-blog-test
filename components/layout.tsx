import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { name, siteTitle } from "../lib/config";
const ogImg = `https://og-image.vercel.app/${encodeURI(
    siteTitle
)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`;

function ColCenter({ children, ...props }: any) {
    return (
        <div {...props} className="flex flex-col items-center text-center">
            {children}
        </div>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <style jsx>
                {`
                    .container {
                        max-width: 36rem;
                        padding: 0 1rem;
                        margin: 3rem auto 6rem;
                    }
                `}
            </style>
            <div className="container">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="A personal website using Next.js" />
                    <meta property="og:image" content={ogImg} />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <header className="pb-8">
                    <ColCenter>
                        <Link href="/">
                            <div className="transition hover:scale-105">
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    height={144}
                                    width={144}
                                    alt={name}
                                    className="rounded-full"
                                />
                            </div>
                            <h3 className="font-mono text-gray-900 no-underline">{name}</h3>
                        </Link>
                    </ColCenter>
                    <ul className="list-none pt-2 flex gap-2 justify-center items-center">
                        {[
                            ["Home", "/"],
                            ["Archives", "/archives"],
                        ].map(([name, href]) => (
                            <li className="list-none p-1 m-0 text-base underline">
                                <Link href={href}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </header>

                <main>{children}</main>
            </div>
        </>
    );
}
