import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const AppContainer = styled.main`
  display: grid;
  min-height: 100vh;
  place-items: center;
  place-content: center;
  gap: 50px;
`;

const ImagesContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 14px;
  overflow: hidden;
`;

export default function Home() {
  const [images, setImages] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/upload", {
      method: "post",
      body: formData,
    });

    const data = await response.json();

    const newImage = {
      id: data.public_id,
      url: data.secure_url,
      width: data.width,
      height: data.height,
      alt: "",
    };
    setImages([...images, newImage]);
  }

  return (
    <>
      <Link href="/discover ">Back to Discover</Link>
      <AppContainer>
        <form action="" onSubmit={handleSubmit}>
          <input type="file" name="imageFile" required />
          <button type="submit">Upload</button>
        </form>
        <ImagesContainer>
          {images.map(({ id, url, width, height }) => (
            <li key={id}>
              <StyledImage
                src={url}
                width={width}
                height={height}
                alt="uploaded image"
              />
            </li>
          ))}
        </ImagesContainer>
      </AppContainer>
    </>
  );
}
