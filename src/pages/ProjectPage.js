/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet'; // Import react-helmet for managing head
import Header from 'parts/Header';
import HeroPortfolio from 'parts/HeroPortfolio';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import AllPortfolio from 'parts/AllPortfolio';
import { Portfolios } from 'json/landingPageData';

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/* SEO Enhancements */}
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Explore our portfolio at NxtLink Tech showcasing cutting-edge solutions in software development, innovation, and technology. Get in touch for more info."
          />
          <meta
            name="keywords"
            content="portfolio, software development, technology solutions, NxtLink Tech, innovation, tech services, nxtlinktech"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="robots" content="index, follow" />
          <title>NxtLink Tech - Project Portfolio</title>

          {/* Open Graph for social media sharing */}
          <meta
            property="og:title"
            content="NxtLink Tech - Project Portfolio"
          />
          <meta
            property="og:description"
            content="Explore our portfolio at NxtLink Tech showcasing cutting-edge solutions in software development, innovation, and technology."
          />
          <meta
            property="og:image"
            content="https://nxtlinktech.vercel.app/logo.png"
          />
          <meta property="og:url" content="https://nxtlinktech.vercel.app" />
          <meta property="og:type" content="website" />

          {/* Twitter card metadata */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="NxtLink Tech - Project Portfolio"
          />
          <meta
            name="twitter:description"
            content="Revolutionizing industries with cutting-edge technology solutions and innovative projects."
          />
          <meta
            name="twitter:image"
            content="https://nxtlinktech.vercel.app/logo.png"
          />

          {/* Structured data (Schema Markup) */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "NxtLink Tech",
                "url": "https://nxtlinktech.vercel.app",
                "logo": "https://nxtlinktech.vercel.app/logo.png",
                "description": "NxtLink Tech offers cutting-edge technology solutions.",
                "sameAs": [
                  "https://www.linkedin.com/in/nxtlink-tech-383225344/?originalSubdomain=in",
                  "https://twitter.com/nxtlinktech"
                ]
              }
            `}
          </script>
        </Helmet>

        <Header />
        <HeroPortfolio />
        <AllPortfolio data={Portfolios} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
