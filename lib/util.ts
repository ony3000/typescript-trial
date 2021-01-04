function sandbox(title: string, codeblock: () => void): void {
  try {
    console.group(title);
    codeblock();
  }
  catch (err) {
    console.error(err);
  }
  finally {
    console.groupEnd();
  }
}

export {
  sandbox,
};
