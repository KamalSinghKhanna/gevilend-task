import Image from "next/image"
import TwitterIcon from "@mui/icons-material/Twitter";
import { MusicNoteOutlined, Instagram, Search, ShoppingBagOutlined } from "@mui/icons-material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
const Navbar = () => {
  return (
    <div className="bg-bgblack w-full h-24 px-9">
      <div className="flex justify-between items-center h-full">
        <ul className="flex gap-10 text-white">
          <li className="text-md font-bold">brands</li>
          <li className="text-md font-bold">shop</li>
          <li className="text-md font-bold">premium</li>
          <li className="text-md font-bold">gift cards</li>
        </ul>
        <div>
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
          <TwitterIcon></TwitterIcon>
          <MusicNoteOutlined />
          <Instagram />
          <Person2OutlinedIcon></Person2OutlinedIcon>
          <Search />
          <ShoppingBagOutlined />
        </ul>
      </div>
    </div>
  );
}

export default Navbar