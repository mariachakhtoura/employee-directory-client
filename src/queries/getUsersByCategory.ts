const getUsersByCategoryQuery = `
query getUsersByCategory($category: String!, $value: String!) {
  getUsersByCategory(category: $category, value: $value) {
    id
    gender
    email
    country
    dob
    picture {
      large
      medium
      thumbnail
    }
    name {
      title
      first
      last
    }
  }
}
`;

export default getUsersByCategoryQuery;