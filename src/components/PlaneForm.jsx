import { useState } from "react";
import { useDispatch } from "react-redux";

export default function PlaneForm() {
  const dispatch = useDispatch();
  const [airplane, setAirplane] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_AIRPLANE", payload: airplane });
    setAirplane("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={airplane}
        onChange={(e) => setAirplane(e.target.value)}
        placeholder='Airline Name'
      />
      <button type='submit'>Add Airline</button>
    </form>
  );
}
