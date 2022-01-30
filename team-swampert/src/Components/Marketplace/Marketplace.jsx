import React from "react";

function Marketplace() {
  return (
    <div className="divide-y divide-gray-600">
      <div>
        <div className="mt-20 text-center">
          <h2 className="font-bold text-5xl">
            SELECT A PRODUCT TO{" "}
            <span className="text-[#F38181]">BUY OR SELL</span>
          </h2>
          <p className="pb-8 font-[600] text-lg mt-6 px-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            metus id urna porttitor convallis sed quis nulla. Ut sit amet metus
            id urna porttitor convallis sed quis nulla.
          </p>
        </div>

        <div className="flex justify-around mx-10 my-4 mb-10">
          <div className="w-48 text-center h-80 ml-10 ">
            <a href="/Market/Rice">
              <img
                src={require("../assets/photos/Group 17.svg").default}
                className="w-36 mx-auto"
                alt=""
              />
              <h3 className="text-[#F38181] font-semibold text-2xl p-4">
                RICE
              </h3>
            </a>
          </div>

          <div className="w-48 text-center">
            <a href="/Market/Wheat">
              <img
                src={require("../assets/photos/Group 14.svg").default}
                className="w-36 mx-auto"
                alt=""
              />
              <h3 className="text-[#F38181] font-semibold text-2xl p-4 px-2">
                WHEAT
              </h3>
            </a>
          </div>

          <div className="w-48 text-center">
            <a href="/Market/Cereal">
              <img
                src={require("../assets/photos/Group 15.svg").default}
                className="w-36 mx-auto"
                alt=""
              />
              <h3 className="text-[#F38181] font-semibold text-2xl p-4 px-0">
                CEREAL
              </h3>
            </a>
          </div>

          <div className="w-48 text-center">
            <a href="/Market/Corn">
              <img
                src={require("../assets/photos/Group 16.svg").default}
                className="w-36 mx-auto"
                alt=""
              />
              <h3 className="text-[#F38181] font-semibold text-2xl p-4">
                CORN
              </h3>
            </a>
          </div>
        </div>
      </div>

      {/* Fourth Component */}
      <div className=" mt-20  p-4 text-center">
        <h3 className="font-bold text-4xl">
          CAN'T FIND THE PRODUCT{" "}
          <span className="text-[#F38181]">YOU ARE LOOKING FOR ??</span>
        </h3>
        <div className="max-w-lg py-8 ">
          <button className="transition ease-in-out bg-custom-blue hover:bg-[#F38181] text-white duration-200 hover:-translate-y-1 font-bold py-4 px-4 rounded-full drop-shadow-xl">
            Know More About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
