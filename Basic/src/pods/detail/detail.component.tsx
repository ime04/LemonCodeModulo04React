import React from "react";
import { MemberDetailEntity } from "./detail.vm";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  member: MemberDetailEntity;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <div className="container">
      <div className="card-double">
        <Card key={member.id} className="card-double">
          <CardMedia className="avatar-image" image={member.avatar_url} component='img'/>
          <CardContent className="card-content">
            UserId: {member.id}
            <br />
            Username: {member.name}
          </CardContent>
          <CardActions className="card-actions">
            <Link to="/list">Back</Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};