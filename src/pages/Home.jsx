import { Stack } from '@mui/material';
import React from 'react'
import Landing from '../sections/Landing';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import withCommonLayout from '../components/common/withCommonLayout';

const Home = () => {
  return (
    <Stack gap={4}>
      <Landing />
      <Skills />
      <Projects />
    </Stack>
  );
}

export default withCommonLayout(Home);