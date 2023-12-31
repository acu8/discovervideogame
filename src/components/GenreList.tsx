import React from "react";
import useGenres, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
