import React from 'react';
import Boilerplate from '../styles/Boilerplate';
import Common from '../styles/Common';
import Typography from '../styles/Typography';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Boilerplate />
      <Common />
      <Typography />

      <Header />
      {children}
    </>
  );
}
