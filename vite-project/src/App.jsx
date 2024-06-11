import React from 'react'
import './App.css'

//Fetching DATA from an API
const fetchAPI = fetch("https://jsonplaceholder.typicode.com/posts")

fetchAPI.then(response => response.json())
  .then(posts => {console.log(posts);

})
  .catch(error => {
    console.error('Error:', error);
  })

function App() {

  return (
    <>
      
    </>
  )
}

export default App
