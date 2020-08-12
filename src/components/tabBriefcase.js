import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "react-bootstrap/Image";
import "../components/tabBriefcase.css";

class TabBriefcase extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          {this.props.PropsFotos.map((i, index) => {
            return <Tab key={index}>{i.title}</Tab>;
          })}
        </TabList>

        {this.props.PropsFotos.map((i, index) => {
          return (
            <TabPanel>
              {i.img.map((j, index) => {
                return <Image key={index} className="PropImgTab" src={j}></Image>;
              })}
            </TabPanel>
          );
        })}
      </Tabs>
    );
  }
}

export default TabBriefcase;
