import PurityTest from "@/components/PurityTest";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>Insufferable Test</title>
        <meta name="description" content="How chronically online are you?" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Insufferable Test" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Insufferable Test" />
        <meta property="og:description" content="How chronically online are you?." />
        <meta property="og:url" content={"grandiose-five.vercel.app"} />
        <meta property="og:image" content={`grandiose-five.vercel.app/cover.png`} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insufferable Test" />
        <meta name="twitter:description" content="How chronically online are you?" />
        <meta name="twitter:image" content={`grandiose-five.vercel.app/cover.png`} />
      </Head>
      <div className="container max-w-3xl px-4 py-6 mx-auto">
        <div className="max-w-3xl">
          <Image
            src="/header.png"
            alt="How insufferable are you test"
            width={1728}
            height={523}
          />
          <div className="text-center -mt-8">
            <p className="mb-2">
              This is an rudimentary assessment of how insufferable an
              individual could be based on habits and traits often seen in
              chronically online Gen Z spaces such as underground TikTok.
            </p>
            <p className="mb-2">
              This is an opportunity for individuals to find multiple traits,
              positive or negative that they share among peers. In no way do any
              of these traits define you as an individual.
            </p>

            <p className="font-bold mb-2">
              Click on every item you have done.{" "}
              <span className="underline">MPS</span> stands for Member of the
              Preferred Sex.
            </p>
            <div className="space-x-2 pb-3">
              <a
                href="https://github.com/vznh/grandiose"
                className="underline decoration-dotted hover:decoration-solid opacity-50 w-6 h-6 text-center"
              >
                GitHub
              </a>
              <a
                href="https://x.com/@vivivinh"
                className="underline decoration-dotted hover:decoration-solid opacity-50 w-6 h-6 text-center"
              >
                X/Twitter
              </a>
              <p className="opacity-50">
                We welcome open-source contributions to questions! See{" "}
                <a
                  className="hover:underline decoration-dotted"
                  href="https://github.com/vznh/grandiose"
                >
                  the rulebook for contributing.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pl-10 pr-10">
        <PurityTest />
      </div>
    </main>
  );
}
