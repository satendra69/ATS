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

 function JobsList(props) {
    const UserRole = localStorage.getItem("UserRole");
    const UserId = localStorage.getItem("id");
    const columns = [

        { title: "Job Title", field: "JobTitle",render: rowData => <Link className="btn btn-outline-primary mr-2 wid" to={`/jobInfo/${rowData.Id}`} >{rowData.JobTitle} </Link> },
        { title: "Company Name", field: "CompanyName" },
        { title: "No Of Openings", field: "NoOfOpenings" },
        { title: "Min Exp", field: "MinExp" },
        { title: "Max Exp", field: "MaxExp" },
        { title: "Salary Type", field: 'SalaryType' },
        { title: "Currency", field: 'Currency' },
        { title: "MinSalary", field: 'MinSalary' },
        { title: "MaxSalary", field: 'MaxSalary' },
        { title: "City", field: 'City' },
        { title: "Locality", field: 'Locality' },
        { title: "State", field: 'State' },
        { title: "Country", field: 'Country' },
        { title: "Jobdescription", field: 'Jobdescription',render: rowData => <Link className="btn btn-outline-primary mr-2 wid" to={`/jobListInfo/${rowData.Id}/Jobdescription`} >Read More </Link> },
        { title: "Qualification", field: 'Qualification',render: rowData => <Link className="btn btn-outline-primary mr-2 wid" to={`/jobListInfo/${rowData.Id}/Qualification`} >Read More </Link> },
        { title: "Specialization", field: 'Specialization',render: rowData => <Link className="btn btn-outline-primary mr-2 wid" to={`/jobListInfo/${rowData.Id}/Speciali`} >Read More </Link> },
        { title: "Address", field: 'Address',render: rowData => <Link className="btn btn-outline-primary mr-2 wid" to={`/jobListInfo/${rowData.Id}/addres`} >Read More </Link>},
        { title: "Added BY", field: 'FirstName' },

        
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
           console.log("CompanyList______",allNotes);
            getNotes(allNotes);
        })
        .catch(error => console.log(`Error: ${error}`));
    }
    //Update Records
    const handleRowUpdate = (newData, oldData, resolve,reject) => {
       console.log("Job____",newData);
        if(newData!=''){

            axios.post("http://localhost:3001/updateJobById", newData)
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
                    //props.history.push("/Jobs");
                    
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
 // Delete job list
    const urldlt = 'http://localhost:3001/deleteJobById/';
    const handleRowDelete = (selectedRow, resolve) => {
        const upId = selectedRow.Id;
         axios.post(urldlt,{ids:upId})
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
                //props.history.push("/Jobs");
            }, 2000);
          
        })
        .catch(error => console.log(`Error: ${error}`));

    }
    //Delete Multipal row
    const handleBulkDelete = () => {

        const urldt = 'http://localhost:3001/deleteAllJobsById/';
        const updatedData = notes.filter(row => selectedRows.includes(row))
        const updt=updatedData.map((u) => u.Id);
           axios.post(urldt,{ids:updt})
           .then((response)=>{
            //console.log("delete_____",response);
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
                //props.history.push("/Jobs");
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
                                             <h1 className="h3 mb-0 text-gray-800">Jobs List</h1>
                                                <div className="col-md-10 bg-light text-right">
                                                <Link className="btn btn-success" to="/AddJobs"> <i className="fas fa-plus-circle"></i> Add Job</Link>
                                                <Link className="btn btn-primary ml-2" to="/jobPageInfo">Jobs Page <i class="fas fa-info-circle"></i></Link>
                                                </div>
                                        </div>
                                        <div className="row">
        
                                        </div>
                                        <div className="compny">
                                        <div className="col-sm-12 rsp">
                                         {/* <!-- Content Row --> */}
                                         {(() => {
                                            if (UserRole == 0) {
                                            return (
                                                <div>
                                                    <MaterialTable
                                                        title="All Jobs List"
                                                        columns={columns}
                                                        data= {notes}
                                                        onSelectionChange={(rows) => setSelectedRows(rows)}
                                                        editable={{
                                                            // onRowAdd: (addjob) =>
                                                            //     new Promise((resolve, reject) => {

                                                            //         handleRowAdd(addjob, resolve);
                                                            // }),
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
                                                            loadingType: 'none'
                                                        }}
                                                        actions={[
                                                            {
                                                            icon: 'delete',
                                                            tooltip: "Delete all selected rows",
                                                            onClick: () => handleBulkDelete()
                                                            
                                                            }
                                                        ]}
                                                            
                                                        />
                                                </div>
                                            )
                                            } else if (UserRole == 1 || UserRole == 2) {
                                            return (
                                                <div>
                                                    <MaterialTable
                                                        title="All Jobs List"
                                                        columns={columns}
                                                        data= {notes}
                                                        onSelectionChange={(rows) => setSelectedRows(rows)}
                                                        editable={{
                                                            isEditable: oldData => oldData.OwnerId == UserId,
                                                            // onRowAdd: (addjob) =>
                                                            //     new Promise((resolve, reject) => {

                                                            //         handleRowAdd(addjob, resolve);
                                                            // }),
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
                                                        title="All Jobs List"
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
export default withRouter(JobsList);
