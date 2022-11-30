export const getFromUser = async (user) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `http://localhost:8000/user/${user}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => console.log("error", error));
  console.log(response);
  return response;
};
