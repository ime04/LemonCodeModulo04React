import React from "react";

interface LastSearchContext {
    lastSearch: string;
    setLastSearch: (lastSearch: string) => void;
}

export const SearchContext = React.createContext<LastSearchContext>({
    lastSearch: '',
    setLastSearch: () => {}
});

interface Props {
    children: React.ReactNode;
}

export const SearchProvider: React.FC<Props> = ({ children }: Props) => {
    const [lastSearch, setLastSearch] = React.useState('');

    return (
        <SearchContext.Provider value={{
            lastSearch,
            setLastSearch
        }}>
            {children}
        </SearchContext.Provider>
    );
};