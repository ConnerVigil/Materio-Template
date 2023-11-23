// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useRouter } from 'next/router'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AuthForm from 'src/auth-form'
import { supabase } from 'src/supabaseClient'

const Dashboard = () => {
  // Check if user is authenticated
  const router = useRouter()
  const user = supabase.auth.getUser()
  console.log(user)
  if (!user) {
    router.push('/pages/login')
  }

  return (
    <ApexChartWrapper>
      <h1>Dashboard</h1>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <AuthForm />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
