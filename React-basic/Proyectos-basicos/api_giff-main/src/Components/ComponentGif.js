import React from 'react'
import styled from 'styled-components'
/**
 * Este componente resive por parametro los datos del gif que vienen desde de API.
 * @param {string} title Es el titulo del gif.
 * @param {string} id   Es el id del gif.   
 * @param {string} url Es la url del gif.
 * @returns 
 */
export const ComponentGif = ({title, id, url}) => {
    const Container = styled.div`
    border: 1px solid #fff;
    border-radius: 6px;
    display: flex;
    color:#fff;
    text-align: center;
    flex-direction: column;
    margin: 16px;
    padding: 32px;
    text-decoration: none;
    `;

    const Title = styled.h4 `
       margin: 0;
    `;

    const Image = styled.img `
        object-fit: contain;
    `;
    return (
        <Container href='#id' className='Gif'>
            <Title>{title}</Title>
            <p>{id}</p>
            <Image alt={title} src={url} />
        </Container>
    )
    
}
