import { React, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import SnapShopLogo from "../../assets/logos/SnapShopLogo.png"
import { Link } from 'react-router-dom'
import Login from "../login/Login.jsx"
import SignUp from "../signup/SignUp.jsx"
import AddProductModal from "../add_product/AddProductModal.jsx"

const Navbar = () => {
  // State to manage the navbar's visibility if needed
  const [nav, setNav] = useState(false)

  const [seen, setSeen] = useState(false)

  const [signUpSeen, setSignUpSeen] = useState(false)

  const [showModal, setShowModal] = useState(false);

  const toggleLogin = () => {
    setSeen(!seen)
  }

  const toggleSignup = () => {
    setSignUpSeen(!signUpSeen)
  }

  const handleNav = () => {
    setNav(!nav);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="bg-white flex justify-between items-center h-24 w-full text-black">
      <Link to="/">
        <img src={SnapShopLogo} width={180} height={180} />
      </Link>

      <ul className="hidden md:flex">

        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-white">
          <Link to="/cart">Cart</Link>
        </li>
        <li 
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-white" 
          onClick={toggleLogin}
        >
          <h1>Log In</h1>
        </li>
        <li 
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-white" 
          onClick={toggleSignup}
        >
          <h1>Sign Up</h1>
        </li>
        {/* Add Product button */}
        <li className="menu-item">
          <button onClick={() => setShowModal(true)} className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-white">
            Add Product
          </button>
        </li>
      </ul>

      {/* Conditionally render the Login component based on the seen state */}
      { seen && <Login toggle={toggleLogin}/>  }
      { signUpSeen && <SignUp toggle={toggleSignup}/>  }
      {showModal && <AddProductModal showModal={showModal} onClose={() => setShowModal(false)} />}
      
    </div>
  );
};

export default Navbar;
