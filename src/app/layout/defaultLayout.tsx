import React, { VFC } from "react";
import Head from "next/head";
import { Meta } from "~/config/meta";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  children: React.ReactNode;
};

const DefaultLayout: VFC<Props> = ({
  children,
  title,
  description,
  image,
  url,
}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title ? title : Meta.title}</title>
        <meta
          name="description"
          content={description ? description : Meta.description}
        />
        <meta property="og:url" content={url ? url : Meta.url} />
        <meta property="og:image" content={image ? image : Meta.image} />
        <meta property="og:title" content={title ? title : Meta.title} />
        <meta
          property="og:description"
          content={description ? description : Meta.description}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={image ? image : Meta.image} />
        <meta property="twitter:title" content={title ? title : Meta.title} />
        <meta
          property="twitter:description"
          content={description ? description : Meta.description}
        />
        <link rel="canonical" href={url ? url : Meta.url} />
      </Head>
      {children}
    </>
  );
};

export default DefaultLayout;
