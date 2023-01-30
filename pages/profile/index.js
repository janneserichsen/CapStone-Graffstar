import Navbar from "../navbar";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <section>
        <h1>Graffstar</h1>
        <h2>Welcome Emra</h2>
        <Image
          src="/images/user-image.png"
          alt="user Image"
          width={100}
          height={100}
        />
        <h3>Your Location: Hamburg</h3>
        <h3>Crew: SRF / SKE</h3>
      </section>
      <section>
        <h3>Your Work</h3>
        <Image
          src="/images/srf-crew.png"
          alt="srf crew bild"
          width={250}
          height={250}
        />
        <Image
          src="/images/emra.png"
          alt="srf crew bild"
          width={250}
          height={250}
        />
      </section>
      <Navbar />
    </>
  );
}
