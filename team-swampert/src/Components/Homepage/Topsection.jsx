import React,{useContext} from "react";
import { UserContext } from "../userContext/context";

function Topsection() {
  return (
  const { user } = useContext(UserContext);

    <div className="divide-y divide-gray-600">
      {/* First Component */}
      <div className=" flex py-32 px-10 justify-around">
        <div className="max-w-lg py-8">
          <p className="font-[800] py-6 text-2xl">
            A B2B DIGITAL MARKETPLACE WHERE FOOD TRADE IS MADE EASY AND SAFE!
          </p>
          <p className="pb-8 font-[400] text-lg">
            We open the door to thousands of approved buyers and sellers. Post
            your crop bid as a registered buyer, or create your crop offer as a
            platform verified seller. Through our rigorous customer compliance
            we make sure that only reliable users gain access to our digital
            marketplace. There are two ways to get started.
          </p>
          {user?.email ?   <h1 className="text-4xl"> <b>Welcome !!</b></h1> :
          <button className="transition ease-in-out bg-custom-blue hover:bg-[#F38181] text-white duration-200 hover:-translate-y-1 font-bold py-4 px-7 			rounded-full drop-shadow-xl">
            <a href="/SignUp" >Join Us</a>
          </button>}
        </div>
        <img
          src={require("../assets/photos/Asset 1 1.svg").default}
          alt=""
          className="w-2/6 h-88"
        />
      </div>

      {/* Second Component */}
      <div className=" flex py-36 px-10 justify-around">
        <img
          src={require("../assets/photos/Asset 2 1.svg").default}
          alt=""
          className="w-2/6 h-88 mx-6"
        />
        <div className="max-w-lg py-8">
          <p className="font-[1000] py-6 text-4xl">Solutions</p>
          <p className="pb-8 font-[600] text-lg">
            Marketplace is a digital B2B market solution that brings together
            Farmers and Industrial Buyers. We do not buy or sell any crops ,
            what we provide is a marketplace for vendors and farmers to interact
            and sell crops.
          </p>
          <button className="transition ease-in-out bg-custom-blue hover:bg-[#F38181] text-white duration-200 hover:-translate-y-1 font-bold py-4 px-7 rounded-full drop-shadow-xl">
            Explore Marketplace
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topsection;
