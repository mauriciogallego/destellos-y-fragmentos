import React, { useState } from "react";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createImage, createBriefcase } from "../graphql/mutations";
import ReactLoading from "react-loading";
import "./createBriefcase.css";

Storage.configure({ level: "public" });
export default function CreateBriefcase(props) {
  const [briefcase, setBriefcase] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [loaded, setLoaded] = useState("")

  async function createBriefcasef(e) {
    setLoading(true);
    e.preventDefault();
    try {
      const briefcaseObject = await API.graphql(
        graphqlOperation(createBriefcase, {
          input: {
            title: briefcase,
          },
        })
      );

      files.map((i) => {
        uploadStorage(briefcaseObject.data.createBriefcase.id, i);
      });
      setLoading(false);
      setLoaded(true);
    } catch (err) {
      console.error(err);
      setLoading(true);
      setErr(err);
    }
  }

  return (
    <div className="container">
      {loading === true ? (
        <ReactLoading
          className="loading"
          color={"white"}
          height={"10%"}
          width={"10%"}
        />
      ) : null}
      {err !== "" ? (
        <div>
          <p>{err}</p>
        </div>
      ) : null}
      {loaded !== "" ? (
        <div>
          <p>{loaded}</p>
        </div>
      ) : null}
      <form onSubmit={createBriefcasef}>
        <p>Nuevo del portafolio</p>
        <div className="icon-input">
          <input
            required
            type="text"
            value={briefcase}
            onChange={(e) => setBriefcase(e.target.value)}
            placeholder="portafolio"
          />
          <i className="bx bx-briefcase icon" />
          <div className="bg"></div>
        </div>
        <div className="icon-input">
          <input
            type="file"
            multiple
            onChange={(e) => {
              files.push(e.target.files[0]);
              setFiles(files);
            }}
          />
          <i className="bx bx-image icon" />
        </div>
        <div className="icon-input">
          <input type="submit" value="enviar" />
          <div className="bg"></div>
        </div>
      </form>
    </div>
  );
}

async function uploadStorage(briefcaseID, i) {
  await Storage.put(i.name, i);
  console.log("uploadStorage");
  const data = await API.graphql(
    graphqlOperation(createImage, {
      input: { name: i.name, briefcaseID: briefcaseID },
    })
  );
  return data;
}
