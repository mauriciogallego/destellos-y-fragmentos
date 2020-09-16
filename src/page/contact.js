import React, { Component, useState } from "react";
import "./contact.css";
import bk from "assets/imagen/foto4.png";
import bk2 from "assets/imagen/20200903_210821_0000.png";
import bk3 from "assets/imagen/IMG_20200911_161110_735.jpg";

let vectorImg = [bk, bk3, bk2];

function InputContact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentario, setComentario] = useState("");

  const handleClick = () => {};

  return (
    <div>
      <div className="contact-style">
        <p className="textContainer">
          ¿Quieres ponerte en contacto con nosotros?
        </p>
        <input
          type="text"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          placeholder="Nombre"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          type="text"
          value={telefono}
          onChange={(e) => {
            setTelefono(e.target.value);
          }}
          placeholder="Telefono"
        />
        <textarea
          type="text"
          value={comentario}
          onChange={setComentario}
          placeholder="Comentario"
        />

        <button className="button-style" onClick={handleClick}>
          Enviar
        </button>
      </div>

      <div>
        {vectorImg.map((i, index) => {
          return (
            <img
              key={index}
              src={i}
              style={{ margin: 40 * index }}
              alt="img-background"
              className="imgBackground"
            />
          );
        })}
      </div>
    </div>
  );
}

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>
          <InputContact></InputContact>
        </h1>
      </div>
    );
  }
}

export default Contact;
