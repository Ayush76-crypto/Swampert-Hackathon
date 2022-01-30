
import { useState } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { auth } from "../../fbcongif";

const Login = () =>{
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    let navigate = useNavigate();
    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };

    return(
        <div className="flex justify-center content-between h-screen text-center text-xl">
          <div  className="flex flex-col justify-center content-center mx-40 px-10 text-left w-1/4 h-1/2">
          <h3 className="block my-2 w-full text-center font-extrabold text-5xl"> Login </h3>
          <div className = "mb-5 border-none flex flex-col">
           
            <label className="ml-1 mb-2 font-bold"> Email</label>
            <input
              className = "m-1 border-4 border-b-black border-t-white border-l-white border-r-white h-1/8"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </div>
          <div className = "mb-5 border-none flex flex-col">
            <label className="ml-1 mb-2 font-bold"> Password </label>
            <input
              className = "m-1 border-4 border-b-black border-t-white border-l-white border-r-white h-1/8"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </div>
        
        

        <button className="w-1/2 text-center transition ease-in-out bg-black hover:bg-[#F38181] text-white duration-200 font-bold py-1 px-10 rounded-full hover:text-white h-12 text-xl" onClick={login}> 
        Login</button>
      </div>
        </div>
    );

}
export default Login;