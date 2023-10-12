import React, { useCallback, useEffect, useState } from "react";
import Movie from "../Movie";

export default function Fantasy() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${search}&genres=Fantasy&sortBy=ranking&sortOrder=asc`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7c2a5a6b8emsh82e773014114b19p180921jsnf8ad106e000a",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    const timeOutId = setTimeout(async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(data);

  return (
    <div className="container">
      <h1>Fantasy</h1>
      <div className="search">
        <input type="search" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="movies">
        {loading ? (
          <h1>Yuklanmoqda ...</h1>
        ) : (
          data.map((item) => <Movie key={item.title} {...item} />)
        )}
      </div>
    </div>
  );
}
