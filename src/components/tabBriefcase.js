import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import { Storage } from "aws-amplify";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import "./tabBriefcase.css";
import PopUp from "components/popUp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function TabBriefcase({ photos, setLoading }) {
  const [value, setValue] = useState(0);
  const [img, setImg] = useState(null);
  const [tabsPanel, setTabsPanel] = useState([]);
  const voidImg = () => {
    setImg(null);
  };

  useEffect(() => {
    (() => {
      let imgs = [];
      photos.map(async (i) => {
        imgs.push(
          await Promise.all(
            i.collection.items.map(async (j) => {
              const image = await Storage.get(j.name);
              return image;
            })
          )
        );
        setTabsPanel(tabsPanel.concat(imgs));
        setLoading(false);
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeImg = (newValue) => {
    setImg(newValue);
  };
  return (
    <div>
      {img ? <PopUp voidImg={voidImg} img={img} /> : null}
      <AppBar position="relative" className="containerTabs">
        <Tabs className="tabItems" value={value} onChange={handleChange}>
          {photos.map((i, index) => {
            return <Tab key={index} className="tab" label={i.title} />;
          })}
        </Tabs>
      </AppBar>
      {tabsPanel.map((i, index) => {
        return (
          <TabPanel
            className="containerImg"
            key={`key ${index}`}
            value={value}
            index={index}
          >
            {i.map((j, jindex) => {
              return (
                <img
                  onClick={() => handleChangeImg(j)}
                  className="img"
                  key={`img ${jindex}`}
                  alt={`img ${jindex}`}
                  src={j}
                />
              );
            })}
          </TabPanel>
        );
      })}
    </div>
  );
}

export default TabBriefcase;
