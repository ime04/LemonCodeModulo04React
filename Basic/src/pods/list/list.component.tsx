import React from "react";
import { MemberEntity } from "./list.vm";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  members: MemberEntity[];
}

export const ListComponent: React.FC<Props> = (props) => {
  const { members } = props;
  return (
    <div className="card-list">
      {members.map((member) => (
        <Card key={member.id} className="card">
          <CardMedia className="avatar-image" image={member.avatar_url} />
          <CardContent className="card-content">
            UserId: {member.id}
          </CardContent>
          <CardActions className="card-actions">
            <Link to={`/detail/${member.login}`}>Profile</Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
