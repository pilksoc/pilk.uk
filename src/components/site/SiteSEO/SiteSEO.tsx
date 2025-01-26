import React from "react";

interface SEOOptions {
  title?: string;
  description?: string;
}

const SiteSEO = ({ options }: { options: SEOOptions }) => {
  const seo = {
    title: options.title
      ? `${options.title} - Pilksoft Interactive On-Line`
      : "Pilksoft Interactive On-Line",
    description: options.description,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </>
  );
};

export { SiteSEO };
