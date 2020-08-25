import React, { Component } from 'react';
import './contact.css'

class InputContact extends Component {
    nombre = React.createRef()
    email = React.createRef()
    telefono = React.createRef()
    comentario = React.createRef()

    handleClick = () => {
        const nombre = this.nombre.current.value
        const email = this.nombre.current.value
        const telefono = this.nombre.current.value
        const comentario = this.nombre.current.value

        console.log(nombre,email,telefono,comentario)

    }

    render() {
        return (
            <div className="contact-style"> 
                
                <input 
                    type="text"
                    ref={this.nombre}
                    placeholder='Nombre'
                ></input>
               
                
                    <input
                        type="text"
                        ref={this.email}
                        placeholder='Email'
                    />
              
                <input
                    type="text"
                    ref={this.telefono}
                    placeholder='Telefono'
                />
              <input
                        type="text"
                        ref={this.comentario}
                        placeholder='Comentario'
                    />
               
                <button className="button-style" onClick={this.handleClick}>Enviar</button>
            </div>
        )
    }
}




class Contact extends Component {
    render() {
        return (
            <div>
                <h1>
                    <InputContact></InputContact>
                </h1>
            </div>
        )
    }
}

export default Contact;