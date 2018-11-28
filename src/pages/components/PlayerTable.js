import React from 'react';
import PlayerBet from './PlayerBet';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function PlayerTable (props) {
  const playerBets = props.players;
  const winnerBet = props.winnerBet;

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Bet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playerBets.map((player, key) => (<PlayerBet playerBet={player} winnerBet={winnerBet} key={key} />))}
        </TableBody>
      </Table>
    </Paper>
)}
export default PlayerTable;
