import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFromServer } from "../../fetches/getFromServer.fetch";
import { BookCard } from "../BookCard/BookCard";
import { useNavigate } from "react-router-dom";

export const MainPage = (props) => {
  const navigate = useNavigate();
  const account = useSelector((state) => state.currentUser);
  const [books, setBooks] = useState([]);
  const [update, goUpdate] = useState(0);
  useEffect(() => {
    async function updateBooks() {
      const books = await getBooks();
      if (books[0] !== undefined) {
        setBooks(books);
      }
    }
    updateBooks();
  }, [update]);

  const getBooks = async () => {
    const books = await getFromServer("everybook/get");
    return books;
  };

  return (
    <div className="page">
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Ваш профиль
      </button>
      <header>Library number 767</header>
      <main>
        {books.map((element, index) => {
          return (
            <BookCard
              key={index}
              book={element}
              Update={update}
              goUpdate={goUpdate}
              position="library"
            />
          );
        })}
      </main>
    </div>
  );
};
