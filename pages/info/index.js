import Navbar from "../navbar";

export default function Info() {
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

      <h1> Here are some cool Tipps</h1>
      <p>Use Fatcaps for Fill in</p>
      <p>Use Skinny or Banana Caps for outlines you got way more control</p>
      <p>Trust me always make sure you shake your cans good</p>
      <p>If you are Beginner use shitty Cans they are way cheaper</p>
      <p>Draw Simple !!!! </p>
      <p>Dont bite other peoples Style or Stuff</p>
      <p>Never Snitch on other Writers even if you have Beef</p>

      <h1>Try out some cool Color Combis</h1>
      <div>
        <input type="color" id="filling" name="filling" value="#e66465" />
        <label for="filling">Fill In</label>
      </div>

      <div>
        <input type="color" id="outlone" name="outline" value="" />
        <label for="outline">Outline</label>
      </div>
      <Navbar />
    </>
  );
}
