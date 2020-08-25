import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBriefcases } from "../graphql/queries";
import BriefcaseObject from "./briefcaseObject";

export default function UpdateBriefcase() {
  const [gallery, setGallery] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchData() {
      const dataBriefcase = await API.graphql(graphqlOperation(listBriefcases));

      setGallery(dataBriefcase.data.listBriefcases.items);
    }
    fetchData();
  }, []);

  return (
    <div>
      {gallery.map((i, index) => {
        return <BriefcaseObject key={index} object={i} />;
      })}
    </div>
  );
}
