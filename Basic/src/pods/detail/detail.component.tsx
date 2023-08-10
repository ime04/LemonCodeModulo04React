import React from "react";
import { MemberDetailEntity } from "./detail.vm";
import { Button, Card, CardActions, CardContent } from "@mui/material";

interface Props {
  member: MemberDetailEntity;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { member } = props;
  const gotToList = () => {
    location.href = `/list`;
  }
  return (
    <div className="container">
      <div className="card">
        <Card className="card">
          <CardContent className="card-content">
            <h3>User Id: {member.id}</h3>
          </CardContent>
          <CardActions className="card-actions">
            <Button variant="contained" onClick={() => gotToList()}>Back</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};