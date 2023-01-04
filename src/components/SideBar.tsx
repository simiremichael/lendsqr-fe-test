import React from 'react'
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import RoomPreferencesOutlinedIcon from '@mui/icons-material/RoomPreferencesOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

const SideBarContainer = styled.div`

`
const NavItems = styled.li`
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #213F7D;
list-style-type: none;
text-align: left;
margin-bottom: 15px;
`
const SwitchBtn = styled.button`
border: none;
background: transparent;
display: flex;
align-items: center;
justify-content: start;
padding-left: 0;
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #213F7D;
margin-bottom: 18px;
`
const StyledNavLink = styled(NavLink)`
text-decoration: none;
display: flex;
align-items: center;
justify-content: start;
color: #213F7D;
:active{
background: #39CDCC;
opacity: 0.06;
}
`
const Customer = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #545F7D;
text-align: left;
margin-top: 25px;
`
const Business = styled(Customer)``
const Settings = styled(Customer)``


function SideBar() {

  return (
    <SideBarContainer>
    <SwitchBtn><BusinessCenterOutlinedIcon sx={{marginRight: '5px', fontSize: '15px'}} />Switch organisation<ArrowDropDownIcon /></SwitchBtn>
  <NavItems><StyledNavLink to='/dashboard'><HomeOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />DashBoard</StyledNavLink></NavItems>
   <Customer>CUSTOMERS</Customer>
   <NavItems><StyledNavLink to='/users'><PeopleOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Users</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><GroupsOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Guarantors</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><AddCardOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Loans</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><HandshakeOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Decision Models</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><SavingsOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Savings</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><RequestPageOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Loan requests</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><PersonAddAlt1OutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Whitelist</StyledNavLink></NavItems>
  <NavItems><StyledNavLink to=''><LockPersonOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Karma</StyledNavLink></NavItems>
   <Business>BUSINESSES</Business>
   <NavItems><StyledNavLink to=''><BusinessCenterOutlinedIcon sx={{marginRight: '5px', fontSize: '15px'}} />Organization</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><RequestPageOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Loan Products</StyledNavLink></NavItems>
  <NavItems><StyledNavLink to=''><SavingsOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Savings Products</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><MonetizationOnOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Fees and Charges</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><ReceiptOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Transactions</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><DesignServicesOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Servives</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><AccountBalanceWalletOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Service Account</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><ReceiptLongOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Settlements</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><ReportOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Reports</StyledNavLink></NavItems>
   <Settings>SETTINGSS</Settings>
   <NavItems><StyledNavLink to=''><RoomPreferencesOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Refrences</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><PriceChangeOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Fees and Pricing</StyledNavLink></NavItems>
   <NavItems><StyledNavLink to=''><EventNoteOutlinedIcon sx={{marginRight: '5px', fontSize: '18px'}} />Audit Logs</StyledNavLink></NavItems>
   </SideBarContainer>

  )
}

export default SideBar