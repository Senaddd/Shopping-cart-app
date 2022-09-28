import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col p-10 justify-center h-48 bg-blue-900 text-white  ">
      <div className="flex justify-center gap-5">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <div className="flex justify-center gap-5 pt-5">
        <Link to={"/About"}>Info</Link>
        <p>Terms of use</p>
        <p>Privacy policy</p> <br></br>
      </div>
      <div className="flex justify-center pt-5">
        <p>© 2022 Online Shop Coorporation</p>
      </div>
    </div>
  );
};

export default Footer;
