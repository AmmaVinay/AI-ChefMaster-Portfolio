import React from "react";
import { Button } from "@material-tailwind/react";
import Graph from "../../Images/graph.png";
import Focus from "../../Images/focus.png";
import Customer from "../../Images/customer.png";
import "../Values/index.css";
function Values() {
  return (
    <div className="background-style-container px-6 py-12 lg:px-8 text-black">
      <div className="flex flex-col items-center justify-center py-12">
        <div className="mb-10">
          <h1 className="main-heading font-semibold text-5xl py-3 font-sans text-center text-black">
            THE VALUES AND CORE PRINCIPLE AT ACM
          </h1>
          <div className="my-7">
            <p className="text-2xl my-2 text-center backdrop-blur-3xl backdrop-blur">
              Create and customize your favorite AI CHEF
            </p>
            <p className="text-2xl my-2 backdrop-blur text-center">
              Explore your skills with us
            </p>
          </div>
          <div className="flex gap-8 justify-center">
            <Button className="button hover:shadow-lg w-48 md:w-68 rounded font-sans text-white text-sm md:text-lg transform transition duration-500 hover:scale-110">
              <a href="/" className="no-underline text-white ">
                Try for Free ➪
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center text-justify pb-5">
        {/* first Item */}
        <div className="background-style max-w-sm flex flex-col mb-5">
          <div className="flex justify-center">
            <img src={Graph} alt="Graph" />
          </div>
          <div className="flex flex-col justify-between flex-grow mb-5">
            <div className="px-5 flex-grow">
              <h5 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl dark:text-white">
                Long term Growth
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We are dedicated to expanding our user base through enhanced
                user experiences. Our strategic vision includes venturing into
                B2B collaborations, fostering partnerships, and diversifying our
                dish offerings. This approach ensures sustained innovation and
                broad market appeal, solidifying our position as a leader in the
                culinary tech industry.
              </p>
            </div>
            <div className="flex justify-center">
              <button class="learn-more  ">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="learn-more-button-text text-white">
                  <a href="/">Learn More</a>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Second Item */}
        <div className="background-style max-w-sm flex flex-col mb-5">
          <div className="flex justify-center">
            <img className="h-48" src={Focus} alt="Focus" />
          </div>
          <div className="flex flex-col justify-between flex-grow mb-5">
            <div className="px-5 flex-grow">
              <h5 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl dark:text-white">
                Focus on research and development
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Our foundation is built on innovation, constantly pushing
                technological boundaries to develop and enhance advanced
                features. With a dedicated team at the top, we ensure that our
                company maintains a leading position in industry trends,
                consistently delivering unparalleled value, and staying firmly
                committed to continuous improvement.
              </p>
            </div>
            <div className="flex justify-center">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="learn-more-button-text text-white">
                  <a href="/">Learn More</a>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Third Item */}
        <div className="background-style max-w-sm flex flex-col mb-5">
          <div className="flex justify-center">
            <img className="h-48" src={Customer} alt="Customer" />
          </div>
          <div className="flex flex-col justify-between flex-grow mb-5">
            <div className="px-5 flex-grow">
              <h5 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl dark:text-white">
                Customer priorities
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Our focus lies in offering a user-friendly interface that guides
                individuals in creating personalized recipes. Simultaneously, we
                seamlessly integrate curated content into our user experience,
                promoting overall well-being by providing nutritional insights
                and lifestyle tips.
              </p>
            </div>
            <div className="flex justify-center">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="learn-more-button-text text-white">
                  <a href="/">Learn More</a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
