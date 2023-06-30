"use client";
import {
  IconAlignRight,
  IconBell,
  IconMail,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import "./globals.scss";
import { Box, Container, Divider, Stack, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Takapedia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
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

  function NavbarMobile() {
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

  function NavbarDesktop() {
    const items = [
      { name: "Tentang Takapedia", url: "#" },
      { name: "Mitra Takapedia", url: "#" },
      { name: "Mulai Berjualan", url: "#" },
      { name: "Promo", url: "#" },
      { name: "Takapedia Care", url: "#" },
    ];
    return (
      <Box component="section" className="Desktop fixed top-0 left-0 w-full shadow">
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          className="px-8"
          style={{ backgroundColor: "#eee" }}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="text-xs text-center p-2"
              style={{ color: "#999" }}
            >
              {item.name}
            </Link>
          ))}
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="py-2 px-8 gap-4 bg-white"
        >
          <img src="images/takapedia-logo.png" alt="takapedia logo" className="h-10" />
          <Link href="#" className="p-2 text-sm text-center" style={{ color: "#212121" }}>
            Kategori
          </Link>
          <div className="relative w-full">
            <input
              type="text"
              name="search"
              id="search-content"
              placeholder="Search"
              className="w-full py-1 ps-10 pe-2 focus:outline-none"
              style={{ borderRadius: 16, border: "1px solid #212121", background: "#fff" }}
            />
            <span className="absolute top-1 left-1.5">
              <IconSearch width={24} height={24} style={{ color: "#212121" }} />
            </span>
          </div>
          <IconButton aria-label="shopping-cart">
            <IconShoppingCart
              style={{
                width: "100%",
                maxWidth: "24px",
                height: "24px !important",
                color: "#212121",
              }}
            />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderRightColor: "#212121 !important",
            }}
          />
          <Button className="Btn BtnOutlined">Masuk</Button>
          <Button className="Btn BtnContained">Daftar</Button>
        </Stack>
      </Box>
    );
  }

  return (
    <html lang="en">
      <body style={{ height: "400vh" }}>
        <nav>
          <NavbarMobile />
          <NavbarDesktop />
        </nav>
        {children}
      </body>
    </html>
  );
}