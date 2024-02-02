import { React, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SnapShopLogo from "../../assets/logos/SnapShopLogo.png";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Customer Service" },
    { id: 2, text: "Cart" },
    { id: 3, text: "Resources" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 w-full px-4 text-white">
      <img src={SnapShopLogo} width={180} height={180} />
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default Navbar;
