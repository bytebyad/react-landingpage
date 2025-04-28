import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "#",
  },
  {
    id: 3,
    title: "About Us",
    path: "#",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#",
  },
];
export const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between bg-white px-3 pt-3" >
        {/* logo Section */}
        <div className="font-bold md:p-8 md:text-2xl text-lg">The Coding Env</div>
        {/* Menu Section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.path} className="hover:text-secondary group relative inline-block py-2 px-3">
                  <div className="bg-secondary rounded-full group-hover:block hidden absolute w-2 h-2 left-1/2 bottom-0 top-1/2 -translate-x-1/2 mt-3"></div>
                  {menu.title}</a>
              </li>
            ))}
            <button className="primary-btn hover:bg-secondary hover:shadow-[0px_10px_8px_-7px_#69a79c] hover:text-light">
              Sing Up
            </button>
          </ul>
        </div>
        {/* Mobile Hamburger Menu Section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};
