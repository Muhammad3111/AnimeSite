import React from "react";

export default function Movie({ title, image }) {
  return (
    <article>
      <img src={image} alt="movie_image" />
      <h1>{title}</h1>
    </article>
  );
}
