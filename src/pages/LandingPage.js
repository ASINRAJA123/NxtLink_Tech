/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import {
  Services, Portfolios, Advantages,
} from 'json/landingPageData'; // Removed Testimonials import
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Portfolio from 'parts/Portfolio';
import Advantage from 'parts/Advantage';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
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
            content="NxtLink Tech offers cutting-edge technology solutions to revolutionize the future. Explore our services and portfolios to see how we innovate industries."
          />
          <meta
            name="keywords"
            content="technology solutions, NxtLink Tech, software development, innovation, future tech, tech services, nxtlinktech, nxtlink tech, nxtlinktech software solutions, nxtlinktech coimbatore"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="robots" content="index, follow" />
          <title>NxtLink Tech - Technology That Drives Innovation</title>

          {/* Open Graph for social media sharing */}
          <meta
            property="og:title"
            content="NxtLink Tech - Technology That Drives Innovation"
          />
          <meta
            property="og:description"
            content="NxtLink Tech offers cutting-edge technology solutions to revolutionize the future. Explore our services and portfolios."
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
            content="NxtLink Tech - Technology That Drives Innovation"
          />
          <meta
            name="twitter:description"
            content="Revolutionizing the future with cutting-edge technology solutions. Learn more about our services."
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
              "description": "NxtLink Tech offers cutting-edge technology solutions to revolutionize the future.",
              "sameAs": [
                "https://www.linkedin.com/in/nxtlink-tech-383225344/?originalSubdomain=in",
                "https://twitter.com/nxtlinktech"
              ]
            }
            `}
          </script>
        </Helmet>

        {/* Page Content */}
        <Header />
        <Hero />
        <Service data={Services} />
        <Portfolio data={Portfolios} />
        <Advantage data={Advantages} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
