import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
        <form>
            <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField 
                      label='Email'
                      type='email'
                      placeholder='email@example.com'
                      fullWidth
                    />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField 
                      label='Password'
                      type='password'
                      placeholder='password'
                      fullWidth
                    />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={ 12 }>
                        <Button variant='contained' fullWidth>
                            Login
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Link component={ RouterLink } color='inherit' to='/auth/register'>
                        Create an account
                    </Link>
                </Grid>

            </Grid>
        </form>
    </AuthLayout>
  )
}
