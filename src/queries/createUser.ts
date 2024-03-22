const createUserQuery = `
mutation CreateUser($name: NameInput!, $email: String!, $gender: String!, $dob: String!, $country: String!) {
  createUser(name: $name, email: $email, gender: $gender, dob: $dob, country: $country) {
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

export default createUserQuery;
