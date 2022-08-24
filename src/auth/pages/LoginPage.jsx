import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'

export const LoginPage = () => {
  return (
      <Grid
        container
        spacing={ 0 }
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >

        <Grid item
          className='box-shadow'
          xs={ 3 }
          sx={{ backgroundColor: 'white', padding: 3, borderRadious: 2 }}
        >

            <Typography varient='h5' sx={{ mb: 1 }}>Login</Typography>

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
                            Create an account 🆕
                        </Link>
                    </Grid>

                </Grid>
            </form>

        </Grid>

      </Grid>
  )
}
