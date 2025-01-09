/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { DiscussForm } from 'parts/DiscussForm';
import { Helmet } from 'react-helmet'; // Import react-helmet for managing head
import Header from 'parts/Header';
import Footer from 'parts/Footer';

export const DiscussProjectPage = () => {
  const [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectIdea: '',
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectIdea: '',
    });
  };

  return (
    <>
      {/* SEO Enhancements */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="NxtLink Tech offers cutting-edge technology solutions to revolutionize the future. Contact us for advanced tech solutions in various industries."
        />
        <meta
          name="keywords"
          content="technology solutions, NxtLink Tech, software development, innovation, future tech, tech services, nxtlinktech, nxtlink tech, nxtlinktech software solutions, nxtlinktech coimbatore"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <title>NxtLink Tech - Innovating Technology Solutions</title>

        {/* Open Graph for social media sharing */}
        <meta
          property="og:title"
          content="NxtLink Tech - Innovating Technology Solutions"
        />
        <meta
          property="og:description"
          content="NxtLink Tech offers cutting-edge technology solutions to revolutionize the future."
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
          content="NxtLink Tech - Innovating Technology Solutions"
        />
        <meta
          name="twitter:description"
          content="Revolutionizing the future with cutting-edge technology solutions."
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
      <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
      <Footer />
    </>
  );
};
