import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, withRouter } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin"; 
import MaterialTable from 'material-table';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 function CompanyList(props) {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const UserRole = localStorage.getItem("UserRole");
    const UserId = localStorage.getItem("id");
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    const columns = [
        { title: "Name", field: "CompanyName"},
        { title: "Industry", field: "Industry" },
        { title: "City", field: "City" },
        { title: "Website", field: 'Website' },
        { title: "Facebook URL", field: 'FacebookURL' },
        { title: "Linkedin URL", field: 'LinkedInURL' },
        { title: "Twitter URL", field: 'TwitterURL' },
        { title: "Address", field: "Address",render: rowData => <Link className="btn btn-outline-primary mr-2 wid" to={`/CompanyInfo/${rowData.CompanyId}/addres`} >Read More </Link> },  
        { title: "About", field: 'About',render: rowData => <Link className="btn btn-outline-primary mr-2 wid" to={`/CompanyInfo/${rowData.CompanyId}/about`} >Read More </Link> },
      ]
    
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : 'rgb(148 138 133 / 52%)',
          border                : '1px solid #3333338c'      
        }
    };
    //Get compnay name
    const [ notes, getNotes] = useState(
       []    
    );
    
    const [selectedRows, setSelectedRows] = useState([]);
    const [ dltnotes, getdltNotes] = useState();
    const [myId, setId] = useState(12);
    const url = 'http://localhost:3001/getCompanyList';
    useEffect(()=>{
        getAllNotes(myId);
      
    }, [myId]);
    const getAllNotes = (id) =>{
        axios.post(url,{userId:id})
        .then((response)=>{
            const allNotes = response.data.payload.payload;
            getNotes(allNotes);
        })
        .catch(error => console.log(`Error: ${error}`));
    }
   
    //Update Records
    const handleRowUpdate = (newData, oldData, resolve,reject) => {
    
        if(newData!=''){

            axios.post("http://localhost:3001/updateCompanyById", newData)
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
                }, 2000);
                
            })
            .catch(e => console.log("Error",e));
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
 
 // Delete Contac list
    const urldlt = 'http://localhost:3001/deleteCompanyById/';
    const handleRowDelete = (selectedRow, resolve) => {
        const upId = selectedRow.CompanyId;
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
            }, 2000);
          
        })
        .catch(error => console.log(`Error: ${error}`));

    }
    //Delete Multipal row
    const handleBulkDelete = () => {
        const urldt = 'http://localhost:3001/deleteAllCompanysById/';
        const updatedData = notes.filter(row => selectedRows.includes(row))
        console.log("dat____",updatedData);
        const updt=updatedData.map((u) => u.CompanyId);
           axios.post(urldt,{ids:updt})
           .then((response)=>{
            console.log("delete_____",response);
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
               // props.history.push("/companylist");
            }, 2000);
          
        })
        .catch(error => console.log(`Error: ${error}`));
           getdltNotes(updatedData); 
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
                                             <h1 className="h3 mb-0 text-gray-800">Company List</h1>
                                               
                                        </div>
                                        
                                        <div className="compny">
                                        <div className="col-sm-12 rsp">
                                         {/* <!-- Content Row -->  OwnerId */}
                                         {(() => {
                                            if (UserRole == 0) {
                                            return (
                                                <div>
                                                    <MaterialTable
                                                    title="All Company  List"
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
                                            } else if (UserRole == 1 || UserRole == 2 ) {
                                                //&& UserId == notes.OwnerId
                                            return (
                                                <div>
                                                    <MaterialTable
                                                    title="All Company  List"
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
                                                    // actions={[
                                                    //     {
                                                    //     icon: 'delete',
                                                    //     tooltip: "Delete all selected rows",
                                                    //     onClick: () => handleBulkDelete()
                                                        
                                                    //     }
                                                    // ]}    
                                                    />
                                                </div>
                                            )
                                            } else {
                                            return (
                                                <div>
                                                     <MaterialTable
                                                    title="All Company  List"
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
                        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                                                    <button className="crosBTN" onClick={setModalIsOpenToFalse}>x</button>
                                                    <div  className= "popBox" style={{ textAlign: "center" }}>
                                                        <h4> Import Companies</h4>
                                                        <p>Choose a CSV or XLS (Excel) file to import</p>
                                                        
                                                       
                                                        
                                                        </div>
                                            </Modal>
                                
                    </div> 
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    )
}
export default withRouter(CompanyList);
