import React from "react";
import { MemberEntity } from "../list/list.vm";
import { SearchComponent } from "./search.component";
import { SearchContext } from "../../core/search";

export const SearchContainer: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [page, setPage] = React.useState(1);
    const { lastSearch, setLastSearch } = React.useContext(SearchContext);
    const [search, setSearch] = React.useState<string>(lastSearch || 'lemoncode');
    const doSearch = () => fetch(
        `https://api.github.com/orgs/${search}/members?per_page=10&page=${page}`)
        .then((response) => {
            if (response.ok) {
                return response.json();                
            }
            throw new Error('Organization not found');
        }).then((json) => {
            if(Object.keys(json).length === 0) {
                throw new Error('Organization not found');
            }
            setLastSearch(search);
            setMembers(json);
        }).catch(error => alert(error));

    React.useEffect(() => {
        doSearch()
    }, [page]);

    return <SearchComponent
        stringSearch={search}
        members={members}
        setSearch={setSearch}
        doSearch={doSearch}
        page={page}
        setPage={setPage}
    />;
};