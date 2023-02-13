import Link from "next/link";
import styled from "styled-components";

const DesignedLink = styled(Link)`
  text-decoration: none;
  font-size: 1.8em;
  color: red;
`;

export default function Intro() {
  return (
    <>
      <h1>Graffstar</h1>
      <h2>
        Hello User heres a quick Introduction to this App for best Experience
      </h2>
      <p>
        This App is for all Kind of Graffiti Writer or just Fans. Since there
        are no real Graffiti Apps where you can watch other Peoples Stuff or
        Comment them i created this App I know you have Instagram and that but i
        wanted an only Graffiti App. So on this App you can Discover some of the
        Peoples Stuff and comment them. Next u have a Nice to know Page where u
        can see some nice Tipps and Tricks. Least u have a Profile Page where
        your Location, Name and Crew are Dislayed and your Pictures. So enough
        with the Talking Lets go !!!
      </p>
      <DesignedLink href="/discover">Lets Goo</DesignedLink>
    </>
  );
}
