import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { postContext } from "../../context/postContext";
import Navbar2 from "../Navbar2/Navbar2";
import Pizda from "./Pizda";
import "./Pagination.css";
import { Button } from "@mui/material";
const Kotok = () => {
  const { post, getPost, pages } = useContext(postContext);

  const [searchParams, setSearchparams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(1);
  const [fil, setFil] = useState(false);
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    setSearchparams({
      q: search,
      _limit: limit,
      _page: page,
    });
  }, [search, page, limit]);
  useEffect(() => {
    getPost();
  }, [searchParams]);
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <Pizda />
      {post.map((item) => (
        <>
          <Navbar2 key={item.id} item={item} />
        </>
      ))}
      <div className="pagination">
        <div>
          <Button
            className="prev"
            disabled={page === 1 ? true : false}
            onClick={() => setPage(page - 1)}
          >
            prev
          </Button>
          <span style={{ color: "white" }}>{page}</span>
          <Button
            className="next"
            disabled={page === limit ? true : false}
            onClick={() => setPage(page + 1)}
          >
            next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Kotok;
