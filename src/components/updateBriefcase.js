import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBriefcases } from "../graphql/queries";
import BriefcaseObject from "./briefcaseObject";
import { fetchData } from "api";

export default function UpdateBriefcase() {
  const [gallery, setGallery] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (async () => {
      const data = await fetchData();
      setGallery(data);
    })();
  }, []);

  return (
    <div>
      {gallery.map((i, index) => {
        return <BriefcaseObject key={index} object={i} />;
      })}
    </div>
  );
}
