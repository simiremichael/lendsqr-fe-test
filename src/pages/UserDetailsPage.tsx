import React, { useEffect } from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import NavBar from '../components/NavBar';
import { Avatar, Divider, Grid } from '@mui/material';
import SideBar from '../components/SideBar';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUserQuery } from '../api/api'
import { selectCurrentUserDetails, setUserDetails } from '../features/userDetailsSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const StyledBox = styled(Box)`
width: auto;
height: 100%;
padding-left: 2%;
padding-right: 2%;
`
const BodyContainer = styled.div`

`
const MainContainer = styled.div`
background-color: #E5E5E5;
width: 100%;
height: 100%;
margin-bottom: 30px;
@media screen and (max-width: 1100px) {
  overflow-x: scroll;
}
`
const MainInnerContainer = styled.div`
width: 100%;
@media screen and (max-width: 1100px) {
  width: calc(780px + 18%);
}
`
const BackToUserpage = styled.p`
display: flex;
align-items: center;
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #545F7D;
cursor: pointer;
padding: 50px 0 0 3%;
`
const InnerUserDetails = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 3% 0 3%;
`
const InnerUserDetailsRightContainer = styled.div``
const InnerUserDetailsLeftContainer = styled.div``

const UserDetails = styled.h2`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
color: #213F7D;
`
const BlacklistBtn = styled.button`
border: 1px solid #E4033B;
border-radius: 8px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #E4033B;
padding: 8px 12px;
cursor: pointer;
`
const ActivateBtn = styled.button`
border: 1px solid #39CDCC;
border-radius: 8px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #39CDCC;
padding: 8px 12px;
margin-left: 15px;
cursor: pointer;
`
const TopDetailsContainer = styled.div`
padding: 0 3% 0 3%;
background: #FFFFFF;
border: 1px solid rgba(33, 63, 125, 0.06);
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
border-radius: 4px;
`
const Name = styled.h3`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 26px;
color: #213F7D;
margin-bottom: 5px;
`
const NameCode = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #545F7D;
margin: 0;
`
const UserTier = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #545F7D;

`
const LoanAmount = styled.h4`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 26px;
color: #213F7D;
margin-top: 25px;
`
const BankAccount = styled.p`

`
const GeneralDetails = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #39CDCC;
border-bottom: 1px solid #39CDCC;
`
const Documents = styled.p`
font-family: 'SF Compact Text';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: rgba(0, 0, 0, 0.8);
`
const BankDetails = styled.p`
font-family: 'SF Compact Text';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: rgba(0, 0, 0, 0.8);
`
const Loans = styled.p`
font-family: 'SF Compact Text';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: rgba(0, 0, 0, 0.8);
`
const Savings = styled.p`
font-family: 'SF Compact Text';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: rgba(0, 0, 0, 0.8);
`
const AppAndSystem = styled.p`
font-family: 'SF Compact Text';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: rgba(0, 0, 0, 0.8);
`
const PersonalInfoContainer = styled.div`
padding: 0 3% 0 3%;
background: #FFFFFF;
border: 1px solid rgba(33, 63, 125, 0.06);
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
border-radius: 4px;
margin-top: 20px;
`
const PersonalInfoTitle = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
text-transform: uppercase;
color: #545F7D;
`
const PersonalInfoContent = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #545F7D;
`
const PersonalInfo = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #213F7D;
`


