import React from "react";
import BottomSection from "./BottomSection";
import Topsection from "./Topsection";

function Homepage() {
  return (
    <div className="bg-custom-bg divide-y divide-gray-600">

      <Topsection />

      {/* Third Component */}
      <div>
        <div className="mt-20 text-center">
          <h2 className="font-bold text-5xl">
            KEY <span className="text-[#F38181]">FEATURES</span>
          </h2>
          <p className="pb-8 font-[600] text-lg mt-6 px-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            metus id urna porttitor convallis sed quis nulla. Ut sit amet metus
            id urna porttitor convallis sed quis nulla.
          </p>
        </div>

        <div className="flex justify-around mx-16 my-8 mb-20">
          <div className="w-48 text-center h-80 ml-10 ">
            <img
              src={require("../assets/photos/Group 17.svg").default}
              className="w-36 mx-auto"
              alt=""
            />
            <h3 className="text-[#F38181] font-semibold text-2xl p-4">
              FAIRTRADE
            </h3>
            <p className="text-xl font-semibold">
              Redistribution of value in food supply chain
            </p>
          </div>

          <div className="w-48 text-center">
            <img
              src={require("../assets/photos/Group 14.svg").default}
              className="w-36 mx-auto"
              alt=""
            />
            <h3 className="text-[#F38181] font-semibold text-2xl p-4 px-2">
              USER FRIENDLY
            </h3>
            <p className="text-xl font-semibold">
              Reduces costs to buyers without losing reliability
            </p>
          </div>

          <div className="w-48 text-center">
            <img
              src={require("../assets/photos/Group 15.svg").default}
              className="w-36 mx-auto"
              alt=""
            />
            <h3 className="text-[#F38181] font-semibold text-2xl p-4 px-0">
              FOOD TRACEABILITY
            </h3>
            <p className="text-xl font-semibold">
              Crop reliabilility through supply chain traceability.
            </p>
          </div>

          <div className="w-48 text-center">
            <img
              src={require("../assets/photos/Group 16.svg").default}
              className="w-36 mx-auto"
              alt=""
            />
            <h3 className="text-[#F38181] font-semibold text-2xl p-4">
              TRANSPARENCY
            </h3>
            <p className="text-xl font-semibold">
              Direct transactions between farmers and industry/retail.
            </p>
          </div>
        </div>
      </div>

      <BottomSection />


    </div>
  );
}

export default Homepage;
