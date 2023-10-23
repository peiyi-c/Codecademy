import React, { useContext } from "react";
import { MixtapeContext } from "./MixtapeContext";
import { Song } from "./Song";

export const SongList = () => {
  // Your code here! ✨
  const { genre, sortOrder, songs } = useContext(MixtapeContext);
  return (
    <>
      <h2>TODO: Update taste in music...?</h2>

      {songs.map((song) => (
        <Song
          artist={song.artist}
          genre={song.genre}
          name={song.name}
          year={song.year}
        />
      ))}
    </>
  );
};
