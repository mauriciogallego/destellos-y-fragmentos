import React, { Component } from 'react';
import './briefcase.css';

import TabBriefcase from '../components/tabBriefcase';

import foto1 from "../assets/imagen/foto1.png";
import foto2 from "../assets/imagen/foto2.png";
import foto3 from "../assets/imagen/foto3.png";
import foto4 from "../assets/imagen/foto4.png";
import foto5 from "../assets/imagen/foto5.png";
import foto6 from "../assets/imagen/foto6.png";
import foto7 from "../assets/imagen/foto7.png";

const imgs = [foto1, foto2, foto3, foto4, foto5, foto6, foto7]

const fetch = [
    {
        title: "portafolio 1",
        img: imgs
    },
    {
        title: "portafolio 2",
        img: imgs
    },
    {
        title: "portafolio 3",
        img: imgs
    }
]

class Briefcase extends Component {

    state = {
        portafolio: []
    }

    componentDidMount() {
        //despues de crear el componente
        this.setState({ portafolio: fetch })


    }
    render() {
        return (
            <div>
                <TabBriefcase PropsFotos={this.state.portafolio}></TabBriefcase>
            </div>
        )
    }
}



export default Briefcase;