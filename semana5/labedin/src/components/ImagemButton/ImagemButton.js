import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    /*está recebendo como props que é um objeto vindo do Pai do elemento 
    a imagem e o texto*/
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButton;