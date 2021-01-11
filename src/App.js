import React from "react";

// how to use props
function Potato({ fav }) {
  return (
    <h1>I love {fav}</h1>
  )
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato fav="kimchi" />
      <Potato fav="bagle" />
      <Potato fav="pasta" />
      <Potato fav="lemonade" />
    </div>
  );
}

export default App;
