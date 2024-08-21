import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

//components
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}/data/data.json`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching data: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Check if the URL contains a 'redirect' query parameter
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get("redirect");

    if (redirectPath) {
      // Ensure the path does not include the base path
      const cleanPath = redirectPath.startsWith("/photosnap_site")
        ? redirectPath.replace("/photosnap_site", "")
        : redirectPath;

      // Navigate to the cleaned path
      if (cleanPath !== location.pathname) {
        navigate(cleanPath, { replace: true });
      }
    }
  }, [location, navigate]);

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

      <Footer data={data.global.footer} />
    </>
  );
}

export default App;
