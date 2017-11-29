(_ => {
  try {
    throw new Error();
    return 0;
  } catch (e) {
    return 1;
  } finally {
    return 2;
  }
})();

// what is returned?
