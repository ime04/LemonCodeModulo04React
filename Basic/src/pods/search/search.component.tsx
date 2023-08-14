import { Button, Input } from "@mui/material";
import React from "react";
import { MemberEntity } from "../list/list.vm";
import { ListContainer } from "../list";
import { PaginationContainer } from "../pagination";

interface Props {
  stringSearch: string;
  members: MemberEntity[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  doSearch: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const SearchComponent: React.FC<Props> = (props) => {
  const { stringSearch, members, setSearch, doSearch, page, setPage } = props;

  return (
    <div className="container-list">
      <span className="title">Github Users</span>
      <div className="search">
        <Input type="text" value={stringSearch} onChange={(e) => setSearch(e.target.value)} />
        <Button className="search-button" variant="contained" type="button" onClick={() => doSearch()}>Search</Button>
      </div>
      <ListContainer members={members}/>
      <PaginationContainer members={members} doSearch={doSearch} page={page} setPage={setPage}/>
    </div>
  );
};