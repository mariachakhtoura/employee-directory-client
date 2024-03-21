const deleteUserQuery = `
mutation DeleteUser($id: String!) {
  deleteUser(id: $id) {
    id
  }
}
`;

export default deleteUserQuery;