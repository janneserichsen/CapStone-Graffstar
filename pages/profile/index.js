import Navbar from "../navbar";

export default function Profile() {
  return (
    <>
      <section className="header">
        <style jsx>
          {`
            .header {
              font-size: 25px;
              text-align: center;
              border: 4px;
              border-radius: 4px;
              border-color: grey;
            }
          `}
        </style>
        <h1>Graffstar</h1>
      </section>
      <Navbar />
    </>
  );
}
