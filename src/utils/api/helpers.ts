export function substringExistsInObject<TObj>(substring: string, obj: TObj): boolean {
  if (obj === null || obj === undefined) {
    return false;
  }

  if (typeof obj === 'string' && obj.toLowerCase().includes(substring)) {
    return true;
  }

  if (typeof obj === 'object') {
    for (let key in obj) {
      if (substringExistsInObject(substring, obj[key])) {
        return true;
      }
    }
  }

  return false;
}
