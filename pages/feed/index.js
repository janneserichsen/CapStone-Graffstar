import Image from "next/image";
import TaskApp from "../_app";
import { useState } from "react";
import AddTodo from "../form/index.js";
import TaskList from "../list/TaskList";

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
];

const graffitiPosts = [
  {
    id: "g-12",
    userID: "u-213Lbc",
    location: "Copenhagen",
    image: "/images/test-image.png",
    comment:
      "Yoo check out this Truck i busted haha Senior and still bombing!!!",
  },
  {
    id: "g-1234",
    userID: "u-030Lbc",
    location: "Berlin",
    image: "/images/test-image.png",
    comment: "Yoo check out my newest work!!!",
  },
  {
    id: "g-12",
    userID: "u-213Lbc",
    location: "Hamburg",
    image: "/images/test-image.png",
    comment: "Yoo looks fire!!!",
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
            <p>
              Yoo check out this Truck i busted haha Senior and still bombing!!!
            </p>
          </section>
        );
      })}
    </>
  );
}
