import React, { useEffect, useState } from "react";
import "./briefcase.css";

import TabBriefcase from "../components/tabBriefcase";
import { fetchData } from "api";
import LoadSpin from "components/loading";

function Briefcase() {
  const [briefcase, setBriefcase] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //despues de crear el componente
    (async () => {
      const data = await fetchData();
      setBriefcase(briefcase.concat(data));
    })();
  }, []);
  return (
    <div>
      {loading ? <LoadSpin /> : null}
      <TabBriefcase setLoading={setLoading} photos={briefcase} />
    </div>
  );
}

export default Briefcase;
