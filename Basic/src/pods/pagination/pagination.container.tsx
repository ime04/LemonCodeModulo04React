import React from "react";
import { MemberEntity } from "../list/list.vm";
import { PaginationComponent } from "./pagination.component";

interface Props {
    members: MemberEntity[];
    doSearch: () => void;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const PaginationContainer: React.FC<Props> = (props) => {
    const { members, doSearch, setPage, page} = props;
    
    return <PaginationComponent members={members} setPage={setPage} page={page} doSearch={doSearch} />;
};