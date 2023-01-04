import React, { useState } from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { IconButton, Menu, Tooltip, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const StyledBox = styled(Box)`
width: 100%;
height: 100%;
`
const NavBarContainer = styled.div`
display: flex;
height: 100px;
justify-content: space-between;
align-items: center;
width: auto;
cursor: pointer;
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
const SearchContainer = styled.div`
width: 25%;
height: 35px;
background: #FFFFFF;
border: 1px solid rgba(33, 63, 125, 0.3);
border-radius: 8px;
display: flex;
align-items: center;
@media screen and (max-width: 840px) {
  width: 50%;
}
`
const Input = styled.input`
height: 80%;
width: 85%;
border: none;
background-color: inherit;
border-radius: 5px 0 0 5px;
outline: none;
`
const SearchBtn = styled.button`
height: 100%;
width: 15%;
border: none;
background-color: #39CDCC;
border-radius: 0 8px 8px 0;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
`
const RightContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: auto;
@media screen and (max-width: 840px) {
  display: none;
}
`
const Docs = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-decoration-line: underline;
color: #213F7D;
cursor: pointer;
`
const ProfileName = styled.p`
display: flex;
align-items: center;
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #213F7D;
cursor: pointer;
`
const MobileProfileContainer = styled.div`
@media screen and (min-width: 841px) {
  display: none;
}
`

function NavBar() {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElNavMini, setAnchorElNavMini] = useState<null | HTMLElement>(null);
  const [anchorElUserMini, setAnchorElUserMini] = useState<null | HTMLElement>(null);
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenNavMenuMini = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNavMini(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenUserMenuMini = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUserMini(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseNavMenuMini = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseUserMenuMini = () => {
    setAnchorElUserMini(null);
  };

  const navigate = useNavigate();   

  return (
    <StyledBox>
        <NavBarContainer>
        <LogoContainer onClick={() => navigate('/dashboard')}>
         <Logo src='../images/Union.svg' />
         <Logo src='../images/lendsqr.svg' />
        </LogoContainer>
        <SearchContainer>
          <Input type='search' />
          <SearchBtn><SearchIcon sx={{fontSize: 20, color: '#fff'}}/></SearchBtn>
        </SearchContainer>
        <RightContainer>
          <Docs>Docs</Docs>
         <NotificationsNoneIcon sx={{color: '#213F7D', marginLeft: '10px'}} />
        <Box sx={{ flexGrow: 0, marginLeft: '10px' }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar  />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px', }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
             <LogoutOutlinedIcon sx={{marginLeft: '5px', cursor: 'pointer'}} onClick={() => navigate('/')} />
        </Menu>
        </Box>
        <ProfileName style={{ marginLeft: '10px' }}>Adedeji<ArrowDropDownIcon /></ProfileName>
        </RightContainer>
        <MobileProfileContainer>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenuMini} sx={{ p: 0 }}>
              <Avatar  />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px', }}
            id="menu-appbar"
            anchorEl={anchorElUserMini}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUserMini)}
            onClose={handleCloseUserMenuMini}
          >
          <Docs style={{marginBottom: '10px', marginLeft: '5px'}}>Docs</Docs>
          <NotificationsNoneIcon sx={{color: '#213F7D', cursor: 'pointer'}} />
          <ProfileName style={{marginTop: 0, marginLeft: '5px'}}>Adedeji<ArrowDropDownIcon /></ProfileName>
          <LogoutOutlinedIcon sx={{marginLeft: '5px', cursor: 'pointer'}} onClick={() => navigate('/')} />
           </Menu>
        </Box>
        </MobileProfileContainer>
      </NavBarContainer>
    </StyledBox>
  )
}

export default NavBar