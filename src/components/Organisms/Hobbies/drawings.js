function importAll(r) {
  return r.keys().map(r);
}

const drawings = importAll(
  require.context("../../assets/drawings/", false, /\.(png|jpe?g|svg)$/)
);

export default drawings;
