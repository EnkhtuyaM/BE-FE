import React from "react";

export default function Home() {
  const BE_URL = "http://localhost:3001/playerscore";

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      playerscore: e.target.playerscore.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
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
        <label for="playerscore">
          Score:
          <input id="playername" score="playerscore" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
