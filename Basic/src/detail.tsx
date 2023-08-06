import { Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const {id} = useParams();

  return (
    <>
      <h2>Hello from Detail page</h2>
      <div className="card">
        <Card sx={{backgroundColor:'skyblue'}}>
          <CardContent>
            <h3>User Id: {id}</h3>
          </CardContent>
          <CardActionArea>
            <Link to="/list">Back to list page</Link>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};