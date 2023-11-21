import { Grid, Typography } from '@mui/material'
import 'react-datepicker/dist/react-datepicker.css'
import PropertyCard from './property-card'

const Properties = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Properties</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PropertyCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PropertyCard />
      </Grid>
    </Grid>
  )
}

export default Properties
