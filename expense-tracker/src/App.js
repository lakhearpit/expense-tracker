import React from 'react';
import {Grid} from '@material-ui/core'
import Details from './components/Details/Details';
import { Height } from '@material-ui/icons';

const App = () => {
  return (
    <div>
        <Grid container spacing={0} alignItems='center' justify='center' style={{Height:'100vh'}}>
        <Grid items xs={12} sm={4}>
        <Details/>
        </Grid>

        <Grid items xs={12} sm={4}>
            Main
        </Grid>

        <Grid items xs={12} sm={4}>
        <Details/>
        </Grid>
        </Grid>
    </div>
  )
}

export default App