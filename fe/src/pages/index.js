import React from "react";
import { nanoid } from "nanoid";

export default function Home() {
  const BE_URL = "http://localhost:3001/add-user";
  const newID = nanoid();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log("FETCHED_JSON", FETCHED_JSON);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="username">
          User name:
          <input id="username" name="username" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
