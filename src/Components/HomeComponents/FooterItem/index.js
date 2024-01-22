import React from "react";
 import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import '../FooterItem/index.css'
 const FooterItem = () => {
    return (
  
<div className="footer rounded-0 card bg-black shadow-lg mt-0 golden-text">
    <div className="text-center my-5">
        <h1 className="footer-heading">Ready to do your best work?</h1>
        <p className="text-2xl font-bold">Let's get you started.</p>
        <div className="flex justify-center">
        <Button className='button p-3 hover:shadow-lg w-48 md:w-68 rounded font-sans text-white text-sm md:text-lg transform transition duration-500 hover:scale-110'>
            <a href="/signup" className="no-underline text-white ">
                SIGN UP NOW ➪
            </a>
        </Button>

        </div>
     </div>

    <div className="flex-wrap d-flex justify-content-evenly">
        <div>
            <ul className="list-items-styles">
            <h2 className="footer-heading">Company</h2>
                <li>About Us</li>
                <li>Team</li>
                <li>Career</li>
                <li>Blogs</li>
                <li>News</li>
            </ul>
        </div>

        <div>
            <ul className="list-items-styles">
            <h2 className="footer-heading">Contact</h2>
                <li>Help & Support</li>
            </ul>
        </div>

        <div>
            <ul className="list-items-styles ">
            <h2 className="footer-heading ">Follow ACM</h2>
              <li className="flex items-center"><FaInstagramSquare className="mr-2"/> Instagram</li>
              <li className="flex items-center"><FaXTwitter className="mr-2" /> Twitter</li>
              <li className="flex items-center"><FaLinkedin className="mr-2"/> LinkedIn</li>
              <li className="flex items-center"><FaSquareThreads className="mr-2"/> Thread</li>
            </ul>
        </div>

        <div>
            <ul className="list-items-styles">
            <h2 className="footer-heading">Quick Links</h2>
                <li>Privacy Policy</li>
                <li>Terms & Refund</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>

    </div>
    <hr className="bg-white h-1 mx-5" />
    <div className="flex justify-center"><p className="text-bold">© 2023 All rights reserved by AI CHEF MASTER.</p></div>
</div>

     );
}
export default FooterItem