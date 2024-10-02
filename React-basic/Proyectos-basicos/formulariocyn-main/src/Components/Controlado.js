
import React from 'react'
import { useState } from 'react';

//Se utiliza para cuando necesitamos hacer validaciones de los datos que ingresa el usuario

export const Controlado = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const errorMesagge = validate(email, password);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            login(email, password);
        }}>

            <input
                type='text'
                name='email'
                placeholder='Email'
                autoComplete='off'
                value={email}
                onChange={e => setEmail(e.target.value)}
            ></input>


            <input
                type='password'
                name='password'
                placeholder='Contraseña'
                autoComplete='off'
                value={password}
                onChange={e => setPassword(e.target.value)}
            ></input>
            <button type='submit' disabled={errorMesagge}>Iniciar Sesión</button>
            <p>{errorMesagge}</p>
        </form>
    )
}

const login = (email, password) => {

    if (email === 'mau@gmail.com' && password === "123")
        alert('login correcto');
    else
        alert('login Incorrecto')
}

const validate = (email, password) => {
    if (!email.includes('@')) return 'Email incorrecto';
    if (password.length < 4) return 'Contraseña incorrecta';

}