import React from "react";
import { useSelector } from "react-redux";
import { postToMovingfetch } from "../../fetches/postToMoving.fetch";
import { returnBook } from "../../fetches/returnBook.fetch";

export const BookCard = ({ book, Update, goUpdate, position }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const reader = useSelector((state) => state.currentUser);
  if (position === "library") {
    return (
      <div className="book_card">
        <div className="card_content">
          <span>{book.title}</span>
          <p>Жанр: {book.ganreName}</p>
          <p>Автор: {book.authorName}</p>
          <span>
            {book.count > 0 ? `В наличии: ${book.count}` : `Нет в наличии`}
          </span>
          {book.count > 0 ? (
            <button
              className="take"
              onClick={async (e) => {
                await postToMovingfetch(book.booktype_id, reader).then(
                  goUpdate(Update + 1)
                );
              }}
            >
              Взять
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  if (position === "profile") {
    let date = new Date();
    date.setMonth(date.getMonth() + 1);
    const overdue = new Date(book.date_out) > date;
    return (
      <div className={`book_card ${overdue ? "overdue" : null}`}>
        <div className="card_content">
          <span>{book.title}</span>
          <p>Жанр: {book.ganreName}</p>
          <p>Автор: {book.authorName}</p>
          <span>{book.book_id}</span>
          <button
            className="return"
            onClick={async () => {
              await returnBook(currentUser, book.book_id);
              await goUpdate(Update + 1);
            }}
          >
            Прочитал, возвращаю
          </button>
        </div>
      </div>
    );
  }
};
