import Image from "next/image";
import Navbar from "./navbar";

const users = [
  {
    id: "u-213Lbc",
    name: "Bates",
    email: "bates@example.com",
    image: "www-image.url.de",
  },
  {
    id: "u-030Lbc",
    name: "GMS",
    email: "GMS@example.com",
    image: "www-image.url.de",
  },
  {
    id: "u-040Lbca",
    name: "Emra",
    email: "Emra@example.com",
    image: "www-image.url.de",
  },
  {
    id: "u-0783Lbc",
    name: "Doke",
    email: "Doke@example.com",
    image: "www-image.url.de",
  },
  {
    id: "u-0303Lbc",
    name: "Wekman",
    email: "Wekman@example.com",
    image: "www-image.url.de",
  },
  {
    id: "u-030234Lbc",
    name: "NHS",
    email: "NHS@example.com",
    image: "www-image.url.de",
  },
  {
    id: "u-318Lca",
    name: "quer",
    email: "quer@example.com",
    image: "www-image.url.de",
  },
  {
    id: "u-318Lci",
    name: "wear",
    email: "wear@example.com",
    image: "www-image.url.de",
  },
  {
    id: "u-040Lbc",
    name: "SRF",
    email: "SRF@example.com",
    image: "www-image.url.de",
  },
];

const graffitiPosts = [
  {
    id: "g-14",
    userID: "u-213Lbc",
    location: "Copenhagen",
    image: "/images/bates-truck.png",
    comment:
      "Yoo check out this Truck i busted haha Senior and still bombing!!!",
  },
  {
    id: "g-1234",
    userID: "u-030Lbc",
    location: "Berlin",
    image: "/images/gms-train.png",
    comment: "Yoo check out my newest work!!!",
  },
  {
    id: "g-12",
    userID: "u-213Lbc",
    location: "Hamburg",
    image: "/images/bates-wall.png",
    comment: "Yoo looks fire!!!",
  },
  {
    id: "g-040Lbca",
    userID: "u-040Lbca",
    location: "Hamburg",
    image: "/images/srf-crew.png",
    comment: "SRF for Life",
  },
  {
    id: "g-040Lbc",
    userID: "u-040Lbc",
    location: "Hamburg",
    image: "/images/emra.png",
    comment: "SRF for Life",
  },
  {
    id: "g-318Lca",
    userID: "u-318Lca",
    location: "Itzehoe",
    image: "/images/quer.png",
    comment: "#Long live Alsen",
  },
  {
    id: "g-318Lci",
    userID: "u-318Lci",
    location: "Itzehoe",
    image: "/images/wear-alsen.png",
    comment: "#Long live Alsen",
  },
];

export default function DiscoverPage() {
  return (
    <>
      <h1>Graffstar</h1>
      {graffitiPosts.map((graffiti) => {
        const currentUser = users.find((user) => user.id === graffiti.userID);
        return (
          <section key={graffiti.id}>
            <h2>Post by {currentUser.name}</h2>
            <p>Location: {graffiti.location}</p>
            <Image
              src={graffiti.image}
              alt={`Graffiti from ${currentUser.name}`}
              width={250}
              height={250}
            />
            <p>{graffiti.comment}</p>
          </section>
        );
      })}
      <section>
        <Navbar />
      </section>
    </>
  );
}
