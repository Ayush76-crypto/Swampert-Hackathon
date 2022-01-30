import { useState,useContext } from "react";
import {  createUserWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import "../../index.css";
import { db, auth } from "../../fbcongif";
import {doc, setDoc} from "firebase/firestore"; 
import { UserContext } from "../userContext/context";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();  
  const [type, setType] = useState("");

  let navigate = useNavigate(); 
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      
      await setDoc(doc(db, "users", user.user.uid), {
        Name: name,
        Mobile: Number(mobile),
        email: email,
        Usertype: type
      });
      navigate("/");
      //console.log(currentUser);
    } catch (error) {
      console.log(error.message);
    }
  };

    
  return (
      
    <>
    <h3 className="block my-2 w-full text-center font-extrabold text-5xl">Join</h3>
    <div className="flex justify-between content-center h-screen text-center text-xl">
      
      <div className="flex flex-col justify-center mx-40 px-10 text-left w-1/2 h-1/2">
        
          
          <div className = "mb-5 border-none flex flex-col">
          <label className="ml-1 mb-2 font-bold"> Name </label>
          <input
            className = "m-1 border-4 border-b-black border-t-white border-l-white border-r-white h-1/8"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          </div>
          <div className = "mb-5 border-none flex flex-col">
          <label className="ml-1 mb-2 font-bold"> Email </label>
          <input
            className = "m-1 border-4 border-b-black border-t-white border-l-white border-r-white h-1/8"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          </div>
          <div className = "mb-5 border-none flex flex-col">
          <label className="ml-1 mb-2 font-bold"> Mobile Number </label>
          <input
            className = "m-1 border-4 border-b-black border-t-white border-l-white border-r-white h-1/8"
            type="number"
            onChange={(event) => {
              setMobile(event.target.value);
            }}
          />
          </div>
          </div>   
          <div className="flex flex-col justify-center text-left mx-40 w-1/2 h-1/2">
          <div className = "mb-5 border-none flex flex-col">
          <label className="ml-1 mb-2 font-bold" >  Password </label>
          <input
            className = "m-1 border-4 border-b-black border-t-white border-l-white border-r-white h-1/8"
            type='password'
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          </div>
       
         <div className = "mb-5 border-none flex flex-col">
         <label className="ml-1 mb-2 font-bold"> Confirm Password </label>
          <input
            className = "m-1 border-4 border-b-black border-t-white border-l-white border-r-white h-1/8"
            type='password'
           />
         </div>
          <div className = "mb-5 border-none flex flex-col">
          <label className="ml-1 mb-2 font-bold"> User Type </label>
           <select id = "dropdown"
           className = "m-1 h-1/8 form-select border-4 border-b-black border-t-white border-l-white border-r-white"
           onChange={(event) => {
            setType(event.target.value);
          }} >            
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>            
           </select>
          </div>
      </div>        
               
    <div className="flex flex-col justify-center mx-30 ">
    <button className="transition ease-in-out bg-black hover:bg-[#F38181] text-white duration-200 font-bold py-1 px-10 rounded-full hover:text-white h-12 text-xl" value="Submit" onClick={register}>
       SignUp </button>   
    </div>  
    </div>
    
    
    </>

    
  );
}

export default SignUp;