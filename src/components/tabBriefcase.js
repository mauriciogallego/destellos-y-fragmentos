import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'react-bootstrap/Image';
import '../components/tabBriefcase.css';

class TabBriefcase extends Component {
    render() {
        return (
            <Tabs className='StyleTabsFather'>
                
                <TabList style={{backgroundColor: 'rgba(0, 0, 0, .2)'}}> 
                    
                    {this.props.PropsFotos.map((i, index) => {
                        return <Tab >{i.title}</Tab>
                    })}
                    
                </TabList>
                
                    {this.props.PropsFotos.map((i, index) => {
                        return <TabPanel className='TabPanelStyle'>{i.img.map((j, index2) => {
                            return <Image className='PropImgTab' src={j}></Image>
                        })}</TabPanel>
                    })}
                
            </Tabs>
        )
    }
}

export default TabBriefcase;