import React from "react";
import { MemberEntity } from "./list.vm";
import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";

interface Props {
  members: MemberEntity[];
  goToDetail: (login: string) => void;
}

export const ListComponent: React.FC<Props> = (props) => {
  const { members, goToDetail } = props;
  return (
      <div className="card-list">
        {members.map((member) => (
          <Card key={member.id} className="card">
            <CardMedia className="avatar-image" image={member.avatar_url} />
            <CardContent className="card-content">
              UserId: {member.id}
            </CardContent>
            <CardActions className="card-actions">
              <Button variant="contained" onClick={() => goToDetail(member.login)}>Detail</Button>
            </CardActions>
          </Card>
        ))}
      </div>
  );
};


/*     <!--<div className="pagination">
        {page > 1 ? <Button variant="contained" onClick={() => setPage(page === 1 ? 1 : page - 1)}>Prev</Button> : null} 
        {Object.keys(members).length >= 10 ? <Button variant="contained" onClick={() => setPage(page + 1)}>Next</Button> : null}
      </div> -->*/

/** <Button variant="contained" onClick={() => goToDetail(member.login)}>Detail</Button> */