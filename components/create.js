import Link from "next/link";

export default function Create() {
  return (
    <>
      <h1>Graffstar</h1>
      <h2>Create new Post</h2>

      <form action="/create-post" method="post">
        <label htmlFor="user">User:</label>
        <input type="text" id="user" name="user" />
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" />
        <button type="submit">Create</button>
      </form>
    </>
  );
}
