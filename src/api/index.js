import { API, graphqlOperation, Storage } from "aws-amplify";
import { listBriefcases } from "../graphql/queries";
import { createImage } from "../graphql/mutations";

export async function uploadStorage(briefcaseID, i) {
  await Storage.put(i.name, i);
  console.log("uploadStorage");
  const data = await API.graphql(
    graphqlOperation(createImage, {
      input: { name: i.name, briefcaseID: briefcaseID },
    })
  );
  return data;
}

export async function fetchData() {
  const dataBriefcase = await API.graphql(graphqlOperation(listBriefcases));
  console.log('data', dataBriefcase.data.listBriefcases.items )
  return dataBriefcase.data.listBriefcases.items;
}
