export const postToMovingfetch = async (booktype, reader) => {
  console.log(booktype, reader);

  const requestOptions = {
    method: "POST",
    body: JSON.stringify({
      booktype_id: booktype,
      reader_id: reader,
      date_out: new Date(),
    }),
    redirect: "follow",
  };
  fetch("http://localhost:8000/moving_b", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
