import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin";
import { useParams } from "react-router-dom";
import Modal from 'react-modal';
import swal from 'sweetalert';  
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileOpenIcon from '@mui/icons-material/FileOpen';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import Switch from '@mui/material/Switch';
import MaterialTable from 'material-table';
import Refresh from '@material-ui/icons/Refresh';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

 function JobInfo(props) {

  const [modalIsOpen,setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
  }
  const setModalIsOpenToFalse =()=>{
  setModalIsOpen(false)
  }
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#fff',
      border                : '1px solid #3333338c',
      width                 : '65%', 
      inset                 : '50% auto auto 52%',     
    }
  };
  const { id } = useParams();
  const [notes1, getNotes1] = useState([]);
  const [myId, setId] = useState(id);
  const [selectedClient,setSelectedClient] = useState();
  const url = "http://localhost:3001/getJobById";
  useEffect(() => {
    getAllNotes1(myId);
  }, [myId]);
 

  const getAllNotes1 = (id) => {
    axios
      .post(url, { id: id })
      .then((response) => {
         //console.log("Testing2____",response);
        const allNotes = response.data.payload.payload;
        getNotes1(allNotes["0"]);
        setSelectedClient(allNotes["0"].JobStatus);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };
   const okkkk = "mandeep";
  const JobId = id;
  const [user, setUser] = useState({
    JobId: JobId,
    Cv: "",
    FirstName:"",
    Email:"",
    LastName:"",
    Phone: "",
    City:""
  });
  const handleChanged = (e) => {
     //console.log("form_dataddd",e);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
 

// Job Ststes Changed onclcik to 
  const handleSelectChange = (event) =>{
    const SelStatus = event.target.value;
    if (SelStatus != "") {
      swal({
        title: "Are you sure?",
        text: "You Want To Change Job Status?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          axios
        .post("http://localhost:3001/updateJobStatus",{
            SelStatus: SelStatus,
            JobId: JobId
        })
        .then((res) => {
          if(res.data.status == true){
            setSelectedClient(SelStatus);
            
          }
          swal(res.data.message, {
            icon: "success",
          });
          
        })
        .catch((err) => {
          console.log("There was an error!", err);
        });
          
        } else {
          
        }
      });
      
    } else {
      toast.error("Invlid Input", {
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  //Get candidate info by job id
  const [CandidatesList, getCandidatesList] =useState([]);
  const urlCandidatesList = "http://localhost:3001/getCandidatesListByJobId";
   
    useEffect(() => {
      if(id !=''){
        axios
            .post(urlCandidatesList, { jobId: id })
            .then((response) => {
              
              const getList = response.data.payload.payload;
              console.log("After_res_______");
              getCandidatesList(getList);
              //setSelectedClient(allNotes2["0"].CandidateStatusByJob);
            })
            .catch((error) => console.log(`Error: ${error}`));
          }
    }, []);
  //End code !!!
  // Get Candidates list for model
  const columns = [
    { title: "First Name", field: "FirstName" },
    { title: "Last Name", field: "LastName" },
    { title: "Email", field: "Email" },
    { title: "Phone", field: "Phone" },
    { title: "City", field: 'City' },
    { title: "Locality", field: 'Locality' },
    { title: "Full Address", field: 'FullAddress' },
    { title: "Willing To Relocate", field: 'WillingToRelocate' },
    { title: "Qualification", field: 'Qualification' },
    { title: "Owner Name", field: 'OwnerName' }, 
   
  ]
  //console.log("data______000",rowData);
  const tableRef = React.createRef();
//Get compnay name
const [ notes2, getNotes2] = useState(
   []    
);
const [selectedRows, setSelectedRows] = useState([]);
const [ dltnotes, getdltNotes] = useState();
const [myId2, setId2] = useState(12);
const url4 = 'http://localhost:3001/getCandidateList';
useEffect(()=>{
    getAllNotes2(myId);
}, [myId]);

const getAllNotes2 = (id) =>{
    axios.post(url4,{userId:id})
    .then((response)=>{
        const allNotes2 = response.data.payload.payload;
        
        getNotes2(allNotes2);
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
              props.history.push("/candidatesList");
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
          props.history.push("/candidatesList");
        }, 2000);
      
    })
    .catch(error => console.log(`Error: ${error}`));

}

//Delete Multipal row
const handleBulkAssignJob = () => {

    const urldt = 'http://localhost:3001/assignJobToMultipleCandidates/';
    const updatedData = notes2.filter(row => selectedRows.includes(row))
    console.log("hshshs___",updatedData);
    const updt=updatedData.map((u) => u.candidateId);
    
      axios.post(urldt,{ids:updt,JobId:JobId})
        .then((response)=>{
          if(response != ''){
           //console.log("get222_______seleected___",response);
          toast.success("Job Assign To Candidates successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
          props.history.push("/jobInfo/"+ JobId);
           // window.location = "/jobInfo/"+ JobId;
        }, 2000);
      }else{
        toast.error("Something Is Wrong", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
      }
     })
    .catch(error => console.log(`Error: ${error}`));
   
  } 
  const btnSts  = selectedClient;
  
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
                        <h1 className="h3 mb-0 text-gray-800"></h1>
                      </div>
                      <div className="container">
                        
                      </div>

                      <div className="compny candiInfo">
                        <div className="container">
                          {/* <!-- Content Row --> */}
                          <div className="row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="media job-details-page-avatar">
                                            <div className="media-left">
                                                <div className="job-text-avatar bg-job">
                                                
                                                <i className="fas fa-user"></i>
                                                </div>
                                            </div>
                                           
                                            <div className="media-body details-page-media-body-inline-content">
                                                <div className="d-flex align-items-center">
                                                    <div className="inline-edit" data-hideuntilload="true">
                                                        <p><h2 id="sTest-jdJobNameTxt">{notes1.JobTitle}</h2> 
                                                        </p> 
                                                    </div> 
                                                    <div className="sts2">
                                                      <select className="form-select" aria-label="Default select example" value={selectedClient} onChange={handleSelectChange} >
                                                          <option value="Open">Open</option>
                                                          <option value="On Hold">On Hold</option>
                                                          <option value="Canceled">Canceled</option>
                                                          <option value="Closed">Closed</option>
                                                      </select>
                                                    </div>
                                                </div> 
                                                <div className="media-body-sub-text p-l-10">
                                                    <span className="m-r-15">
                                                    
                                                    <i class="fas fa-building" aria-hidden = "true"></i> {notes1.CompanyName}
                                                    </span>
                                                    <span className="m-r-15">
                                                    <i className="fas fa-map-marker-alt" aria-hidden = "true"></i>
                                                    {notes1.State},{notes1.Country}
                                                    </span>
                                                   
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="col-sm-3">
                                        <div className="p-20">
                                            <div className="d-flex align-items-center justify-content-flex-end">
                                                <label className="label m-r-10 m-b-0">Share On</label>
                                                    <ul className="social-links">
                                                    
                                                        <li>
                                                            <a id="sTest-jdShareOnFbBtn" target="_blank" href="#" className="facebook">
                                                                <i className="fab fa-facebook-f"></i>
                                                                
                                                            </a>
                                                        </li> 
                                                        <li>
                                                            <a id="sTest-jdShareOnTwitterBtn" target="_blank" href="#" className="twitter"> 
                                                            <i className="fab fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sTest-jdShareOnLinkedinBtn" target="_blank" href="#" className="linkedin">
                                                            <i className="fab fa-linkedin-in"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-sm-12 us4">
                               <span><b>JOB CONTACT(S)</b></span> 
                            </div>
                                  <div className="col-sm-12 mt-2">
                                      <div className="row">
                                          <div className="col-sm-3 clm2">
                                              <b>Note For Candidates</b><br />
                                              <b>Maximum Experience</b> <br />
                                              <b>More info</b><br />
                                              <b>Locality</b><br />
                                              <b>Salary Type</b><br />
                                              <b>Salary Range</b><br />
                                              <b>Educational Qualification</b><br />
                                              
                                          </div>
                                          <div className="col-sm-3 clm2">
                                              <p>Not available</p>
                                              <p>{notes1.MinExp}</p>
                                              <p>Not available</p>
                                              <p>{notes1.Locality}</p>
                                              <p>{notes1.SalaryType}</p>
                                              <p>{notes1.MinSalary} to {notes1.MaxSalary} </p>
                                              <p>{notes1.Qualification}</p>
                                          </div>
                                          <div className="col-sm-3 clm2">
                                              <b>Collaborator</b><br />
                                              <b>State</b><br />
                                              <b>Full Address</b><br />
                                              <b>Minimum Experience</b><br />
                                              <b>Number Of Openings</b><br />
                                              <b>Job Description</b><br />
                                              
                                          </div>
                                          <div className="col-sm-3 clm2">
                                              <p>Not available</p>
                                              <p>{notes1.State}</p>
                                              <p> {notes1.Address}</p>
                                              <p>{notes1.MinExp}</p>
                                              <p>{notes1.NoOfOpenings}</p>
                                              
                                            
                                          </div>
                                      </div>
                                      <div className="row">
                                            <div className="col-sm-3 clm2">
                                              <b>Educational Specialization</b><br />
                                            </div>
                                            <div className="col-sm-8 clm2">
                                              <p>{notes1.Specialization} </p>
                                            </div>
                                      </div>
                                      <div className="row">
                                            <div className="col-sm-12 clm2">
                                              <b>Job Description</b><br />
                                            </div>
                                            <div className="col-sm-12 clm2">
                                            <div dangerouslySetInnerHTML={{ __html: notes1.Jobdescription }}></div>
                                              
                                            </div>
                                      </div>

                                  </div>
                           
                              <div className="tbs">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                  <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="assigned_jobs-tab" data-bs-toggle="tab" data-bs-target="#assigned_jobs" type="button" role="tab" aria-controls="assigned_jobs" aria-selected="true">Candidates Pipeline</button>
                                  </li>
                                  
                                </ul>
                                <div className="tab-content pb-3" id="myTabContent">
                                    <div className="tab-pane fade show active mb-3" id="assigned_jobs" role="tabpanel" aria-labelledby="assigned_jobs-tab">
                                      <div className="col-sm-12 mt-3">
                                      <div class="container">
                                            
                                            <div class="row">
                                              <div class="col">
                                                
                                              </div>
                                              <div class="col">
                                               
                                              </div>
                                              <div class="col mb-3">
                                              {/* <Link class="btn btn-primary float-right" to="#"> View All Assigned Jobs</Link> */}
                                              {btnSts == 'Open' ? <button class="btn btn-success float-right mr-2" to="#" onClick={setModalIsOpenToTrue}> Assign Candidates</button> : <button class="btn btn-success float-right mr-2" to="#" disabled onClick={setModalIsOpenToTrue}> Assign Candidates</button> }
                                                {/* <Link class="btn btn-success float-right mr-2" to="#" onClick={setModalIsOpenToTrue}> Assign Candidates</Link> */}
                                              
                                              </div>
                                            </div>
                                            {Object.entries(CandidatesList).map((arr)=>{
                                              return <div class="row brd mb-1">
                                                <div class="col cad">
                                                    <div className="media job-details-page-avatar">
                                                        <div className="media-left">
                                                            <div className="job-text-avatar bg-job">
                                                            <i class="fas fa-user"></i>
                                                            </div>
                                                        </div>
                                                        <div className="media-body details-page-media-body-inline-content">
                                                            <div className="d-flex align-items-center">
                                                                <div className="inline-edit" data-hideuntilload="true">
                                                                    <p><h2 id="sTest-jdJobNameTxt">{arr[1].FirstName} {arr[1].LastName}</h2> 
                                                                    </p> 
                                                                </div> 
                                                            </div> 
                                                            <div className="media-body-sub-text p-l-10">
                                                                <span className="m-r-15">
                                                                {arr[1].Email}
                                                                </span>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col sts">
                                                <span class="m-l-10 text-overflow"><a href={arr[1].Resume} target="_blank"><FileOpenIcon src={arr[1].Resume} /></a></span>
                                                </div>
                                                <div class="col icn">
                                                <p class="m-r-5 has-text-light"><i className="fas fa-phone-volume"></i> {arr[1].Phone}</p>
                                                
                                                </div>
                                                <div class="col sts">
                                                <span class="rcrm-tag  m-l-10 text-overflow">{arr[1].JobApplicationType}</span>
                                                </div>
                                                <div class="col d-flex justify-content-center">
                                                  <MoreTimeIcon />  <Switch {...label} defaultChecked size="small" />
                                                </div>
                                              </div>
                                            })}
                                           
                                          </div>
                                      </div>
                                          
                                    </div>

                                    <div className="tab-pane fade" id="candidate_history" role="tabpanel" aria-labelledby="candidate_history-tab"> 
                                     
                                    </div>
                                    
                                </div>
                                  <div className="md">
                                    
                                    <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={(_, reason) => {
                                        if (reason !== "backdropClick") {
                                          setModalIsOpenToTrue();
                                        }
                                      }}>
                                      <button className="crosBTN" onClick={setModalIsOpenToFalse}>Close</button>
                                      <div  className= "popBox">
                                          <h5>Assign Candidate to Job</h5>
                                          <div className="col-sm-12 rsp">
                                         {/* <!-- Content Row --> */}
                                       
                                         <MaterialTable
                                            title="All Candidates List"
                                            columns={columns}
                                            data= {notes2}
                                            onSelectionChange={(rows) => setSelectedRows(rows)}
                                            editable={{
                                                // onRowUpdate: (newData, oldData) =>
                                                // new Promise((resolve, reject) => {
                                                //     handleRowUpdate(newData, oldData, resolve);
                                                    
                                                // }),
                                                // onRowDelete: (selectedRow) =>
                                                //     new Promise((resolve) => {
                                                //     handleRowDelete(selectedRow, resolve)
                                                // }),
                                            }}
                                            options={{
                                                actionsColumnIndex: -1, addRowPosition: "first",
                                                selection: true,
                                                
                                                  headerStyle: {
                                                    backgroundColor: '#eaeffb',
                                                    color: '#000'
                                                  }
                                              }}
                                              actions={[
                                                {
                                                  icon: 'delete',
                                                  tooltip: "Delete all selected rows",
                                                  //onClick: () => handleBulkDelete()
                                                   
                                                },{
                                                    icon: Refresh,
                                                    tooltip: 'Refresh Data',
                                                    isFreeAction: true,
                                                    onClick: () => tableRef.current && tableRef.current.onQueryChange()
                                                  }
                                              ]}
                                                  
                                            />
                                          
                                         {/* Content Row End*/}
                                        </div>
                                          
                                          <div className="canbtn mb-4">
                                            <button class="btn btn-success float-left mt-3" type="submit">Add New Job</button>
                                            <button class="btn btn-success float-right mt-3" type="submit" onClick={handleBulkAssignJob}>Assign</button>
                                          </div>
                                          </div>
                                      </Modal>
                                   </div>
                              </div>
                          </div>
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
  );
}
export default withRouter(JobInfo);
