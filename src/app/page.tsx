"use client";
import { Button, Grid, Stack, Typography } from '@mui/material';
import { CSSProperties } from '@nextui-org/react/types/theme';
 
export default function Home() {  
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <Typography variant='h1' color="primary">Hola mundo</Typography>
      <Stack direction="row" columnGap={1}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button> 
        <Button variant="outlined" color="secondary">Outlined</Button> 
      </Stack>
    </Grid>
  );
}