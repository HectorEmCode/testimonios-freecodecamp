import React from 'react';
import '../hojas-de-estilos/Testimonio.css';

function Testimonio(props) {

  return (
    <div className="testimonio-container">
        <img
          className="testimonio-imagen"
          src={require (`../imagenes/${props.imagen}.webp`)}
          alt="Foto de Emma"
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className="cargo-testimonio"><strong>{props.cargo}</strong> en {props.empresa}</p>
          <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>


  );

}

export default Testimonio;