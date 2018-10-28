import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function PlayerBet (props) {
  return (
    <TableRow key={props.key}>
      <TableCell>{props.playerBet.name}</TableCell>
      <TableCell>{props.playerBet.bet}</TableCell>
    </TableRow>
)}
export default PlayerBet;
