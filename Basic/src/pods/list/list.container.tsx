import React from "react";
import { ListComponent } from "./list.component";
import { MemberEntity } from "./list.vm";

interface Props {
  members: MemberEntity[];
}

export const ListContainer: React.FC<Props> = (props) => {
  const { members } = props;
  return <ListComponent members={members} />;
};