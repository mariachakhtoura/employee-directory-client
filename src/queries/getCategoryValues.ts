const getCategoryValuesQuery = `
query getCategoryValues($category: String!) {
  getCategoryValues(category: $category)
}
`;

export default getCategoryValuesQuery;