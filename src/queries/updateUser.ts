const updateUserQuery = `
mutation UpdateUser($name: NameInput, $gender: String, $dob: String, $country: String) {
  updateUser(id: $id, name: $name, gender: $gender, dob: $dob, country: $country) {
    id
  }
}
`;

export default updateUserQuery;
