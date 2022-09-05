import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogsList";


function RoutesList({ dogs, getDogs }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} getDogs={getDogs} />} />
      <Route path="/dogs/:name" element={<DogDetails />} />

      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RoutesList;
