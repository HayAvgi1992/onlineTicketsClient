import './App.css';
import { Grid } from '@mui/material'
import Ticket from './pages/dashboard/ticket/Ticket.jsx';

const App = () => {
  return (
    <Grid container >
      <Grid item>
        <Ticket />
      </Grid>
    </Grid>

  );
}


export default App;
