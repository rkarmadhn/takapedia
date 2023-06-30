"use client";
import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import { Box, Divider, Stack, Button, IconButton } from "@mui/material";
import Link from "next/link";

export default function NavbarDesktop() {
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
        <button type="button" className="Btn BtnOutlined">
          Masuk
        </button>
        <button type="button" className="Btn BtnContained">
          Daftar
        </button>
      </Stack>
    </Box>
  );
}
