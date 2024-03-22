export function getStringFromFormData(formData: FormData, key: string) {
  return formData.get(key)?.toString() || '';
}
