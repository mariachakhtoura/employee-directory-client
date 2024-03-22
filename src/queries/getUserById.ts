const getUserByIdQuery = `
query getUserById($id: String!) {
  getUserById(id: $id) {
    id
    gender
    email
    country
    dob
    picture {
      large
    }
    name {
      title
      first
      last
    }
  }
}
`;

export default getUserByIdQuery;