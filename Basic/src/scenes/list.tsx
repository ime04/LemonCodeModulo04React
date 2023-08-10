import React from "react";
import { SearchContainer } from "../pods/search";

export const ListPage: React.FC = () => {
  return (
    <SearchContainer />
  );
};

/*<div className="pagination">
{page > 1 ? <Button variant="contained" onClick={() => setPage(page === 1 ? 1 : page - 1)}>Prev</Button> : null} 
{Object.keys(members).length >= 10 ? <Button variant="contained" onClick={() => setPage(page + 1)}>Next</Button> : null}
</div>*/