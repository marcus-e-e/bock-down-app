import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {

  },
  loser: {
    background: "#F5F5F5",
  },
  winner: {
    background: "#A5D6A7",
  }
});


function PlayerBet (props) {
  const {classes} = props;

  return (
    <TableRow key={props.key} className={((props.winnerBet===props.playerBet.bet)? classes.winner : classes.loser)}>
      <TableCell>{props.playerBet.name}</TableCell>
      <TableCell>{props.playerBet.bet}</TableCell>
    </TableRow>
)}
export default withStyles(styles)(PlayerBet);
