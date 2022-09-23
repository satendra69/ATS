import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, withRouter } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin";
import {useLocation} from "react-router-dom";
import MaterialTable from 'material-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Refresh from '@material-ui/icons/Refresh';
import FileOpenIcon from '@mui/icons-material/FileOpen';


 function CandidatesList(props) {
    const UserRole = localStorage.getItem("UserRole");
    const UserId = localStorage.getItem("id");
    const columns = [
        { title: "First Name", field: "FirstName", render: rowData => <Link className="btn btn-outline-primary mr-2 wid" to={`/candidatesInfo/${rowData.candidateId}`} >{rowData.FirstName} </Link> },
        { title: "Last Name", field: "LastName" },
        { title: "Email", field: "Email" },
        { title: "Phone", field: "Phone" },
        { title: "City", field: 'City' },
        { title: "Locality", field: 'Locality' },
        // { title: "Full Address", field: 'FullAddress' },
        { title: "Willing To Relocate", field: 'WillingToRelocate' },
        // { title: "Qualification", field: 'Qualification' },
        // { title: "Specialization", field: 'Specialization' },
        { title: "Current Organization", field: 'CurrentOrganization' },
        { title: "Title", field: 'Title' },
        { title: "Total Experience", field: 'TotalExperience' },
        { title: "Relevant Experience", field: 'RelevantExperience' },
        { title: "Currency Type", field: 'CurrencyType' },
        { title: "Current Salary", field: 'CurrentSalary' },
        { title: "Salary Expectation", field: 'SalaryExpectation' },
        { title: "Current Employment Status", field: 'CurrentEmploymentStatus' },
        { title: "Notice Period", field: 'NoticePeriod' },
        { title: "Available From", field: 'AvailableFrom' },
        { title: "Resume", field: 'Resume', render: rowData => <a href={rowData.Resume} target="_blank"><FileOpenIcon src={rowData.Resume} /></a> }, 
        { title: "Skills", field: 'Skills' },
        { title: "Language Skills", field: 'LanguageSkills' },
        { title: "Proficiency Level", field: 'ProficiencyLevel' },
        { title: "Facebook URL", field: 'FacebookURL' },
        { title: "Twitter URL", field: 'TwitterURL' },
        { title: "LinkedIn URL", field: 'LinkedInURL' },
        { title: "GitHub URL", field: 'GitHubURL' },
        { title: "Source", field: 'Source' },
        { title: "Added BY", field: 'OwnerName' },
      ]
      //console.log("data______000",rowData);
      const tableRef = React.createRef();
    //Get compnay name
    const [ notes, getNotes] = useState(
       []    
    );
    const [selectedRows, setSelectedRows] = useState([]);
    const [ dltnotes, getdltNotes] = useState();
    const [myId, setId] = useState(12);
    const url = 'http://localhost:3001/getCandidateList';
    useEffect(()=>{
        getAllNotes(myId);
    }, [myId]);

    const getAllNotes = (id) =>{
        axios.post(url,{userId:id})
        .then((response)=>{
            const allNotes = response.data.payload.payload;
           // console.log("all_candidates___",allNotes);
            getNotes(allNotes);
        })
        .catch(error => console.log(`Error: ${error}`));
    }
    //Update Records
    const handleRowUpdate = (newData, oldData, resolve,reject) => {
        if(newData!=''){

            axios.post("http://localhost:3001/updateCandidateById", newData)
            .then( res => {
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    getAllNotes(myId);
                    //props.history.push("/candidatesList");
                  
                }, 2000);
            })
        }else{
            toast.error("Invalid Input", {
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    
        }
        
    }
 // Delete Candidate list
    const urldlt = 'http://localhost:3001/deleteCandidateById/';
    const handleRowDelete = (selectedRow, resolve) => {
        const upId = selectedRow.candidateId;
         axios.post(urldlt,{id:upId})
        .then((response)=>{

            toast.success("Record Deleted successfully!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                getAllNotes(myId);
                //props.history.push("/candidatesList");
               
            }, 2000);
          
        })
        .catch(error => console.log(`Error: ${error}`));

    }
    //Delete Multipal row
    const handleBulkDelete = () => {

        const urldt = 'http://localhost:3001/deleteAllCandidatesById/';
        const updatedData = notes.filter(row => selectedRows.includes(row))
        
        const updt=updatedData.map((u) => u.candidateId);
           axios.post(urldt,{ids:updt})
           .then((response)=>{
           
            toast.success("Record Deleted successfully!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                getAllNotes(myId);
                //props.history.push("/candidatesList");
                
            }, 2000);
          
        })
        .catch(error => console.log(`Error: ${error}`));
           getdltNotes(updatedData);
       // getdltNotes(JSON.stringify(updatedData));
       
      }
      

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
                                             <h1 className="h3 mb-0 text-gray-800">Candidate List</h1>
                                                <div className="col-md-10 bg-light text-right">
                                                    <Link className="btn btn-success" to="/addcondidates"> <i className="fas fa-plus-circle"></i> Add Candidate</Link>
                                                    {/* <Link class="btn btn-primary ml-2" to="/jobPageInfo">Jobs Page <i class="fas fa-info-circle"></i></Link> */}
                                                </div>
                                        </div>
                                        <div className="row">
        
                                        </div>
                                        <div className="compny">
                                        <div className="col-sm-12 rsp">
                                         {/* <!-- Content Row --> */}
                                         {(() => {
                                            if (UserRole == "0") {
                                            return (
                                                <div>
                                                    <MaterialTable
                                                        title="All Candidates List"
                                                        columns={columns}
                                                        data= {notes}
                                                        onSelectionChange={(rows) => setSelectedRows(rows)}
                                                        editable={{
                                                            onRowUpdate: (newData, oldData) =>
                                                            new Promise((resolve, reject) => {
                                                                handleRowUpdate(newData, oldData, resolve);
                                                                
                                                            }),
                                                            onRowDelete: (selectedRow) =>
                                                                new Promise((resolve) => {
                                                                handleRowDelete(selectedRow, resolve)
                                                            }),
                                                        }}
                                                        options={{
                                                            actionsColumnIndex: -1, addRowPosition: "first",
                                                            selection: true,
                                                            
                                                            headerStyle: {
                                                                backgroundColor: '#eaeffb',
                                                                color: '#000'
                                                            },
                                                            loadingType: 'none',
                                                            
                                                        }}
                                                        actions={[
                                                            {
                                                            icon: 'delete',
                                                            tooltip: "Delete all selected rows",
                                                            onClick: () => handleBulkDelete()
                                                            
                                                            },{
                                                                icon: Refresh,
                                                                tooltip: 'Refresh Data',
                                                                isFreeAction: true,
                                                                onClick: () => tableRef.current && tableRef.current.onQueryChange()
                                                            }
                                                        ]}
                                                            
                                                        />
                                                </div>
                                            )
                                            } else if (UserRole == 1 || UserRole == 2) {
                                            return (
                                                <div>
                                                    <MaterialTable
                                                        title="All Candidates List"
                                                        columns={columns}
                                                        data= {notes}
                                                        onSelectionChange={(rows) => setSelectedRows(rows)}
                                                        editable={{
                                                            isEditable: oldData => oldData.OwnerId == UserId,
                                                            onRowUpdate: (newData, oldData) =>
                                                            new Promise((resolve, reject) => {
                                                                handleRowUpdate(newData, oldData, resolve);
                                                                
                                                            })
                                                        }}
                                                        options={{
                                                            actionsColumnIndex: -1, addRowPosition: "first",
                                                            selection: true,
                                                            
                                                            headerStyle: {
                                                                backgroundColor: '#eaeffb',
                                                                color: '#000'
                                                            },
                                                            loadingType: 'none'
                                                        }}
                                                            
                                                        />
                                                </div>
                                            )
                                            } else {
                                            return (
                                                <div>
                                                    <MaterialTable
                                                        title="All Candidates List"
                                                        columns={columns}
                                                        data= {notes}
                                                        onSelectionChange={(rows) => setSelectedRows(rows)}
                                                       
                                                        options={{
                                                            actionsColumnIndex: -1, addRowPosition: "first",
                                                            selection: true,
                                                            
                                                            headerStyle: {
                                                                backgroundColor: '#eaeffb',
                                                                color: '#000'
                                                            },
                                                            loadingType: 'none'
                                                        }}
                                                            
                                                        />
                                                </div>
                                            )
                                            }
                                        })()}                                       
                                         {/* Content Row End*/}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            {/* <!-- End of Content Wrapper --> */}
                        </div>
                        
                         {/* <!-- Footer --> */}
                         <FooterAdmin />
                                {/*<!-- End of Footer --> */}       
                    </div> 
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    )
}
export default withRouter(CandidatesList);