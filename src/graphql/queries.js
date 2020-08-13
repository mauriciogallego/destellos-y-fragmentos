/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGallery = /* GraphQL */ `
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
      sections {
        id
        title
        colletion {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGallerys = /* GraphQL */ `
  query ListGallerys(
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGallerys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        sections {
          id
          title
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
