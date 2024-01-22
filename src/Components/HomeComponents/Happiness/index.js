import React from "react";
import { Button } from "@material-tailwind/react";
import "../Happiness/index.css";

function Happiness() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 bg-white">
      <div className="text-justify my-8 md:my-24 mx-4 md:mx-8 p-4 md:p-8">
        <h1 className="main-head text-4xl font-bold mb-4 md:mb-6">
          Your Happiness is Our Responsibility
        </h1>

        <p className="text-xl text-muted mb-2 md:mb-4">
          Empowering smiles, because your happiness is our mission
        </p>
        <p className="text-xl mb-4">
          To ensure customer happiness, we prioritize open communication,
          actively listen to their needs, and swiftly address any concerns. Our
          commitment extends to delivering high quality products/services that
          exceed expectations. Regularly seeking feedback allows us to
          continuously improve, tailor our offerings to customer preferences,
          and demonstrate our dedication to their satisfaction. Timely and
          personalized support further enhances the overall customer experience,
          fostering a positive relationship and solidifying trust in our brand.
        </p>
        <Button className="bg-sky-700 hover:bg-sky-800 text-white   md:w-68 my-2 md:my-5 rounded-md font-sans font-medium text-lg transform transition duration-500 hover:scale-110">
          ▶️ Watch Co-workers Video
        </Button>
      </div>
      <div className="flex justify-center">
        <img
          className="w-full md:w-auto h-auto"
          src="https://img.freepik.com/free-vector/one-man-jumping-cheerful-icon-isolated_18591-82710.jpg?w=740&t=st=1705746597~exp=1705747197~hmac=33ab33f1efe2f6fc12687b0a96ca62b55bf95e172f9d2a05b8fd1c73f94b44f6"
          alt=""
        />
      </div>
    </div>
  );
}

export default Happiness;
