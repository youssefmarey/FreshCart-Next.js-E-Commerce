import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { product } from "@/types/Product.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddBtnCart from "../AddBtnCart/AddBtnCart";

const HomeCard = ({ product }: { product: product }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">
      <div className="inner ">
        <Card
          className="p-2   cursor-pointer rounded-2xl
    transition-all duration-300 ease-out transform-gpu
    shadow-sm hover:-translate-y-1
    hover:shadow-[0_12px_40px_rgba(0,0,0,0.175)]
    focus-within:shadow-[0_12px_40px_rgba(0,0,0,0.175)]"
        >
          <Link href={`/productDetails/${product.id}`}>
            <CardHeader className="p-0">
              <Image
                width={500}
                height={500}
                src={product.imageCover}
                alt={product.category.name}
              />
            </CardHeader>
            <CardContent className="p-0">
              <p className="font-bold text-green-500">
                {product.category.name}
              </p>
              <p className="line-clamp-1">{product.title}</p>
            </CardContent>
            <CardFooter className="p-0">
              <div className="flex justify-between w-full items-center">
                <p>{product.price} EGP</p>
                <p>
                  {product.ratingsAverage}{" "}
                  <i className="fa-solid fa-star text-yellow-300"></i>{" "}
                </p>
              </div>
            </CardFooter>
          </Link>
          <AddBtnCart id={product.id} />
        </Card>
      </div>
    </div>
  );
};

export default HomeCard;
