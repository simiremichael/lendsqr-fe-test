import React from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function Paginate(props: {pageNumber: any, pageCount: any, usersPerPage: any, setPageNumber: any}) {

const pageNumber = props.pageNumber  
const pageCount = props.pageCount  
const usersPerPage = props.usersPerPage
const setPageNumber = props.setPageNumber 

const handlePagination = (e: any, p: any) => {
const from =  (p - 1) * usersPerPage
const to = from + usersPerPage
const showing = usersPerPage * p
setPageNumber({...pageNumber, from: from, to: to, showing: showing})

}
  return (
    <Pagination 
    count={pageNumber.pageCount = pageCount || 1}
    onChange={handlePagination}
    variant="outlined" 
    color='primary'
     />        
  )
}

export default Paginate


