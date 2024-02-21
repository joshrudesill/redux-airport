import { useSelector } from "react-redux";

export default function Planes() {
  const planes = useSelector((state) => state);

  return (
    <>
      {planes.map((p) => (
        <p>{p}</p>
      ))}
    </>
  );
}
