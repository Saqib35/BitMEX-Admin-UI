import React from 'react';
import { useRouter } from 'next/router';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

export default function Layout({ children }) {
  const router = useRouter();
  const { pathname } = router;

  // Define an array of page paths where you want to show the header, sidebar, and footer
  const pagesToShowHeaderSidebarFooter = ['/login'];

  // Check if the current page is in the array
  const shouldShowHeaderSidebarFooter = pagesToShowHeaderSidebarFooter.includes(pathname);

  return (
    <>
        
          
      {!shouldShowHeaderSidebarFooter && (
        <>
          <Header />
          <SideBar />
        </>
      )}
      {children}
      {!shouldShowHeaderSidebarFooter && <Footer />}
    </>
  );
}
