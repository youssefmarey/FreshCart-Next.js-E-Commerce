import React from "react";
import getAllCategories from "../apis/allCategores";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { category } from "@/types/category.type";

const Categories = async () => {
  const data: category[] = await getAllCategories();

  console.log(data);

  return (
    <div className="w-full   mx-auto px-5 md:px-0 my-10 ">
      <div className=" flex flex-wrap justify-center gap-4  ">
        {data.map(function (item: category, idx: number) {
          return (
            <Card
              key={idx}
              className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  p-3   cursor-pointer rounded-2xl
    transition-all duration-300 ease-out transform-gpu
    shadow-sm hover:-translate-y-1
    hover:shadow-[0_12px_40px_rgba(0,0,0,0.175)]
    focus-within:shadow-[0_12px_40px_rgba(0,0,0,0.175)] "
            >
              <CardHeader className="h-[300px] overflow-hidden  p-0 rounded-xl  ">
                <Image
                  src={item.image}
                  alt=""
                  className="w-full"
                  width={500}
                  height={500}
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

export default Categories;
