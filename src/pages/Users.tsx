import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Grid} from '@mui/material';
import NavBar from '../components/NavBar';
import { Link} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { useGetUsersQuery } from '../api/api'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCurrentUser, setUsers } from '../features/userSlice';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Paginate from '../components/Pagination';
import SideBar from '../components/SideBar';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

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

`
const MainInnerContainer = styled.div`
padding: 3%;
`
const MainTitle = styled.h1`
text-align: left;
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
color: #213F7D;
margin-bottom: 30px;
`
const Card = styled.div`
background: #FFFFFF;
border: 1px solid rgba(33, 63, 125, 0.06);
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
border-radius: 4px;
height: 160px;
`
const CardIconContainer = styled.div`
width: 30px;
height: 30px;
background: rgba(223, 24, 255, 0.2);
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
margin: 20px 0 0 20px;

`
const CardTitle = styled.p`
text-align: left;
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
text-transform: uppercase;
color: #545F7D;
margin-left: 20px;
`
const CardFigure = styled.h2`
text-align: left;
font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
text-transform: uppercase;
color: #213F7D;
margin-left: 20px;
`
const TableContainer = styled.div`
overflow-x: scroll;
`
const Thead = styled.thead`
width: 100%;
height: 40px;
`
const Tbody = styled.tbody`
height: 140px;
`
const Tables = styled.table`
width: 100%;
border-collapse: collapse;
margin: 20px 0;
background-color: #fff;
`
const Tr = styled.tr`
`
const Th = styled.th`
margin: 0;
font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 12px;
text-align: start;
line-height: 14px;
text-transform: uppercase;
color: #545F7D;
padding: 15px 0 15px 15px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #545F7D;
`
const Td = styled.td`
font-size: 0.9rem;
border-bottom: 1px solid rgba(33, 63, 125, 0.1);
text-align: left;
vertical-align: center;
color: #494949;
padding: 15px 0 15px 15px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #545F7D;
position: relative;
`
const PaginationContainer = styled.div`
background: inherit; 
width: 100%; 
margin-top: 10px; 
margin-bottom: 2px; 
display: flex; 
justify-content: space-between;
@media screen and (max-width: 840px) {
  flex-direction: column-reverse;
}
`
const ShowingContainer = styled.div`
`
const Showing = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #545F7D;
display: flex;
align-items: center;
`
const Span = styled.span`
display: flex;
align-items: center;
background-color: #c4c4c4;
padding: 2px 8px;
margin: 0 10px;
`
const FilterContainer = styled.div`
position: absolute;
width: 100%;
z-index: 10001;
margin-top: -600px;
`
const InnerFilterContainer = styled.div`
display: flex;
flex-direction: column;
background: #fff;
padding: 0 5px 10px 5px;
margin: 0 25px 0 10px;
border: 1px solid rgba(84, 95, 125, 0.14);
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
border-radius: 4px;
`
const Input = styled.input`
width: 100%;
background: #FFFFFF;
opacity: 0.2;
border: 1px solid #213F7D;
border-radius: 8px;
box-sizing: border-box;
height: 40px;
`
const Select = styled.select`
width: 100%;
background: #FFFFFF;
opacity: 0.2;
border: 1px solid #213F7D;
border-radius: 8px;
box-sizing: border-box;
height: 40px;
`
const Option = styled.option`

`
const Label = styled.label`
text-align: left;
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #545F7D;
margin: 17px 0 5px 0;
`
const ButonContainer = styled.div`
margin-top: 20px;
`
const ResetBtn = styled.button`
background: #FFFFFF;
border: 1px solid rgba(84, 95, 125, 0.14);
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
border-radius: 4px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
color: #545F7D;
padding: 10px 18px;
border: 1px solid #545F7D;
border-radius: 8px;
cursor: pointer;
`
const FilterBtn = styled(ResetBtn)`
background: #39CDCC;
border: 1px solid #39CDCC;
color: #FFFFFF;
margin-left: 15px;
`
const StyledLink = styled(Link)`
text-decoration: none;
`
const ViewDetailsContainer = styled.div`
background: #ffffff;
position: absolute;
z-index: 10001;
margin-left: -120px;
margin-top: 50px;
border: 1px solid rgba(84, 95, 125, 0.04);
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
border-radius: 4px;
padding: 0 5px;
`
const ViewBtn = styled.button`
width: auto;
padding: 0;
border: none;
background: transparent;
margin-right: 15px;
cursor: pointer;
`
const ViewDetails = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #545F7D;
cursor: pointer;
display: flex;
align-items: center;
`
const Blacklist = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #545F7D;
display: flex;
align-items: center;
cursor: pointer;
`
const Activate = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #545F7D;
display: flex;
align-items: center;
cursor: pointer;
`
const SideBarToggleContainer = styled.div`
@media screen and (min-width: 841px) {
  display: none;
}
`
const MaxWidthSideBarToggleContainer = styled(Grid)`
@media screen and (max-width: 840px) {
  display: none;
}
`

function Users() {

  const [filterToggle, setFilterToggle] = useState(false)
  const [sidebar, setSidebar] = useState(false);
  const { data, isFetching, isLoading } = useGetUsersQuery();
  const [view, setView] = useState<any>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
  if(data){
    dispatch(setUsers({ user: data}));
  }
  }, [dispatch, data])

  const {user} = useAppSelector(selectCurrentUser);
  const usersPerPage = 10
  const [pageNumber, setPageNumber] = useState({showing: usersPerPage, pageCount: 0, from: 0, to: usersPerPage});

const handleView = (userId: any) => {
const showUser = view.slice();

const  index = showUser.indexOf(userId);
if(index >= 0) {
  showUser.splice(index, 1);
  setView(showUser);
} else {
  showUser.push(userId);
  setView(showUser);
}
}
  {/* @ts-ignore:next-line */}  
  const displayUsers = user?.slice(pageNumber.from, pageNumber.to)
  .map((result: any) =>  { 
    return (
  <Tr key={result?.id}>
  <Td>{result?.orgName}</Td>
  <Td>{result?.userName}</Td>
  <Td>{result?.email}</Td>        
  <Td>{result?.phoneNumber}</Td>
  <Td>{result?.createdAt}</Td>
  <Td></Td>
  <Td><ViewBtn onClick={() => handleView(result?.id)}><MoreVertOutlinedIcon /></ViewBtn></Td>
  
  {view.includes(result?.id) && (
  <Td><ViewDetailsContainer>
    <StyledLink to={`/userDetails/${result.id}`}>
    <ViewDetails><VisibilityOutlinedIcon sx={{color: '#545F7D',fontSize: '18px', marginRight: '5px'}}/> View Details</ViewDetails>
    </StyledLink>
    <Blacklist><ManageAccountsOutlinedIcon sx={{color: '#545F7D',fontSize: '18px', marginRight: '5px'}} /> Blacklist User</Blacklist>
    <Activate><PersonAddAltOutlinedIcon sx={{color: '#545F7D',fontSize: '18px', marginRight: '5px'}} /> Activate User</Activate>
  </ViewDetailsContainer></Td>
  )}
  </Tr>
    );
  });
{/* @ts-ignore:next-line */} 
  const pageCount = Math.ceil(user?.length / usersPerPage);

 const handleToggle = () => {
setFilterToggle(!filterToggle);
 }

  return (
    <StyledBox>
    <NavBar />
    <SideBarToggleContainer>
    <MenuOutlinedIcon sx={{cursor: 'pointer', marginBottom: '15px'}} onClick={() => setSidebar(!sidebar)}/>
    </SideBarToggleContainer>
    <BodyContainer>
      <Grid container spacing={2}>
        {sidebar && (
        <Grid item lg={2} md={2} sm={3} xs={4}>
         <SideBar />
        </Grid>
        )}
        <MaxWidthSideBarToggleContainer item lg={2} md={2} sm={3} xs={4}>
         <SideBar />
        </MaxWidthSideBarToggleContainer>
        {/* @ts-ignore:next-line */}  
        <Grid item lg={innerWidth >= 841 || sidebar ? 10 : 12} md={innerWidth >= 841 || sidebar ? 10 : 12} sm={innerWidth >= 841 || sidebar ? 9 : 12} xs={innerWidth >= 841 || sidebar ? 8 : 12}>
          <MainContainer>
            <MainInnerContainer>
            <MainTitle>Users</MainTitle>
           <Grid container spacing={2}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
             <Card>
              <CardIconContainer><PeopleOutlinedIcon sx={{color: '#DF18FF', fontSize: '16px'}} /></CardIconContainer>
              <CardTitle>Users</CardTitle>
              {/* @ts-ignore:next-line */} 
              <CardFigure>{user?.length}</CardFigure>
             </Card>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Card>
              <CardIconContainer style={{backgroundColor: 'rgba(87, 24, 255, 0.2)'}}><GroupsOutlinedIcon sx={{color: '#5718FF', fontSize: '16px'}} /></CardIconContainer>
              <CardTitle>Active Users</CardTitle>
              <CardFigure>2,453</CardFigure>
             </Card>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card>
            <CardIconContainer style={{backgroundColor: 'rgba(245, 95, 68, 0.2)'}}><GradingOutlinedIcon sx={{color: '#F55F44', fontSize: '16px'}} /></CardIconContainer>
              <CardTitle>Users with loans</CardTitle>
              <CardFigure>12,453</CardFigure>
            </Card>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card>
            <CardIconContainer style={{backgroundColor: 'rgba(255, 51, 102, 0.2)'}}><SavingsOutlinedIcon  sx={{color: '#FF3366', fontSize: '16px'}} /></CardIconContainer>
              <CardTitle>Users with savings</CardTitle>
              <CardFigure>102,453</CardFigure>
            </Card>
            </Grid>
           </Grid>
           <TableContainer>
           <Tables>
         <Thead>
        <Tr>
           <Th>Organization <FilterListOutlinedIcon onClick={handleToggle} sx={{fontSize: '15px', color: ' #545F7D', marginBottom: '-2.5px', cursor: 'pointer'}}/></Th>
           <Th>Usersname <FilterListOutlinedIcon sx={{fontSize: '15px', color: ' #545F7D', marginBottom: '-2.5px'}} /></Th>
           <Th>Email <FilterListOutlinedIcon sx={{fontSize: '15px', color: ' #545F7D', marginBottom: '-2.5px'}} /></Th>
           <Th>Phone Number <FilterListOutlinedIcon sx={{fontSize: '15px', color: ' #545F7D', marginBottom: '-2.5px'}} /></Th>
           <Th>Date Joined <FilterListOutlinedIcon sx={{fontSize: '15px', color: ' #545F7D', marginBottom: '-2.5px'}} /></Th>
           <Th>Status <FilterListOutlinedIcon sx={{fontSize: '15px', color: ' #545F7D', marginBottom: '-2.5px'}} /></Th>
           <Th></Th>
        </Tr>
        </Thead>
        <Tbody>  
          {/* @ts-ignore:next-line */}  
        { displayUsers }
        </Tbody>
       </Tables>
       {filterToggle &&  (
       <FilterContainer>
        <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={6}>
          <InnerFilterContainer>
          <Label>Organization</Label>
          <Select>
            <Option>1</Option>
            <Option>2</Option>
          </Select>
          <Label>UserName</Label>
        <Input type='text' />
        <Label>Email</Label>
        <Input type='email' />
        <Label>Date</Label>
        <Input type='date' />
        <Label>Phone Number</Label>
        <Input type='number' />
        <Label>Status</Label>
        <Select>
            <Option>1</Option>
            <Option>2</Option>
          </Select>
          <ButonContainer>
            <ResetBtn>Reset</ResetBtn>
            <FilterBtn>Filter</FilterBtn>
          </ButonContainer>
          </InnerFilterContainer>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={0}>

        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={0}>

        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={0}>

        </Grid>
        </Grid>
       </FilterContainer>
       )}
       <PaginationContainer>
        <ShowingContainer>
            {/* @ts-ignore:next-line */}  
        <Showing>showing <Span>{pageNumber.showing} <ArrowDropDownIcon sx={{ margin: 0, paddingBottom: '-40px'}} /></Span> out of {user?.length}</Showing>
        </ShowingContainer>
      <Paginate  pageNumber={pageNumber} pageCount={pageCount}
      usersPerPage={usersPerPage} setPageNumber={setPageNumber}
      />
      </PaginationContainer>
      </TableContainer>
           </MainInnerContainer>
          </MainContainer>
        </Grid>
      </Grid>
    </BodyContainer>
    </StyledBox>
  )
}

export default Users
