import React from 'react'

const QuoteBox  = ({frase,autor,funcionCambiar,background}) => {
    return (
        <div className='contenedorFrase'>
            <h2 style={{ color:{background} }}>{frase}</h2>
            <h3 style={{ color:{background} }}>Author: {autor}</h3>
            <button onClick={funcionCambiar}><i class="fas fa-arrow-circle-right"></i></button>
        </div>
    )
}

export default QuoteBox 
