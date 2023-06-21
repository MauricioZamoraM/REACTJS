import React from 'react'
import { Link } from 'react-router-dom'
const userId = 10;
export default function HomePage() {
  return (
    <div>
      Home Page
      {/* Podemos utilizar la etiqueta link tambien similar a navLink solo que esta link es mas parecida a una etiqueta a en html sin necesidad de recargar la pagina */}
      <Link to={`/users/${userId}`}>Usuarios</Link>
    </div>
  )
}
