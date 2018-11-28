import React from 'react';
import PropTypes from 'prop-types';
import PlayerTable from './components/PlayerTable';
import calcWinner from './components/lib/winner';
import bock from './julbock.png';
import bockdown from './julbockdown.gif';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import config from './components/config';
import  {getBets, getEndDate} from './components/lib/spreadsheet';

const styles = theme => ({
  root: {
    marginTop: 8,

  },
  bock: {
    width: 100,
  }
});

function sortBets(arr) {
  arr.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(a.bet) - new Date(b.bet);
})
return arr;
};

//const winnerBet = calcWinner(playerBets, date);

class Index extends React.Component {
  state = {
    bets: [],
    error: null,
    endDate: null
  };

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  };

  onLoadData = (data, error) => {
    if (data) {
      const bets = sortBets(data.bets);
      this.setState({ bets });
    } else {
      this.setState({ error });
    }
  };

  onLoadEndDate = (data, error) => {
    if (data) {
      console.log(data);
      const endDate = data.endDate;
      this.setState({ endDate });
    } else {
      this.setState({ error });
    }
  };

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
    .init({
      apiKey: config.apiKey,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    })
    .then(() => {
      // 3. Initialize and make the API request.
      getBets(this.onLoadData);
      getEndDate(this.onLoadEndDate);
    });
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
      <img src={this.state.endDate? bockdown : bock} className={classes.bock} alt="bock" />
      </Paper>
      </Grid>
      <Grid item xs={12}>
      <PlayerTable players={this.state.bets} winnerBet={calcWinner(this.state.bets, this.state.endDate)} />
      </Grid>
      </Grid>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
