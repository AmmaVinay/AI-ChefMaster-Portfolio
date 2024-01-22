import React from "react";
import { Button } from "@material-tailwind/react";
import AIimage from "../../Images/AIimage.png";
import food1 from "../../Images/food1.png";
import aahar from "../../Images/aahar.png";
import { Link } from "react-router-dom";
import "../Pocket/index.css";
function Pocket() {
  return (
    <div className="background-style-card-container text-black px-6 py-12 lg:px-8 shadow-inner ">
      <div className="flex justify-center ">
        <div className="mt-16 md:mt-32 mb-10 md:mb-20">
          <h1 className="main-heading font-semibold text-3xl md:text-6xl drop-shadow-2xl py-3 text-black text-center ">
            THE AI CHEF IN YOUR POCKET
          </h1>
          <div className="my-7">
            <p className="text-lg md:text-2xl my-2 text-black text-center">
              Create and customize your favourite AI CHEF
            </p>
            <p className="text-lg md:text-2xl my-2 text-black text-center">
              Explore your skills with us
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="flex gap-8 justify-center">
              <Button className="button hover:shadow-lg w-48 md:w-68 rounded font-sans text-white text-sm md:text-lg transform transition duration-500 hover:scale-110">
                <a href="/" className="no-underline text-white ">
                  Try for Free ➪
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 mb-5 pb-5 justify-center text-justify">
        <div className="background-style-card max-w-sm flex flex-col mb-5">
          <div className="flex justify-center">
            <img
              className="rounded-t-lg "
              style={{ width: "210px" }}
              src={AIimage}
              alt="AIimage"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow mb-5">
            <div className="px-5">
              <h5 className="mb-2 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl dark:text-white">
                AI Assistant
              </h5>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                Elevate your cooking into a tailored and engaging adventure.
                This feature directs users in creating delightful dishes by
                enabling customization of quantities and ingredients, unfolding
                the recipe seamlessly through a blend of audio, text, and video
                to enhance the culinary journey. For more details on how this
                feature can transform your cooking experience and unlock a world
                of possibilities in the kitchen.
              </p>
            </div>
            <div className="flex justify-center">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="learn-more-button-text text-white">
                  <Link to="/aiassistant">Learn More</Link>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="background-style-card max-w-sm flex flex-col mb-5">
          <div className="flex justify-center">
            <img
              class="rounded-t-lg"
              style={{ width: "210px" }}
              src={food1}
              alt="Kitchen"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow mb-5">
            <div class="px-5">
              <h5 class="mb-2 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl dark:text-white">
                Whats in your kitchen
              </h5>
              <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
                Convert your leftover ingredients into culinary delights
                effortlessly. Users simply input their available ingredients,
                and the module generates a curated list of diverse dishes. Once
                a choice is made, users receive detailed cooking instructions,
                empowering them to effortlessly turn their kitchen odds and ends
                into delicious meals and enjoy your meals with the help of AI
                Automation.
              </p>
            </div>
            <div className="flex justify-center">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="learn-more-button-text text-white">
                  <Link to="/aikitchen">Learn More</Link>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="background-style-card max-w-sm flex flex-col mb-5">
          <div className="flex justify-center">
            <img
              class="rounded-t-lg"
              style={{ width: "210px" }}
              src={aahar}
              alt="Aahar"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow mb-5">
            <div class="px-5">
              <h5 class="mb-2 text-center  text-3xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl dark:text-white">
                Nutrition Manager{" "}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The AI Chef Master also offers a Nutrition Manager, catering to
                gym enthusiasts and fitness aficionados. This feature allows you
                to monitor your dietary intake, keeping track of what you
                consume and understanding how different foods can impact your
                body and overall well-being. Stay on top of your nutritional
                goals with precision and make informed choices for a healthier
                lifestyle.{" "}
              </p>
            </div>
            <div className="flex justify-center my-2">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="learn-more-button-text text-white">
                  <Link to="/ainutritionmanager">Learn More</Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pocket;
