import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin";
import swal from 'sweetalert';  
import {useLocation} from "react-router-dom";
import MaterialTable from 'material-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "bootstrap";
import TablePagination from '@material-ui/core/TablePagination';
import TextField from "@mui/material/TextField";
import {
  makeStyles,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
    stuListColor: {
     backgroundColor: orange[400],
     color: "white"
    },
    tableHeadCell: {
     color: "white",
     fontWeight: "bold",
     fontSize: 16
    },
   })

export default function JobPageInfo() {
    const classes = useStyles();
    const columns = [
        { title: "JobTitle", field: "JobTitle" },
        { title: "City", field: 'City' },
        { title: "Locality", field: 'Locality' },
        { title: "State", field: 'State' },
        { title: "Country", field: 'Country' },

        
      ]
    //Get compnay name
    const [ notes, getNotes] = useState(
       []    
    );
    const [selectedRows, setSelectedRows] = useState([]);
    const [ dltnotes, getdltNotes] = useState();
    const [myId, setId] = useState(12);
    const url = 'http://localhost:3001/getJobsList';
    useEffect(()=>{
        getAllNotes(myId);
    }, [myId]);

    const getAllNotes = (id) =>{
        axios.post(url,{userId:id})
        .then((response)=>{
            const allNotes = response.data.payload.payload;
           // console.log("sasad___",allNotes);
            getNotes(allNotes);
        })
        .catch(error => console.log(`Error: ${error}`));
    }
    // Search 
    const [query, setQuery] = useState("")
    //Pagination code
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);
 
   const handleChangePage = (event, newPage) => {
     setPage(newPage);
   };
 
   const handleChangeRowsPerPage = (event) => {
     setRowsPerPage(parseInt(event.target.value, 10));
     setPage(0);
   };
   const emptyRows = rowsPerPage - Math.min(rowsPerPage, notes.length - page * rowsPerPage);
    
    return (
        <>
       { /*<div className="container adm"> */ }
        <div className="adm">
            <div className="mb-3">
                <div className="row" id="main">
                    <div id="page-top">
                        <div id="wrapper">
                            
                            {/*sidebar component*/}
                            <SideBarAdmin />
                            {/*End sidebar component*/}
                          
                            {/*  <!-- Content Wrapper --> */}
                            <div id="content-wrapper" className="d-flex flex-column">
                                <div id="content">

                                    {/* <!-- Topbar component--> */}
                                       <TopBarAdmin />
                                    {/*  <!-- End of Topbar --> */}

                                    <div className="container-fluid">
                                        {/*  <!-- Page Heading --> */}
                                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                             <h1 className="h3 mb-0 text-gray-800">Jobs Page</h1>
                                             
                                                
                                        </div>
                                        <div class="row">
                                        
                                       
                                        </div>
                                        <div className="compny">
                                            
                                        {/* <input placeholder="Search Jobs" onChange={event => setQuery(event.target.value)} /> */}
                                        <input type="text" class="form-control bg-light border-0 small jbpg" placeholder="Search Jobs..." aria-label="Search" aria-describedby="basic-addon2" onChange={event => setQuery(event.target.value)}></input>
                                        <div className="col-sm-12 rsp">
                                       
                                         {/* <!-- Content Row --> */}
                                         

                                            <TableContainer component={Paper} className={classes.container} >
                                                
                                                <Table stickyHeader aria-label="sticky table">
                                                    <TableHead>
                                                    <TableRow hover role="checkbox">
                                                        
                                                    </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                   
                                                    {notes.filter(notes => {
                                                        if (query === '') {
                                                        return notes;
                                                        } else if (notes.JobTitle.toLowerCase().includes(query.toLowerCase())) {
                                                        return notes;
                                                        }
                                                    })
                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((notes, index) => (
                                                            
                                                        <TableRow key={notes.name} hover role="checkbox">
                                                            
                                                            <div className="columns jb">
                                                            <div className="column is-9 p-25">
                                                                <div className="d-flex align-items-center ">
                                                                
                                                                <div className="d-flex align-items-center m-b-1">
                                                                <h3 className="color-black m-b-0"><Link to={`/jobDes/${notes.Id}`}>{notes.JobTitle}</Link></h3> 
                                                                </div>
                                                                
                                                                </div> 
                                                                <p id="sTest-JobCity" className="m-b-0 ">
                                                                <i className="fas fa-map-marker-alt" aria-hidden = "true"></i>
                                                                {notes.Country} <span>({notes.City})</span></p> 
                                                                <p id="sTest-JobDescription" className="jd-p-description"></p>
                                                            </div> 
                                                            
                                                        </div>
                                                        
                                                            <TableCell align="right" className="mr-2">
                                                                
                                                                    <Link className="btn btn-outline-primary mr-2" to={`/ApplyJob/${notes.Id}`}>
                                                                    Apply To This Job</Link>
                                                                
                                                                
                                                                
                                                                <Link className="btn btn-outline-primary mr-2" to={`/jobDes/${notes.Id}`} > View Job Description </Link>
                                                                
                                                            </TableCell>
                                                            
                                                        </TableRow>
                                                    ))}
                                                    
                                                    </TableBody>
                                                </Table>

                                                <TablePagination
                                                    rowsPerPageOptions={[2,5,10,25,100]}
                                                    component="div"
                                                    count={notes.length}
                                                    rowsPerPage={rowsPerPage}
                                                    page={page}
                                                    onPageChange={handleChangePage}
                                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                                    />
                                            </TableContainer>
                                          
                                         {/* Content Row End*/}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* <!-- Footer --> */}
                                    <FooterAdmin />
                                {/*<!-- End of Footer --> */}
                            </div>
                            
                            {/* <!-- End of Content Wrapper --> */}
                        </div>
                        
                                
                    </div> 
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    )
}