function UserDetailsPage() {

  let { userId } = useParams();
  const { data, isFetching, isLoading } = useGetUserQuery(userId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(data){
      dispatch(setUserDetails({ userDetails: data}));
    }
    }, [dispatch, data])

    const {userDetails} = useAppSelector(selectCurrentUserDetails);

  console.log(userDetails);

  return (
    <StyledBox>
      <NavBar />
      <BodyContainer>
      <Grid container spacing={2}>
        <Grid item lg={2} md={2} sm={3} xs={4}>
         <SideBar />
        </Grid>
        <Grid item lg={10} md={10} sm={9} xs={8}>
        <MainContainer>
         <MainInnerContainer>
        <BackToUserpage onClick={() => navigate('/users')}><KeyboardBackspaceOutlinedIcon sx={{fontSize: '22px', marginRight: '10px'}} /> Back to Users</BackToUserpage>
        <InnerUserDetails>
         <InnerUserDetailsLeftContainer>
         <UserDetails>User Details</UserDetails>
         </InnerUserDetailsLeftContainer>
         <InnerUserDetailsRightContainer>
        <BlacklistBtn>Blacklist User</BlacklistBtn>
        <ActivateBtn>Activate User</ActivateBtn>
         </InnerUserDetailsRightContainer>
        </InnerUserDetails>
        <TopDetailsContainer>
        <Grid container spacing={2}>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            {/* @ts-ignore:next-line */}  
          <Avatar alt="Remy Sharp" src={userDetails?.profile?.avatar} sx={{ width: 56, height: 56, marginTop: '15px' }}/>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            {/* @ts-ignore:next-line */}  
            <Name>{userDetails?.profile?.firstName} {userDetails?.profile?.lastName}</Name>
            <NameCode>{userDetails?.accountNumber}</NameCode>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <UserTier style={{marginTop: '30px'}}>User's Tier</UserTier>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            {/* @ts-ignore:next-line */}  
            <LoanAmount>{userDetails?.profile?.currency}{userDetails?.accountBalance}</LoanAmount>
            <BankAccount></BankAccount>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
           
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={2} md={2} sm={2} xs={2}>
          <GeneralDetails>General Details</GeneralDetails>
         </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
          <Documents>Documents</Documents>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
          <BankDetails>Bank Details</BankDetails>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Loans>Loans</Loans>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Savings>Savings</Savings>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <AppAndSystem> App and System</AppAndSystem>
          </Grid>
        </Grid>
        </TopDetailsContainer>
        <PersonalInfoContainer>
          <PersonalInfo>Personal Information</PersonalInfo>
        <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={3}>
         <PersonalInfoTitle>Full Name</PersonalInfoTitle>
         {/* @ts-ignore:next-line */}  
         <PersonalInfoContent>{userDetails?.profile?.firstName} {userDetails?.profile?.lastName}</PersonalInfoContent>
         </Grid>
         <Grid item lg={2.4} md={2.4} sm={2.4} xs={2.4}>
          <PersonalInfoTitle>Phone Number</PersonalInfoTitle>
          {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.profile?.phoneNumber}</PersonalInfoContent>
          </Grid>
          <Grid item lg={3.2} md={3.2} sm={3.2} xs={3.2}>
          <PersonalInfoTitle>Email Address</PersonalInfoTitle>
         <PersonalInfoContent>{userDetails?.email}</PersonalInfoContent>
          </Grid>
          <Grid item lg={1.7} md={1.7} sm={1.7} xs={1.7}>
          <PersonalInfoTitle> BVN</PersonalInfoTitle>
          {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.profile?.bvn}</PersonalInfoContent>
          </Grid>
          <Grid item lg={1.7} md={1.7} sm={1.7} xs={1.7}>
          <PersonalInfoTitle>Gender</PersonalInfoTitle>
          {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.profile?.gender}</PersonalInfoContent>
          </Grid>
        </Grid>
        <Divider sx={{marginTop: '10px', marginBottom: '10px'}} />
        <PersonalInfo>Education and Employement</PersonalInfo>
        <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={3}>
         <PersonalInfoTitle>Level of Education</PersonalInfoTitle>
           {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.education?.level}</PersonalInfoContent>
         </Grid>
         <Grid item lg={2.4} md={2.4} sm={2.4} xs={2.4}>
          <PersonalInfoTitle>Employment Status</PersonalInfoTitle>
            {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.education?.employmentStatus}</PersonalInfoContent>
          </Grid>
          <Grid item lg={3.2} md={3.2} sm={3.2} xs={3.2}>
          <PersonalInfoTitle>Sector of Employment</PersonalInfoTitle>
            {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.education?.sector}</PersonalInfoContent>
          </Grid>
          <Grid item lg={1.7} md={1.7} sm={1.7} xs={1.7}>
          <PersonalInfoTitle>Duration</PersonalInfoTitle>
            {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.education?.duration}</PersonalInfoContent>
          </Grid>
          <Grid item lg={1.7} md={1.7} sm={1.7} xs={1.7}>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
         <PersonalInfoTitle>Office Email</PersonalInfoTitle>
           {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.education?.officeEmail}</PersonalInfoContent>
         </Grid>
         <Grid item lg={2.4} md={2.4} sm={2.4} xs={2.4}>
          <PersonalInfoTitle>Monthly Income</PersonalInfoTitle>
            {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.education?.monthlyIncome}</PersonalInfoContent>
          </Grid>
          <Grid item lg={3.2} md={3.2} sm={3.2} xs={3.2}>
          <PersonalInfoTitle>Loan</PersonalInfoTitle>
            {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.education?.loanRepayment}</PersonalInfoContent>
          </Grid>
          <Grid item lg={1.7} md={1.7} sm={1.7} xs={1.7}>
          </Grid>
          <Grid item lg={1.7} md={1.7} sm={1.7} xs={1.7}>
          </Grid>
        </Grid>
        <Divider sx={{marginTop: '10px', marginBottom: '10px'}} />
        <PersonalInfo>Socials</PersonalInfo>
        <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={3}>
         <PersonalInfoTitle>Twitter</PersonalInfoTitle>
         {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.socials?.twitter}</PersonalInfoContent>
         </Grid>
         <Grid item lg={2.4} md={2.4} sm={2.4} xs={2.4}>
          <PersonalInfoTitle>Facebook</PersonalInfoTitle>
          {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.socials?.facebook}</PersonalInfoContent>
          </Grid>
          <Grid item lg={3.2} md={3.2} sm={3.2} xs={3.2}>
          <PersonalInfoTitle>Instagram</PersonalInfoTitle>
          {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.socials?.instagram}</PersonalInfoContent>
          </Grid>
          <Grid item lg={1.7} md={1.7} sm={1.7} xs={1.7}>
          </Grid>
          <Grid item lg={1.7} md={1.7} sm={1.7} xs={1.7}>
          </Grid>
        </Grid>
        <Divider sx={{marginTop: '10px', marginBottom: '10px'}} />
        <PersonalInfo>Guarantor</PersonalInfo>
        <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={3}>
         <PersonalInfoTitle>Full Name</PersonalInfoTitle>
          {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.guarantor?.firstName} {userDetails?.guarantor?.lastName}</PersonalInfoContent>
         </Grid>
         <Grid item lg={2.4} md={2.4} sm={2.4} xs={2.4}>
          <PersonalInfoTitle>Phone Number</PersonalInfoTitle>
           {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.guarantor?.phoneNumber}</PersonalInfoContent>
          </Grid>
          <Grid item lg={3.2} md={3.2} sm={3.2} xs={3.2}>
          <PersonalInfoTitle>Email Address</PersonalInfoTitle>
          {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.guarantor?.email}</PersonalInfoContent>
          </Grid>
          <Grid item lg={1.7} md={1.7} sm={1.7} xs={1.7}>
          <PersonalInfoTitle>Relationship</PersonalInfoTitle>
          {/* @ts-ignore:next-line */} 
         <PersonalInfoContent>{userDetails?.guarantor?.relationship}</PersonalInfoContent>
          </Grid>
          <Grid item lg={1.7} md={1.7} sm={1.7} xs={1.7}>
          </Grid>
        </Grid>
        </PersonalInfoContainer>
        </MainInnerContainer>
        </MainContainer>
        </Grid>
        </Grid>
        </BodyContainer>
    </StyledBox>
  )
}

export default UserDetailsPage