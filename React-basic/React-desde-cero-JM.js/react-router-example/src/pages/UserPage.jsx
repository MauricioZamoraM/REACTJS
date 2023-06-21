import { useParams } from "react-router-dom";

export default function UserPage() {
  const params = useParams(); // Parametro, con este ponemos consultar a un backend.

  return (
    <div>
      User <h1>{params.id}</h1>
    </div>
  );
}
