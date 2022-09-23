import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin";
import swal from "sweetalert";
import { useLocation } from "react-router-dom";
import MaterialTable from 'material-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ContactList(props) {
  const UserId = localStorage.getItem("id");
  const UserRole = localStorage.getItem("UserRole");
  const columns = [
    { title: "FirstName", field: "FirstName" },
    { title: "LastName", field: "LastName" },
    { title: "Title", field: "Title" },
    { title: "Email", field: "Email" },
    { title: "Phone", field: "Phone" },
    { title: "City", field: "City" },
    { title: "Facebook URL", field: "FacebookURL" },
    { title: "Twitter URL", field: "TwitterURL" },
    { title: "Linkedin URL", field: "LinkedInURL" },
    { title: "Stage", field: "Stage" },
    { title: "Added BY", field: "OwnerName" },
   
  ]
   
  //Get compnay name
  const [notes, getNotes] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [ dltnotes, getdltNotes] = useState();
  const [myId, setId] = useState(12);
  const url = "http://localhost:3001/getContactList/";
  useEffect(() => {
    getAllNotes(myId);
  }, [myId]);

  const getAllNotes = (id) => {
    axios
      .post(url, { userId: id })
      .then((response) => {
        console.log("ssshh111",response);
        const allNotes = response.data.payload.payload;
        getNotes(allNotes);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  //Update Records
  const handleRowUpdate = (newData, oldData, resolve,reject) => {
   console.log("newData___",newData);
    if(newData != ''){
        axios.post("http://localhost:3001/updateContactById", newData)
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
               //props.history.push("/contactlist");
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
// Delete Contac list
const urldlt = "http://localhost:3001/deleteContactById/";
const handleRowDelete = (selectedRow, resolve) => {
    const upId = selectedRow.ContactId ;
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
           // props.history.push("/contactlist");
        }, 2000);
      
    })
    .catch(error => console.log(`Error: ${error}`));

}
//Delete Multipal row
const handleBulkDelete = () => {

  const urldt = 'http://localhost:3001/deleteAllContactsById/';
  const updatedData = notes.filter(row => selectedRows.includes(row))
  const updt=updatedData.map((u) => u.CompanyId);
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
         // props.history.push("/contactlist");
          
      }, 2000);
    
  })
  .catch(error => console.log(`Error: ${error}`));
     getdltNotes(updatedData);
 // getdltNotes(JSON.stringify(updatedData));
   

 
}

  return (
    <>
      {/*<div className="container adm"> */}
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
                        <h1 className="h3 mb-0 text-gray-800">Contact List</h1>
                      </div>

                      <div className="compny">
                        {/* <!-- Content Row --> */}

                        <div className="col-sm-12 rsp">
                          {/* check if role is admin */}
                          {(() => {
                            if (UserRole == 0) {
                              return (
                                <div>
                                  <MaterialTable
                                    title ="All Contact List"
                                    columns = {columns}
                                    data = {notes}
                                    onSelectionChange = {(rows) => setSelectedRows(rows)}
                                    
                                    editable = {{
                                      
                                        onRowUpdate: (newData, oldData) =>
                                        new Promise((resolve, reject) => {
                                            handleRowUpdate(newData, oldData, resolve);
                                            
                                        }),
                                        onRowDelete: (selectedRow) =>
                                            new Promise((resolve) => {
                                            handleRowDelete(selectedRow, resolve)
                                        }),
                                    }}
                                    options = {{
                                        actionsColumnIndex: -1, addRowPosition: "first",
                                        selection: true,
                                        
                                            headerStyle: {
                                              backgroundColor: '#eaeffb',
                                              color: '#000'
                                            },
                                            loadingType: 'none'
                                      }}
                                      actions = {[
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
                                    title ="All Contact List"
                                    columns = {columns}
                                    data = {notes}
                                    onSelectionChange = {(rows) => setSelectedRows(rows)}
                                    
                                    editable = {{
                                      isEditable: oldData => oldData.OwnerId == UserId,
                                        onRowUpdate: (newData, oldData) =>
                                        new Promise((resolve, reject) => {
                                            handleRowUpdate(newData, oldData, resolve);
                                            
                                        })
                                        
                                    }}
                                    options = {{
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
                                    title ="All Contact List"
                                    columns = {columns}
                                    data = {notes}
                                    onSelectionChange = {(rows) => setSelectedRows(rows)}
                                    
                                    options = {{
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
                        </div>
                        {/* Content Row End*/}
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
  );
}
export default withRouter(ContactList);