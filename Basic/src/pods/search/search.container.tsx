import React from "react";
import { MemberEntity } from "../list/list.vm";
import { SearchComponent } from "./search.component";

export const SearchContainer: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [page, setPage] = React.useState(0);
    const stringSearch = 'lemoncode';
    const [search, setSearch] = React.useState<string>(stringSearch);
    const doSearch = () => fetch(
        `https://api.github.com/orgs/${search}/members?per_page=10&page=${page}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject('error 404')
            }
        }).then((json) => setMembers(json))
        .catch(error => alert('Organization not found'));

    React.useEffect(() => {
        doSearch()
    }, [page]);

    return <SearchComponent stringSearch={search} members={members} setSearch={setSearch} doSearch={doSearch} page={page} setPage={setPage} />;
};