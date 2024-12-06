function findUniq(array) {
  return array.find(function(e, i, a) {
    return a.indexOf(e) === a.lastIndexOf(e);
  });
}
