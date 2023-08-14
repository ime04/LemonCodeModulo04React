import { Button, Input } from "@mui/material";
import React from "react";
import { MemberEntity } from "../list/list.vm";

interface Props {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    members: MemberEntity[];
    doSearch: () => void;
}

export const PaginationComponent: React.FC<Props> = (props) => {
    const { page, setPage, members, doSearch } = props;

    return (
        <div className="pagination">
            {page > 1 ? <Button variant="contained" onClick={() => setPage(page === 1 ? 1 : page - 1)}>Prev</Button> : null}
            {Object.keys(members).length >= 10 ? <Button variant="contained" onClick={() => setPage(page + 1)}>Next</Button> : null}
        </div>
    );
};