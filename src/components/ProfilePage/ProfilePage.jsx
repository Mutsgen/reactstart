import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFromUser } from "../../fetches/getFromUser.fetch";
import { BookCard } from "../BookCard/BookCard";

export const ProfilePage = (props) => {
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const [book, updateBook] = useState([]);
  const [update, goUpdate] = useState(0);
  useEffect(() => {
    async function updateBooks() {
      const books = await getBooks();
      if (books[0] !== undefined) {
        updateBook(books);
      }
    }
    updateBooks();
  }, [update]);

  const getBooks = async () => {
    const books = await getFromUser(currentUser);
    return books;
  };

  if (currentUser === null) {
    navigate("/");
  }
  return (
    <div>
      <h1>Ваш профиль</h1>
      {book.map((element, index) => {
        return (
          <BookCard
            key={index}
            book={element}
            Update={update}
            goUpdate={goUpdate}
            position="profile"
          />
        );
      })}
    </div>
  );
};
