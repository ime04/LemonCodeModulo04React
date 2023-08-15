export interface MemberDetailEntity {
    id: string;
    login: string;
    name: string;
    avatar_url: string
}

export const createDefaultMemberDetail = () => ({
    id: "",
    login: "",
    name: "",
    avatar_url: ""
});