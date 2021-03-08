export const getSingleSelectValue = (value: any[]): any[] => {
  if (!value.length) {
    return [];
  }

  if (!value.some((x) => x.options)) {
    return value;
  }

  return value.find((x) => x.options).options;
};
