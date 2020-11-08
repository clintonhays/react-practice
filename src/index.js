import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
};

const Book = () => {
  const title = "Tasha's Cauldron of Everything";
  const author = 'Wizards RPG Team';
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/81Me-r4UL1L._AC_UL200_SR200,200_.jpg" alt="DnD Book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
