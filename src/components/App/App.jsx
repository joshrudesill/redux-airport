import React, { useState } from "react";
import PlaneForm from "../PlaneForm";
import Planes from "../Planes";

function App() {
  return (
    <div>
      <h1>Redux Airport</h1>
      <PlaneForm />
      <Planes />
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}

export default App;
