export default (async () => {
  const data = await fetch("1", {
    method: "GET",
    headers: {
      authorization: "1",
    },
  })
    .then((value) => value.json())
    .catch((reason) => console.log(reason));

  return console.log(data);
})();
