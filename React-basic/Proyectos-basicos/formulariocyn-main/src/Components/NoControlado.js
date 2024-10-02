import React from 'react'

// Se utiliza para cuando No necesitamos hacer validaciones de los datos que ingresa el usuario cuando solo enviamos el formulario.

export const NoControlado = () => {

    return (
        <form onSubmit={e => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            login(email, password);
        }}>

            <input
                type='text'
                name='email'
                placeholder='Email'
                autoComplete='off'
            ></input>


            <input
                type='password'
                name='password'
                placeholder='Contraseña'
                autoComplete='off'
            ></input>

            <button type='submit'>Iniciar Sesión</button>
        </form>
    )
}

const login = (email, password) => {

    if (email === 'mau@gmail.com' && password === "123")
        alert('login correcto');
    else
        alert('login Incorrecto')
}