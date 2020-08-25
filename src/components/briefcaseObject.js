import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Storage } from "aws-amplify";
import Image from "react-bootstrap/Image";
import "./briefcaseObject.css";

export default function BriefcaseObject(props) {
  const [files, setFiles] = useState([]);
  const [img, setImg] = useState([]);
  useEffect(() => {
    getImg();
  }, []);

  async function getImg() {
    const imgs = await Promise.all(
      props.object.collection.items.map(async (i) => {
        const image = await Storage.get(i.name);
        return image;
      })
    );

    setImg(imgs);
  }
  return (
    <div>
      <h2>{props.object.title}</h2>
      <div className="listImages">
        {img.map((i, index) => {
          return (
            <div className="containerImage" key={index}>
              <Image className="image" src={i} />
            </div>
          );
        })}
        <div className="icon-input">
          <input
            type="file"
            multiple
            onChange={(e) => {
              const reader = new FileReader();
              let containerFiles = e.target.files;
              setFiles((i) => i.concat([containerFiles[0]]));
              reader.onload = function (event) {
                let content = event.target.result;
                setImg((i) => i.concat([content]));
              };
              reader.readAsDataURL(containerFiles[0]);
            }}
          />
        </div>
      </div>
    </div>
  );
}

BriefcaseObject.propTypes = {
  object: PropTypes.object,
};
