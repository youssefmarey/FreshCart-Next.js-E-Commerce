
import React from "react";
import { getAllProducts } from "./apis/allProducts";
import HomeCard from "./_Components/HomeCard/HomeCard";
import MainSlider from "./_Components/MainSlider/MainSlider";
import CategorySlide from "./_Components/CategorySlide/CategorySlide";
import { product } from "@/types/Product.type";

const Home = async () => {
  const data: product[] = await getAllProducts();


  

  return (
    <section>
      <div className="p-5 md:p-0 w-full md:w-[80%] my-10 mx-auto">
         <MainSlider />
         <CategorySlide />
        <div className="flex flex-wrap">
          {data.map((product: product, idx: number) => <HomeCard key={idx} product={product}  />)}
        </div>
      </div>
    </section>
  );
};

export default Home;
