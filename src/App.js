import React, { useState } from "react";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from 'react-router-dom';
import { getDogs } from "./axios";



function App() {

  const [dogs, setDogs] = useState(getInitialList);

  // when this loads make an ajax call to populate the page
  async function getInitialList() {
    const data = await getDogs();
    // console.log(data);
    setDogs(data);
    return data;

  }


  console.log(dogs);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <RoutesList dogs={dogs} getDogs={getInitialList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
