/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import HeroTeam from 'parts/HeroTeam';
import AllTeam from 'parts/AllTeam';
import Footer from 'parts/Footer';

import { TeamMembers } from 'json/landingPageData';
import { Helmet } from 'react-helmet'; // Import react-helmet for managing head

export default class TeamPage extends Component {
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
            content="Meet the team behind NxtLink Tech, experts in technology solutions, innovation, and cutting-edge software development."
          />
          <meta
            name="keywords"
            content="team, NxtLink Tech, software development, innovation, tech experts, nxtlinktech, nxtlink team"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="robots" content="index, follow" />
          <title>Meet the Team - NxtLink Tech</title>

          {/* Open Graph for social media sharing */}
          <meta property="og:title" content="Meet the Team - NxtLink Tech" />
          <meta
            property="og:description"
            content="Meet the team behind NxtLink Tech, experts in technology solutions, innovation, and cutting-edge software development."
          />
          <meta property="og:image" content="https://nxtlinktech.vercel.app/logo.png" />
          <meta property="og:url" content="https://nxtlinktech.vercel.app/team" />
          <meta property="og:type" content="website" />

          {/* Twitter card metadata */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Meet the Team - NxtLink Tech" />
          <meta
            name="twitter:description"
            content="Meet the team behind NxtLink Tech, experts in technology solutions, innovation, and cutting-edge software development."
          />
          <meta name="twitter:image" content="https://nxtlinktech.vercel.app/logo.png" />

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
        <HeroTeam />
        <AllTeam data={TeamMembers} />
        <Footer />
      </>
    );
  }
}
