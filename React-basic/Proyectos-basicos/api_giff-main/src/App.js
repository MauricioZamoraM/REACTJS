
import './Styles/App.css';
import { useState } from 'react'
import { ComponentListOfGifs } from './Components/ComponentListOfGifs';
import { Formulario, Input, Button } from './Elements/Gifs'
export default function App() {
  const [keyword, setkeyword] = useState('');

  return (
    <div className="App">

        <Formulario
          className='formulario'
          onSubmit={event => {
            event.preventDefault();
            setkeyword(event.target.giff.value);
            event.target.reset();
          }}>
          <Input
            className='input'
            autoComplete='off'
            name='giff'
            type='text'
            placeholder='Buscar Gifs'

          />
          <Button
            className='button'
            id='button'
            type='submit'

          >Buscar
          </Button>
        </Formulario>
        <ComponentListOfGifs keyword={keyword} />



    </div>
  )
}


