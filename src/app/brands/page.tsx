import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";
import { Brand } from "@/types/cart.type";
import { getAllBrands } from "../apis/getAllBrands";
import Image from "next/image";
import { Daum } from "@/types/brand.type";

const Brands = async () => {
  const data: Brand = await getAllBrands();


  return (
    <div className="w-full  mx-auto px-5 md:px-0 my-10 ">
      <h1 className="text-5xl mb-10 text-center text-red-400 font-bold">
        All Brands
      </h1>

      <div className=" flex flex-wrap justify-center gap-4">
        {data.map(function (item: Daum , idx: number) {
          return (
            <Card
              key={idx}
              className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3   cursor-pointer rounded-2xl
    transition-all duration-300 ease-out transform-gpu
    shadow-sm hover:-translate-y-1
    hover:shadow-[0_12px_40px_rgba(0,0,0,0.175)]
    focus-within:shadow-[0_12px_40px_rgba(0,0,0,0.175)]"
            >
              <CardHeader className="">
                <Image
                  src={item.image}
                  alt=""
                  className="w-full"
                  width={200}
                  height={200}
                />
              </CardHeader>

              <CardFooter className="mx-auto">
                <h2 className="text-xl">{item.name}</h2>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
