/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBriefcase = /* GraphQL */ `
  query GetBriefcase($id: ID!) {
    getBriefcase(id: $id) {
      id
      title
      collection {
        items {
          id
          briefcaseID
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBriefcases = /* GraphQL */ `
  query ListBriefcases(
    $filter: ModelBriefcaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBriefcases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        collection {
          items {
            id
            name
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      briefcaseID
      briefcase {
        id
        title
        collection {
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        briefcaseID
        briefcase {
          id
          title
          createdAt
          updatedAt
        }
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
