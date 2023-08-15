import React from "react";
import { useParams } from "react-router-dom";
import { DetailContainer } from "../pods/detail";

export const DetailPage: React.FC = () => {
  const {id} = useParams();
  return <DetailContainer id={id}/>;
};