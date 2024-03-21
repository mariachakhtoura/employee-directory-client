export function concatName(name: {
  title: string;
  first: string;
  last: string;
}) {
  const { title, first, last } = name;
  return `${title ? `${title} ` : ''}${first} ${last}`;
}

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}