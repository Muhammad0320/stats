export const dateStringToDate = (dateString: string): Date => {
  const dateArray = dateString
    .split("/")
    .map((row: string) => Number.parseInt(row));

  return new Date(dateArray[-1], dateArray[1] - 1, dateArray[0]);
};
