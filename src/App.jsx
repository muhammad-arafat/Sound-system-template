import Awards from "./components/Awards";
import Banner from "./components/Banner";
import Commercial from "./components/Commercial";
import CommunityUses from "./components/CommunityUses";
import Footer from "./components/Footer";
import ProductCarousal from "./components/ProductCarousal";
import ProductDescription from "./components/ProductDescription";
import ProductTab from "./components/ProductTab";
import Products from "./components/Products";
import PublicUses from "./components/PublicUses";
import Subscription from "./components/Subscription";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Banner />
      <ProductDescription />
      <div className=' mt-10 md:mt-26'>
        <Products />
      </div>
      <PublicUses />
      <CommunityUses />
      <Commercial />
      <ProductTab />
      <div className=' my-10 md:my-20'>
        <ProductCarousal />
      </div>
      <Awards />
      <Testimonial />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
