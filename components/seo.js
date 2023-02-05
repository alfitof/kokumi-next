import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

function SEO() {
  const keyword = ['kokumi', 'boba', '@kokumi', 'minuman', 'segar', 'kokumi website', 'kokumi drink', 'minuman kokumi'];
  return (
    <Head>
      <title>Kokumi Website</title>
      <meta name="title" content="Kokumi" />
      <meta name="author" content="Alfito Febriansyah" />
      <meta name="description" content="Kokumi Website" />
      <meta name="keywords" content={keyword} />
      <link rel="canonical" href="https://kokumi-next.vercel.app" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kokumi-next.vercel.app" />
      <meta property="og:title" content="Kokumi" />
      <meta property="og:description" content="Kokumi Website" />
      <meta property="og:image" content="https://kokumiworld.com/wp-content/uploads/2022/03/20220223_NEW-website_homepage-01.svg" />
      <meta property="og:site_name" content="Kokumi" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kokumi-next.vercel.app" />
      <meta property="twitter:title" content="Kokumi" />
      <meta property="twitter:description" content="Kokumi Website" />
      <meta property="twitter:image" content="https://kokumiworld.com/wp-content/uploads/2022/03/20220223_NEW-website_homepage-01.svg" />
      <meta name="robots" content="Index" />
      <link rel="manifest" href="/manifest.json" />
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="120x108" href="/image/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x29" href="/image/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x14" href="/image/favicon.png" />
    </Head>
  );
}

SEO.prototype = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default SEO;
