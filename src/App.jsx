import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [data, setData ] = useState();
  const [error, setError] = useState();
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        setError(error);
      });
  }, [])

    return (
      <>
        {!error && data
        ? data.map((post) => (
            <div key={userId}> 
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        : null}
      {error ? <h1>{error}</h1> : null}
      </>
    )

}