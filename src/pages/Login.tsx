import React, { useState } from 'react'
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const StyledBox = styled(Box)`
height: 100%;
`
const StyledContainer = styled(Container)`
height: 100%;
padding-bottom: 20px;
`
const NavBar = styled.div`
height: 100px;
`
const LogoContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: start;
`
const Logo = styled.img`
height: 30px;
width: auto;
margin-right: 10px;
`
const BodyContainer = styled.div`
height: 80%;
`
const IllustrationContainer = styled.div`
padding-top: 10%;
width: auto;
`
const Illustration = styled.img`
width: 100%;
height: auto;
`
const LoginContainer = styled.div`
padding-top: 8%;
`
const Form = styled.form``

const LoginHeader = styled.h1`
text-align: left;
font-family: 'Avenir Next';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 55px;
letter-spacing: -0.04em;
color: #213F7D;
margin: 0;
`
const LoginTitle = styled.p`
text-align: left;
font-family: 'Avenir Next';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 27px;
color: #545F7D;
margin: 5px 0 30px 0;
`
const Link = styled.p`
font-family: 'Avenir Next';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
text-align: left;
letter-spacing: 0.1em;
text-transform: uppercase;
margin: 20px 0;
color: #39CDCC;
cursor: pointer;
`
const LoginBtn = styled.button`
font-family: 'Avenir Next';
background: #39CDCC;
border-radius: 8px;
width: 100%;
border: none;
padding: 12px;
color: #FFFFFF;
margin-top: 15px;
cursor: pointer;
`

function Login() {

  const [formData, setFormData] = useState({email: '', password: ''})

  const handleChange = (e: any) => {
 const name = e.target.name
 const value = e.target.value
 setFormData({...formData, [name]: value})
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
 
  return (
    <StyledBox>
     <StyledContainer>
      <NavBar>
        <LogoContainer>
         <Logo src='../images/Union.svg' />
         <Logo src='../images/lendsqr.svg' />
        </LogoContainer>
      </NavBar>
      <BodyContainer>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
          <IllustrationContainer>
          <Illustration src="../images/pablo-sign-in 1.svg" />
          </IllustrationContainer>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
          <LoginContainer>
          <LoginHeader>Welcome!</LoginHeader>
          <LoginTitle>Enter details to login</LoginTitle>
          <Form autoComplete= 'none'>
          <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField 
          type='email' 
          size='small' 
          name='email' 
          label="Email" 
          variant="outlined" 
          value={formData.email} 
          onChange={handleChange} 
          fullWidth />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
          <FormControl sx={{ width: '100%', background: 'inherit' }} size='small'  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          </Grid>
          </Grid>
          </Form>
          <Link>FORGOT PASSWORD?</Link>
          <LoginBtn>LOG IN</LoginBtn>
          </LoginContainer>
          </Grid>
        </Grid>
      </BodyContainer>
     </StyledContainer>
    </StyledBox>
  )
}

export default Login