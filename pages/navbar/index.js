import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2f3c7e;
  font-size: 1.5em;
`;

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: lightblue;
  border: 2px groove black;
  border-radius: 4px;
  text-align: center;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <StyledLink href="/discover">Discover</StyledLink>
      <StyledLink href="/info">Info</StyledLink>
      <StyledLink href="/profile">Profile</StyledLink>
    </StyledNav>
  );
}
