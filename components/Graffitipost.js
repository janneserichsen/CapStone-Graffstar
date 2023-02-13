import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Picture = styled(Image)`
  border: 3px solid black;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

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
    name: "Emra",
    email: "Emra@example.com",
    image: "www-image.url.de",
  },
  {
    id: "u-318Lcid",
    name: "wear",
    email: "wear@example.com",
    image: "www-image.url.de",
  },
  {
    id: "u-318Lciad",
    name: "Asie",
    email: "Asie@example.com",
    image: "www-image.url.de",
  },
];

const graffitiPosts = [
  {
    id: "g-14",
    userID: "u-213Lbc",
    location: "Copenhagen",
    image: "/images/bates-truck.png",
  },
  {
    id: "g-1234",
    userID: "u-030Lbc",
    location: "Berlin",
    image: "/images/gms-train.png",
  },
  {
    id: "g-12",
    userID: "u-213Lbc",
    location: "Hamburg",
    image: "/images/bates-wall.png",
  },
  {
    id: "g-040Lba",
    userID: "u-040Lbc",
    location: "Hamburg",
    image: "/images/srf-crew.png",
  },
  {
    id: "g-040Lbc",
    userID: "u-040Lbc",
    location: "Hamburg",
    image: "/images/emra.png",
  },
  {
    id: "g-318Lca",
    userID: "u-318Lca",
    location: "Itzehoe",
    image: "/images/quer.png",
  },
  {
    id: "g-318Lci",
    userID: "u-318Lci",
    location: "Itzehoe",
    image: "/images/wear-alsen.png",
  },
  {
    id: "g-318Lcid",
    userID: "u-318Lci",
    location: "Itzehoe",
    image: "/images/wear-image.png",
  },
  {
    id: "g-318Lcidad",
    userID: "u-318Lciad",
    location: "Itzehoe",
    image: "/images/asie-wagon.png",
  },
  {
    id: "g-318Lcidaded",
    userID: "u-318Lciad",
    location: "Itzehoe",
    image: "/images/asie-wall.png",
  },
];

export default function Graffitis() {
  const [tags, setTags] = useState([]);

  function handleAddTag(newTag) {
    setTags([newTag, ...tags]);
  }
  return (
    <>
      <Link href="/createPost">create Post</Link>

      {graffitiPosts.map((graffiti) => {
        const currentUser = users.find((user) => user.id === graffiti.userID);

        return (
          <>
            <section key={graffiti.id}>
              <h2>Post by {currentUser.name}</h2>
              <p>Location: {graffiti.location}</p>

              <Picture
                src={graffiti.image}
                alt={`Graffiti from ${currentUser.name}`}
                width={250}
                height={250}
              />
            </section>
          </>
        );
      })}
    </>
  );
}
