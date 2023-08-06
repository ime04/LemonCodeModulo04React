import { Button, Input, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [search, setSearch] = React.useState(
    localStorage.getItem('lastSearch') ? localStorage.getItem('lastSearch') : 'lemoncode'
  );
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    handleSearch();
  }, [page]);

  const handleSearch = () => {
    localStorage.setItem('lastSearch', search);
    fetch(`https://api.github.com/orgs/${search}/members?per_page=10&page=${page}`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }

  return (
    <>
      <h2>Hello from List page</h2>
      <div className="search">
        <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <Button className="search-button" variant="contained" type="button" onClick={handleSearch}>Search</Button>
      </div>
      <Table className="list-user-list-container">
        <TableHead>
          <TableRow>
            <TableCell className="list-header"><span >Avatar</span></TableCell>
            <TableCell className="list-header"><span>Id</span></TableCell>
            <TableCell className="list-header"><span>Name</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <TableRow>
              <TableCell><img className="avatar-image" src={member.avatar_url} /></TableCell>
              <TableCell><span>{member.id}</span></TableCell>
              <TableCell><Link to={`/detail/${member.login}`}>{member.login}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="pagination">
        {page > 1 ? <Button variant="contained" onClick={() => setPage(page === 1 ? 1 : page - 1)}>Prev</Button> : null} 
        {Object.keys(members).length >= 10 ? <Button variant="contained" onClick={() => setPage(page + 1)}>Next</Button> : null}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};