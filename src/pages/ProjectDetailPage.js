/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import Header from 'parts/Header';
import { useParams } from 'react-router-dom';
import PortfolioDetail from 'parts/PortfolioDetail';
import Footer from 'parts/Footer';
import { Portfolios } from 'json/landingPageData';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const detailData = Portfolios.filter((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const pageTitle = detailData.length === 1 ? `${detailData[0].title} - NxtLink Tech` : 'Project Details - NxtLink Tech';
  
  const pageDescription = detailData.length === 1
    ? `Learn more about the ${detailData[0].title} project. Explore how NxtLink Tech is revolutionizing industries with innovative solutions.`
    : 'Explore project details by NxtLink Tech and learn how we are revolutionizing industries with cutting-edge technology solutions.';
  
  return (
    <>
      {/* SEO Enhancements */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={pageDescription} />
        <title>{pageTitle}</title>

        {/* Open Graph for social media sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://nxtlinktech.vercel.app/logo.png" />
        <meta property="og:url" content="https://nxtlinktech.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://nxtlinktech.vercel.app/logo.png" />

        {/* Structured data (Schema Markup) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Project",
              "name": "${detailData.length === 1 ? detailData[0].title : 'Project Details'}",
              "description": "${pageDescription}",
              "url": "https://nxtlinktech.vercel.app",
              "creator": {
                "@type": "Organization",
                "name": "NxtLink Tech",
                "url": "https://nxtlinktech.vercel.app"
              },
              "image": "https://nxtlinktech.vercel.app/logo.png"
            }
          `}
        </script>
      </Helmet>

      <Header />
      <PortfolioDetail data={detailData.length === 1 ? [detailData[0]] : null} />
      <Footer />
    </>
  );
};
