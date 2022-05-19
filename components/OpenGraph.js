import Head from "next/head";
import config from "@/config/siteConfig";

export const OpenGraph = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
      <meta name="description" content={config.info.desc} />
      <meta property="og:url" content={"https://ilhambara.vercel.app/"} key="ogurl" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={"Bara // Portfolio Website"} key="ogtitle" />
      <meta property="og:site_name" content={"Ilham Bara | Next Portfolio"} key="ogsitename" />
      <meta property="og:description" content={config.info.desc} key="ogdesc" />
      <meta
        property="og:image"
        content={"https://res.cloudinary.com/drixfgugx/image/upload/v1620505612/web-v3/og-image_oulcs7.png"}
      />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={"@zgve679jdv"} />
      <meta name="twitter:creator" content={"@zgve679jdv"} />
      <title>Ilham Bara | Next Portfolio</title>
    </Head>
  );
};
