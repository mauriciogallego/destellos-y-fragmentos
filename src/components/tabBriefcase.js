import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import foto1 from "../assets/imagen/foto1.png";
import foto2 from "../assets/imagen/foto2.png";
import foto3 from "../assets/imagen/foto3.png";
import foto4 from "../assets/imagen/foto4.png";
import foto5 from "../assets/imagen/foto5.png";
import foto6 from "../assets/imagen/foto6.png";
import foto7 from "../assets/imagen/foto7.png";



const imgs = [foto1, foto2, foto3, foto4, foto5, foto6, foto7]

class TabBriefcase extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
            
        
            </Tabs>
        )
    }

}

export default TabBriefcase;