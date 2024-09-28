
import LatestNews from '@/components/ui/LatestNews/LatestNews';
import SideBar from '@/components/ui/SideBar/SideBar';
import { Grid } from '@mui/material';
import React from 'react';

const homePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideBar></SideBar>

        </Grid>

      </Grid>
    </div>
  );
};

export default homePage;