import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function Home() {
  const [users, setUsers]=useState([])
  const BE_URL = "http://localhost:3001/add-user";
  const DELETE_BE_URL="http://localhost:3001/delete-user";
  const newID = nanoid();

  async function handleDelete(e){
    e.preventDefault();

    const data={
      username:e.target.username.value,
      id: newID,
    };
    const options={
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data),
    }
  }

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
    setUsers(FETCHED_JSON)
    console.log(FETCHED_JSON);
  }

  return (
    <div className="flex gap-4 flex-col">
      <form onSubmit={handleSubmit}>
        <label for="username">
          User name:
          <input id="username" name="username" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div className="flex flex-row gap-12">
      <button className="w-12 h-6 bg-red-300">Edit</button>
      <button className="w-14 h-6 bg-red-300">Delete</button>
        
      </div>
      


      <div>
        {users.map((user)=>{
          return (
          <div>
            <div>{user.username}</div>
            <button onClick={handleDelete(user.id)}>Delete</button>
            <button onClick={handleEdit(user.id)}>Edit</button>
          </div>
          )
        })}
      </div>
    </div>
  );
}
