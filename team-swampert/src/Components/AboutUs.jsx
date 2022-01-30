import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div className="bg-custom-bg">
      <Navbar />

      {/* Main Components of About Us Page. */}
      <main className="divide-y divide-gray-600">
        {/* Our Vission Component */}
        <div className="mt-20 py-2 text-center">
          <h2 className="font-bold text-5xl">
            OUR <span className="text-[#F38181]">VISION</span>
          </h2>
          <p className="font-[600] text-lg mt-6 px-48">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            metus id urna porttitor convallis sed quis nulla. Ut sit amet metus
            id urna porttitor convallis sed quis nulla. Ut sit amet metus id
            urna porttitor convallis sed quis nulla. Ut sit amet metus id urna
            porttitor convallis sed quis nulla.
          </p>
        </div>

        {/* Our Mission Component */}
        <div className="mt-20 pt-20 text-center">
          <h2 className="font-bold text-5xl">
            OUR <span className="text-[#F38181]">MISSSION</span>
          </h2>
          <p className="mb-24 font-[600] text-lg mt-6 px-48">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            metus id urna porttitor convallis sed quis nulla. Ut sit amet metus
            id urna porttitor convallis sed quis nulla. Ut sit amet metus id
            urna porttitor convallis sed quis nulla. Ut sit amet metus id urna
            porttitor convallis sed quis nulla.
          </p>
        </div>

        {/* Connect Component */}
        <div className="">
          {/* header of Connect us */}
          <div className="mt-20 text-center">
            <h2 className="font-bold text-2xl">CONNECT WITH US</h2>
            <p className="mb-4 font-[600] text-lg mt-6 px-96">
              Customer Service Representatives are available via phone or live
              chat
              <br /> Monday to Friday from 8 AM – 5 PM IST
              <br /> Closed on Federal Holidays.
            </p>
          </div>
          {/* Email part of Connect Us */}
          <div className="flex justify-around mx-16">
            <div className="w-48 text-center h-80 ml-10 ">
              <img
                src={require("./assets/photos/outgoing-call-icon.svg").default}
                className="w-36 mx-auto"
                alt=""
              />
              <h3 className="text-[#F38181] font-semibold text-2xl p-4">
                Call Us
              </h3>
              <p className="text-xl font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="w-48 text-center">
              <img
                src={require("./assets/photos/mail-icon.svg").default}
                className="w-36 mx-auto"
                alt=""
              />
              <h3 className="text-[#F38181] font-semibold text-2xl p-4 px-2">
                Email Us
              </h3>
              <p className="text-xl font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="w-48 text-center">
              <img
                src={require("./assets/photos/chat-icon.svg").default}
                className="w-36 mx-auto"
                alt=""
              />
              <h3 className="text-[#F38181] font-semibold text-2xl p-4 px-0">
                Chat with Us
              </h3>
              <p className="text-xl font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;
