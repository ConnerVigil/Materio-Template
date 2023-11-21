import { Grid, Typography } from '@mui/material'
import 'react-datepicker/dist/react-datepicker.css'
import Table from 'src/views/dashboard/Table'

const Transactions = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Transactions</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default Transactions
