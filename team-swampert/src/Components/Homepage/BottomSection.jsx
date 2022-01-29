import React from "react";

function BottomSection() {
  return (
    <div className="divide-y divide-gray-600">
      {/* Fourth Component */}
      <div className=" flex py-32 px-10 justify-around">
        <div className="max-w-lg py-8">
          <p className="font-[700] py-6 text-xl">Features</p>
          <ol className="pb-8 font-[400] text-lg list-disc">
            <li>Open marketplace for everyone and anyone.</li>
            <li>24/7 Customer Support.</li>
            <li>Open marketplace for everyone and anyone.</li>
            <li>24/7 Customer Support.</li>
            <li>Open marketplace for everyone and anyone.</li>
            <li>24/7 Customer Support.</li>
          </ol>
          <button className="transition ease-in-out bg-custom-blue hover:bg-[#F38181] text-white duration-200 hover:-translate-y-1 font-bold py-4 px-7 rounded-full drop-shadow-xl">
            Know More About Us
          </button>
        </div>
        <img
          src={require("../assets/photos/homepage-third.svg").default}
          alt=""
          className="w-2/6 h-88"
        />
      </div>

      {/* Fifth Component */}

      <div className=" flex py-36 px-10 justify-around">
        <img
          src={require("../assets/photos/homepage-fourth.svg").default}
          alt=""
          className="w-2/6 h-88 mx-6"
        />
        <div className="max-w-lg py-8">
          <p className="font-[700] py-6 text-4xl">Pricing</p>
          <p className="pb-8 font-[600] text-lg">
            We charge a small fee to both the buyer and seller once trade is
            done.Our prices are normally based on the volume of your trade.
          </p>

          <p className="font-[700] py-6 text-4xl">Blog</p>
          <p className="pb-8 font-[600] text-lg">
            Keep in contact with your fellow buyers and traders.
          </p>

          <button className="transition ease-in-out bg-custom-blue hover:bg-[#F38181] text-white duration-200 hover:-translate-y-1 font-bold py-4 px-7 rounded-full drop-shadow-xl">
            Explore Marketplace
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
