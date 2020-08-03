import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class TabBriefcase extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel>
                    {this.props.imgs.map(i => {
                        return (<img src={i} alt='logo' />)
                    })}
                </TabPanel>
            </Tabs>
        )
    }
}

export default TabBriefcase;