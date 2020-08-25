/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBriefcase = /* GraphQL */ `
  mutation CreateBriefcase(
    $input: CreateBriefcaseInput!
    $condition: ModelBriefcaseConditionInput
  ) {
    createBriefcase(input: $input, condition: $condition) {
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
export const updateBriefcase = /* GraphQL */ `
  mutation UpdateBriefcase(
    $input: UpdateBriefcaseInput!
    $condition: ModelBriefcaseConditionInput
  ) {
    updateBriefcase(input: $input, condition: $condition) {
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
export const deleteBriefcase = /* GraphQL */ `
  mutation DeleteBriefcase(
    $input: DeleteBriefcaseInput!
    $condition: ModelBriefcaseConditionInput
  ) {
    deleteBriefcase(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
