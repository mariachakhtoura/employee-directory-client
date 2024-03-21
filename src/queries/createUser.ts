const createUserQuery = `
mutation CreateUser($name: NameInput!, $email: String!, $gender: String!, $dob: String!, $country: String!) {
  createUser(id: $id, email: $email, gender: $gender, dob: $dob, country: $country) {
    id
  }
}
`;

export default createUserQuery;
