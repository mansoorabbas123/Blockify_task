// import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [post, setPost] = useState("");

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log("Users", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  //  create user api were not provided

  const createPost = async (task) => {
    if (post) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: post,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <p>See console</p>
      <div>
        <input
          style={{ border: "1px solid black" }}
          type="text"
          name=""
          id=""
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <button style={{ marginLeft: "3px" }} onClick={createPost}>
          Add Post
        </button>
      </div>
    </div>
  );
};

export default Users;
