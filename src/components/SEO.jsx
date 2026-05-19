import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, ogImage, ogType = 'website', keywords, noindex }) => {
  const siteUrl = 'https://driveease.com';
  const defaultTitle = 'DriveEase — Premium Car Rental in New York';
  const defaultDescription = 'Rent premium luxury vehicles in New York. Browse our curated collection of Mercedes, BMW, Porsche and more. Book online with free cancellation.';

  return (
    <Helmet>
      <title>{title ? `${title} | DriveEase` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical || siteUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="DriveEase" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEO;
