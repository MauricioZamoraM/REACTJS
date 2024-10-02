import React from 'react'
import { useState, useEffect } from 'react'
import getApi from '../Services/getApi'
import PropTypes from 'prop-types'
export const Componente = ({saludo}) => {
    const [post, setPost] = useState([])

    useEffect(() => {
      getApi().then(data=>setPost(data))
    }, [])
  
    Componente.propTypes={
      saludo:PropTypes.bool.isRequired
    }
  return (
<div>
<h1 style={saludo? {color:"red"}:{color:"green"}}>
{saludo ? "Hola que tal" : "Adios"} </h1>

        {post && post.map(post => (
          <div key={post.id}>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>


          </div>

        ))}

      </div>
  )
}
