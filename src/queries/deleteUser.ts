const deleteUserQuery = `
mutation DeleteUser($id: String!) {
  deleteUser(id: $id) {
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
  }
}
`;

export default deleteUserQuery;