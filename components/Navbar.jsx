import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  MusicNoteOutlined,
  Instagram,
  Search,
  ShoppingBagOutlined,
  MenuOutlined,
  CancelOutlined,
  Cancel,
  ArrowForward,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Dropdown from "./Dropdown"; // Import the Dropdown component
import { useState } from "react";

const Navbar = () => {
  const shop = [
    "H&M",
    "Levi's",
    "Under Armour",
    "Puma",
    "Forever 21",
    "Tommy Hilfiger",
  ];

  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showMoblieMenu, setShowMobileMenu] = useState(false);

  const handleMouseEnterBrands = () => {
    setShowBrandsDropdown(true);
  };

  const handleMouseLeaveBrands = () => {
    setShowBrandsDropdown(false);
  };

  const handleMouseEnterShop = () => {
    setShowShopDropdown(true);
  };

  const handleMouseLeaveShop = () => {
    setShowShopDropdown(false);
  };

  return (
    <>
      <div className="bg-bgblack w-full h-24 px-9 relative hidden lg:block">
        <div className="flex pl-10 justify-between items-center h-full  ">
          <ul className="flex gap-10 text-white">
            <li
              className="text-md font-bold relative dropdown-item"
              onMouseEnter={handleMouseEnterBrands}
              onMouseLeave={handleMouseLeaveBrands}
            >
              brands <ExpandMoreIcon />
              {showBrandsDropdown && (
                <Dropdown
                  show={showBrandsDropdown}
                  content={shop}
                  shop={true}
                />
              )}
            </li>
            <li
              className="text-md font-bold relative dropdown-item"
              onMouseEnter={handleMouseEnterShop}
              onMouseLeave={handleMouseLeaveShop}
            >
              shop <ExpandMoreIcon />
              {showShopDropdown && (
                <Dropdown show={showShopDropdown} content={shop} />
              )}
            </li>
            <li className="text-md font-bold dropdown-item">premium</li>
            <li className="text-md font-bold dropdown-item">gift cards</li>
          </ul>
          <div className="pl-5">
            <Image
              src={"/logo.webp"}
              alt="logo"
              width={500}
              height={500}
              className="w-32 h-20"
            />
          </div>
          <ul className="flex gap-6 text-white">
            <li className="text-md font-bold">become an affiliate</li>
            <TwitterIcon />
            <MusicNoteOutlined />
            <Instagram />
            <Person2OutlinedIcon />
            <Search />
            <ShoppingBagOutlined />
          </ul>
        </div>
      </div>
      {/* mobile */}
      <div className="bg-bgblack w-full h-16 px-4 relative lg:hidden">
        <div className="flex items-center justify-between">
          <div
            className="text-white cursor-pointer"
            onClick={() => setShowMobileMenu(!showMoblieMenu)}
          >
            {!showMoblieMenu ? <MenuOutlined /> : <Cancel />}
          </div>
          <div className="pl-5">
            <Image
              src={"/logo.webp"}
              alt="logo"
              width={500}
              height={500}
              className="w-20 h-16"
            />
          </div>
          <div className="flex text-white gap-3">
            <Search />
            <ShoppingBagOutlined />
          </div>
        </div>
      </div>
      {showMoblieMenu && (
        <ul className="flex flex-col bg-bgblack gap-10 text-white p-5 text-2xl h-screen">
          <li className="flex justify-between items-center">
            <span>brands </span>
            <ArrowForward />
          </li>
          <li className="flex justify-between items-center">
            <span>shop </span>
            <ArrowForward />
          </li>
          <li>premium</li>
          <li>gift cards</li>
          <li>become an affiliate</li>
          <li className="flex gap-2">
            <TwitterIcon />
            <MusicNoteOutlined />
            <Instagram />
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
