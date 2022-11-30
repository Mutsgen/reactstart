export const getFromServer = async (table) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(`http://localhost:8000/${table}`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => console.log("error", error));
  return response;
};
