import React from "react";

function Navbar() {
  return (
    <nav className="flex bg-black text-white h-20 items-center px-20 cursor-pointer">
      <h2 className="font-bold text-4xl ml-16">Logo</h2>
      <ul className="cursor-pointer flex justify-end px-12 space-x-11 text-xl font-semibold ml-auto">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About Us</a></li>
        <li><a href="/News">News</a></li>
        <li><a href="/Marketplace">Marketplace</a></li>
        <li><a href="/Blog">Blog</a></li>
      </ul>
      <button className="transition ease-in-out bg-custom-blue hover:bg-[#F38181] text-black duration-200 font-bold py-1 px-10 rounded-full hover:text-white h-12 text-xl">
      <a href="/Login" >Login</a> 
      </button>
    </nav>
  );
}

export default Navbar;
