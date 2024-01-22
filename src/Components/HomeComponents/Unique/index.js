import React from "react";
import { Carousel, Button } from "@material-tailwind/react";
import gulabjamun from "../../Images/gulabjamun.png";
import beans from "../../Images/beans.png";
import biryani from "../../Images/biryani.png";
import "../Unique/index.css"; // You may need to adjust the path based on your project structure

export default function Unique() {
  return (
    <div className="background-color h-full ">
      <div className="container mx-auto py-16">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="lg:w-7/12 sm:w-full md:w-full mb-8 sm:mb-0">
            <h1 className="main-heading mb-4 md:text-start">
              Welcome to AI Chef Master
            </h1>
            <div className="md:text-start">
              <p className=" sub-heading text-xl">
                A Unique and powerful software to create and customize your own
                AI CHEF with the help of the AI assistant
              </p>
              <Button className="button-btn rounded-full shadow-lg hover:shadow-2xl">
                <a href="/" className="no-underline text-white font-semibold">
                  Try for Free ➪
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-5/12 sm:w-full md:w-full">
            <div className="w-full h-auto">
              <Carousel className="rounded-xl">
                <img
                  src={gulabjamun}
                  alt="gulabjamun"
                  className="object-cover w-full h-full"
                />
                <img
                  src={beans}
                  alt="beans"
                  className="object-cover w-full h-full"
                />
                <img
                  src={biryani}
                  alt="biryani"
                  className="object-cover w-full h-full"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
