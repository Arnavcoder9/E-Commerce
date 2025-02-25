import react from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offer/Offers";
import Newcollections from "../Components/Newcollections/Newcollections";
import Newsletter from "../Components/NewsLetter/Newsletter";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
      <Newsletter />
    </div>
  );
};
export default Shop;
