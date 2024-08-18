import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';

//components
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

function App() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('/data/data.json');
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
         } catch (err) {
            console.error('Error fetching data: ', err);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <>
         <Navbar data={data.global.nav} />

         <Routes>
            <Route path="/" element={<Home data={data.home} />} />
            <Route path="/stories" element={<Stories data={data.stories} />} />
            <Route path="/features" element={<Features data={data.features} />} />
            <Route path="/pricing" element={<Pricing data={data.pricing} />} />
            <Route path="*" element={<NotFound />} />
         </Routes>

         {/* <Footer data={data.global.footer} /> */}
      </>
   );
}

export default App;
