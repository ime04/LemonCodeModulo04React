import { Button, Card, CardActionArea, CardActions, CardContent } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const {id} = useParams();
  const gotToList = () => {
    location.href = `/list`;
  }

  return (
    <div className="container">
      <div className="card">
        <Card className="card">
          <CardContent className="card-content">
            <h3>User Id: {id}</h3>
          </CardContent>
          <CardActions className="card-actions">
            <Button variant="contained" onClick={() => gotToList()}>Back</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};