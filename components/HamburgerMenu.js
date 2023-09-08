"use client";
import { slide as Menu } from "react-burger-menu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function HamburgerMenu() {
  const hamburgerIcon = () => {
    <div className="">
      <FontAwesomeIcon
        icon={faBars}
        className="md:hidden w-9 h-9 hover:cursor-pointer"
      />
    </div>;
  };

  return (
    <Menu 
    right
    isOpen={false}
    >
      <Link href="/">Home</Link>
      <Link href="#" className="cursor-not-allowed">
        Contact Us
      </Link>
    </Menu>
  );
}
