import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Grid, Card, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';

interface LocationsType {
  id: string;
  name: string;
  description: string;
  photo: string;
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const Locations: React.FC = () => {
  const { loading, error, data } = useQuery<{ locations: LocationsType[] }>(GET_LOCATIONS);

  if (loading) return <CircularProgress />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Grid container spacing={2} style={{ marginTop: '10px' }}>
      {data?.locations.map(({ id, name, description, photo }) => (
        <Grid item xs={12} sm={6} md={4} key={id}>
          <Card>
            <CardMedia
              component="img"
              alt="Location reference"
              height="140"
              image={photo}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>About this location:</b> {description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Locations;
