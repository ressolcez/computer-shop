import React from 'react';
import Topbar from '../../AdminComponents/TopBar';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import FeaturedInfo from '../../AdminComponents/DashboardComponents/FeaturedInfo';

function AdminHome() {
  return (
    <div>
      <Topbar/>
      <FeaturedInfo/>
      </div>
  )
}

export default AdminHome