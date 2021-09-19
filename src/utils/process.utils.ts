export const exitWithError = (error: Error) => {
  console.error(error);
  process.exit(84);
}
