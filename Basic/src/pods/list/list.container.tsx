import React from "react";
import { MemberEntity } from "./list.vm";
import { ListComponent } from "./list.component";

interface Props {
  members: MemberEntity[];
}

export const ListContainer: React.FC<Props> = (props) => {
  const { members } = props;
  const goToDetail = (login: string) : void => {
    location.href = '/detail/' + login;
  }
  return <ListComponent members={members} goToDetail={goToDetail}/>;
};