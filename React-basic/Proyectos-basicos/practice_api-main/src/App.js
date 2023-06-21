import React from "react";
import {Componente} from './Components/Componente'

export default function App() {
let saludo=true

  return (
    <div>
<Componente saludo={saludo}/>
    </div>
  );
}
