import Banner from "./components/Banner";
import Commercial from "./components/Commercial";
import CommunityUses from "./components/CommunityUses";
import ProductDescription from "./components/ProductDescription";
import Products from "./components/Products";
import PublicUses from "./components/PublicUses";

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
    </>
  );
}

export default App;
