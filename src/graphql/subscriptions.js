/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBriefcase = /* GraphQL */ `
  subscription OnCreateBriefcase {
    onCreateBriefcase {
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
export const onUpdateBriefcase = /* GraphQL */ `
  subscription OnUpdateBriefcase {
    onUpdateBriefcase {
      id
      title
      collection {
        items {
          id
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBriefcase = /* GraphQL */ `
  subscription OnDeleteBriefcase {
    onDeleteBriefcase {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
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
