export const returnBook = async (reader, book_id) => {
  const requestOptions = {
    method: "PUT",
    body: JSON.stringify({
      reader_id: reader,
      book_id: book_id,
    }),
    redirect: "follow",
  };

  return await fetch("http://localhost:8000/return", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
