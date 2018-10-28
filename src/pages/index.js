import React from 'react';
import PropTypes from 'prop-types';
import PlayerTable from './components/PlayerTable';
import calcWinner from './components/lib/winner';
import bock from './julbock.png';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    marginTop: 8,

  },
  bock: {
    width: 100,
  }
});

const stillOpen = true;
const date = '2018.12.12 00:02';

const playerBets = [
  {name: 'Bobbs', bet: '2018.12.12 00:12'},
  {name: 'BobbLisa', bet: '2018.12.12 00:00'}
];

// sort imput data
const tableData = calcWinner(playerBets, date, stillOpen);

class Index extends React.Component {
  state = {
  };




  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        spacing='16'
        className={classes.root}
        direction="column"
        alignItems="center"
        justify="center"
        >
        <Grid item xs={12}>
          <Paper>
            <img src={bock} className={classes.bock} alt="bock" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <PlayerTable players={playerBets} />
        </Grid>
      </Grid>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
