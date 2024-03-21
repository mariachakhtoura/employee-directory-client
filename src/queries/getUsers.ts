const getUsersQuery = `
query GetUsers {
  getUsers {
    id
    gender
    email
    country
    dob
    name {
      title
      first
      last
    }
    picture {
      large
      medium
      thumbnail
    }
  }
}
`;

export default getUsersQuery;