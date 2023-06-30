"use client";
import React, { useEffect, useState } from "react";
import {
  IconAlignRight,
  IconBell,
  IconMail,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";

export default function NavbarMobile() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = position > 52.5;

  return (
    <div className="Mobile w-full">
      <div
        className={`fixed top-0 left-0 w-full p-4 gap-2 shadow-sm z-50 transition-all duration-100 ease-in-out ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="relative w-full">
          <input
            type="text"
            name="search"
            id="search-content"
            placeholder="Search"
            className="w-full py-1 ps-10 pe-2 focus:outline-none"
            style={{ borderRadius: 16, border: "1px solid #AFD3E2", background: "#fff" }}
          />
          <span className="absolute top-1 left-1.5">
            <IconSearch width={24} height={24} style={{ color: "#146C94" }} />
          </span>
        </div>

        <IconBell
          style={{
            width: "100%",
            maxWidth: "24px",
            height: "24px !important",
            color: isScrolled ? "#146C94" : "#fff",
          }}
        />

        <IconMail
          style={{
            width: "100%",
            maxWidth: "24px",
            height: "24px !important",
            color: isScrolled ? "#146C94" : "#fff",
          }}
        />

        <IconShoppingCart
          style={{
            width: "100%",
            maxWidth: "24px",
            height: "24px !important",
            color: isScrolled ? "#146C94" : "#fff",
          }}
        />

        <IconAlignRight
          style={{
            width: "100%",
            maxWidth: "24px",
            height: "24px !important",
            color: isScrolled ? "#146C94" : "#fff",
          }}
        />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-32 -z-10"
        style={{ backgroundColor: "#146C94" }}
      ></div>
    </div>
  );
}
