import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/">Discover</Link>
        <Link href="/info">Info</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </>
  );
}
