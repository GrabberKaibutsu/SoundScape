import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Albums from "../components/HomeAlbums"
import Songs from "../components/SearchedSongs"
import Artists from "../components/SearchArtists"

const host = import.meta.env.VITE_BACKENDURL
const Search = () => {

    const { searchTerm } = useParams();

    const [search, setSearch] = useState(null);

    let searchTermSplit = searchTerm.split(" ")
    let searchTermUrl = searchTermSplit.join("+")

    useEffect(() => {
        fetch(`${host}/search/${searchTermUrl}`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((jsonRes) => setSearch(jsonRes));
      }, [searchTerm]);

    let searchedArtists = search?.artists.items
    let searchedAlbums = search?.albums.items
    let searchedTracks = search?.tracks.items

    return (
        <div>
            <h1 className="text-slate-50 text-4xl">Results for {searchTerm}</h1>

            <br></br>

            <h2 className="text-slate-50 text-2xl">Artists</h2>
            {/* components that will fomat the list of artists */}
            <br></br>
            <Artists artists={searchedArtists} />

            <br></br>

            <h2 className="text-slate-50 text-2xl">Albums</h2>
            {/* components that will fomat the list of albums */}
            <br></br>
            <Albums albums={searchedAlbums} />

            <br></br>

            <h2 className="text-slate-50 text-2xl">Tracks</h2>
            {/* components that will fomat the list of songs */}
            <br></br>
            <Songs songs={searchedTracks} />
            
        </div>
    )
}

export default Search