export function concatName(name: {
  title: string;
  first: string;
  last: string;
}) {
  if (!name) return '';

  const { title, first, last } = name;
  return `${title ? `${title} ` : ''}${first} ${last}`;
}

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function isString(value?: string): value is string {
  return value !== '' && value !== undefined && value !== null;
}
