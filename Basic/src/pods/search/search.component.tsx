import { Button, Input } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { MemberEntity } from "../list/list.vm";
import { ListContainer } from "../list";

interface Props {
  stringSearch: string;
  members: MemberEntity[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  doSearch: () => void;
}

export const SearchComponent: React.FC<Props> = (props) => {
  const { stringSearch, members, setSearch, doSearch } = props;

  return (
    <div className="container-list">
      <span className="title">Github Users</span>
      <div className="search">
        <Input type="text" value={stringSearch} onChange={(e) => setSearch(e.target.value)} />
        <Button className="search-button" variant="contained" type="button" onClick={() => doSearch()}>Search</Button>
      </div>
      <ListContainer members={members}/>
    </div>
  );
};