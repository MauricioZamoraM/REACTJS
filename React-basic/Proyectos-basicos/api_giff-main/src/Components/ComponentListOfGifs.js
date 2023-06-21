import { useState, useEffect } from 'react'
import { ComponentGif } from './ComponentGif';
import getGiff from '../Services/getGiff'

export const ComponentListOfGifs = ({ keyword }) => {
  const [gifs, setgifs] = useState([]);

  useEffect(function () {
    getGiff({ keyword }).then(gifs => setgifs(gifs))
    // Cada vez que llegue un nuevo valor se va a volver a renderizar.
    // Le asignamos la dependencia keyword a este efecto
  }, [keyword])

  return <div>
    {
      
      gifs.map(({ id, title, url }) =>
        <ComponentGif
          key={id}
          title={title}
          id={id}
          url={url}
        />

      )

    }
  </div>

}
