import { FC } from "react";

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";

import { DataModel } from "./../utils/repodata";

interface RepoCardProps {
  repo: DataModel;
}

export const RepoCard: FC<RepoCardProps> = ({ repo }) => {
  return (
    <Card sx={{ maxWidth: 500, height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea>
        <CardMedia component='img' height='300' image={repo.image} alt='green iguana' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {repo.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {repo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
        <Link variant='button' underline='none' color='secondary' href={repo.github} target='_blank' rel='noopener'>
          Github Repo
        </Link>
        {repo.webpage && (
          <Link variant='button' underline='none' color='primary' href={repo.webpage} target='_blank' rel='noopener'>
            Webpage
          </Link>
        )}
      </CardActions>
    </Card>
  );
};
