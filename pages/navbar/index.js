import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50px",
          backgroundColor: "lightblue",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#2F3C7E",
            fontSize: 30,
          }}
        >
          Discover
        </Link>
        <Link
          href="/info"
          style={{
            textDecoration: "none",
            color: "#2F3C7E",
            fontSize: 30,
          }}
        >
          Info
        </Link>
        <Link
          href="/profile"
          style={{
            textDecoration: "none",
            color: "#2F3C7E",
            fontSize: 30,
          }}
        >
          Profile
        </Link>
      </nav>
    </>
  );
}
