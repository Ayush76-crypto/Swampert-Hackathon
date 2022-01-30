import React, { useContext } from "react";
import { UserContext } from "./userContext/context";
import {  signOut } from "firebase/auth";
import { auth } from "../fbcongif";
import logo from './assets/photos/logo.png'

function Navbar() {
  return (
  const { user } = useContext(UserContext);
  const logout = async () => {
    await signOut(auth);
  };
  const links = user?.email ? <a href="/" onClick={logout} >Logout</a> : <a href="/Login" >Login</a> ;
    <nav className="flex bg-black text-white h-20 items-center px-20 cursor-pointer">
      <img src={logo} alt="LOGO" style={{width:"100px",height:"100px"}}/>
      <ul className="cursor-pointer flex justify-end px-12 space-x-11 text-xl font-semibold ml-auto">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About Us</a></li>
        <li><a href="/News">News</a></li>
        <li><a href="/Marketplace">Marketplace</a></li>
        <li><a href="/Blog">Blog</a></li>
      </ul>
      <button className="transition ease-in-out bg-custom-blue hover:bg-[#F38181] text-black duration-200 font-bold py-1 px-10 rounded-full hover:text-white h-12 text-xl">
      {links}
      </button>
    </nav>
  );
}

export default Navbar;
