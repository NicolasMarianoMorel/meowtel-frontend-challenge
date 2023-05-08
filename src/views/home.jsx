import React, { useEffect, useState }  from 'react'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Footer from '../components/footer';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768 ? true : false);
    };
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <main>
        <Navbar isMobile={isMobile}/>
        <Layout isMobile={isMobile}/>
        <Footer />
    </main>
  )
}

export default Home