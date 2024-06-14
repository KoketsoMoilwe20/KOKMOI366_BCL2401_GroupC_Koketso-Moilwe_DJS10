import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [data, setData ] = useState();
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
  })

}