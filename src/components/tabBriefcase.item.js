import React, { Component } from 'react';
import {TabPanel} from 'react-tabs';


class tabBriefcaseItem extends Component{
    render(){
        return(
        <TabPanel>

            adsadsasd
            {this.props.imgs.map(i => {
                return (<img src={i} />)
            })}
        </TabPanel>
        )
    }
}

export default tabBriefcaseItem;