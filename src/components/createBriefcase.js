import React, { useState } from "react";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createGallery } from "../graphql/mutations";

export default function CreateBriefcase(props) {
  const [briefcase, setBriefcase] = useState("");
  const [files, setFiles] = useState([]);

  async function createBriefcase(e) {
    e.preventDefault();
    console.log("entro a createbrefasd ");

    let collection = files.map(async (i) => {
      await Storage.put(i.name, i);
      return {
        name: i.name,
      };
    });
    const data = await API.graphql(
      graphqlOperation(createGallery, {
        input: {
          sections: {
            title: briefcase,
            colletion: collection,
          },
        },
      })
    );
    console.log("data fetch ", data);
  }

  return (
    <div>
      <form onSubmit={createBriefcase}>
        <div>
          <p>Nombre del portafolio</p>
          <input
            type="text"
            value={briefcase}
            onChange={(e) => setBriefcase(e.target.value)}
            placeholder="portafolio"
          />
        </div>
        <div>
          <input
            type="file"
            multiple
            onChange={(e) => {
              files.push(e.target.files[0]);
              setFiles(files);
            }}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
