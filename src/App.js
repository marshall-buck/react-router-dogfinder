import React, { useState } from "react";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import { getDogs } from "./axios";

/** main app component */

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dogs, setDogs] = useState([]);
  const [dog, setDog] = useState({});

  // when this loads make an ajax call to populate the page
  async function getDogsList() {
    const data = await getDogs();
    setDogs(data);
    setIsLoading(false);
  }

  if (isLoading) {
    getDogsList();
    <p>is loading...</p>;
  }

  //clear the current dog in dog state
  function removeDog() {
    setDog({});
  }

  //update the dog in dog state
  function updateDog(name) {
    
    const currDog = dogs.find((dog) => dog.name === name);
    currDog && setDog(currDog);
  }

  return (
    <div>
      <BrowserRouter>
        <Nav
          dogNames={dogs.map((dog) => dog.name)}
          updateDog={updateDog}
          removeDog={removeDog}
          dog={dog}
        />
        <RoutesList dogs={dogs} updateDog={updateDog} dog={dog} />
      </BrowserRouter>
    </div>
  );
}

export default App;
