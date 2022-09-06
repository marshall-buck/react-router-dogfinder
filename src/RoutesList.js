import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogsList";
/**
 * 
 * @param {*} param0 
 * @returns 
 */
function RoutesList({ dogs, updateDog, dog }) {
  return (
    <Routes>
      <Route
        path="/dogs"
        element={<DogList dogs={dogs} updateDog={updateDog} />}
      />
      <Route path="/dogs/:name" element={<DogDetails dog={dog} />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RoutesList;
