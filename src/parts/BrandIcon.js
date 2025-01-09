/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className="brand-icon"
      type="link"
      href="/"
    >
      <img src="/logo.png" alt="Logo" />
      <p className="text-black text-4xl font-medium">
        NxtLink
        <span style={{ color: '#FF0000' }}>Tech</span>
      </p>
    </Button>
  );
}
