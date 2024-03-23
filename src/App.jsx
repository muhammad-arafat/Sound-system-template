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
    <>
      <div>
        <Banner />
      </div>
      <div>
        <ProductDescription />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <PublicUses />
      </div>
      <div>
        <CommunityUses />
      </div>
      <div>
        <Commercial />
      </div>

      <div>
        <ProductTab />
      </div>
      <div className=' my-10 md:my-20'>
        <ProductCarousal />
      </div>
      <div>
        <Awards />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Subscription />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
