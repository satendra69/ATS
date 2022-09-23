import React, {useState} from 'react';
import Modal from 'react-modal';
import Sidebar from "../Sidebar";
import { Link, withRouter } from "react-router-dom";
import FooterAdmin from "./FooterAdmin";
import TopBarAdmin from "./TopBarAdmin";
import SideBarAdmin from "./SideBarAdmin";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Allowed extensions for input file
const allowedExtensions = ["csv"];

 function AdminDashbord(props) {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [modalIsOpen2,setModalIsOpen2] = useState(false);
    const [modalIsOpen3,setModalIsOpen3] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToTrue2 =()=>{
        setModalIsOpen2(true)
    }
    const setModalIsOpenToTrue3 =()=>{
        setModalIsOpen3(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    const setModalIsOpenToFalse2 =()=>{
        setModalIsOpen2(false)
    }
    
    const setModalIsOpenToFalse3 =()=>{
        setModalIsOpen3(false)
    }
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
    const [file, setFile] = useState();
    const [file2, setFile2] = useState();
    const [file3, setFile3] = useState();
    
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleOnChange2 = (e) => {
    setFile2(e.target.files[0]);
  };
  const handleOnChange3 = (e) => {
    setFile3(e.target.files[0]);
    console.log("neha___",setFile2);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
        const formData = new FormData();
        formData.append("file", file);
      axios
      .post("http://localhost:3001/addCompanyCsvFile", formData)
      .then((res) => {
        //console.log("error__", res.data.payload);
        toast.success("Company Impport successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            props.history.push("/companylist");
           
        }, 2000);
        
      })
      
      .catch((err) => {
        console.log("There was an error!", err);
      });
     
    }
  };

//   Company contact add api
const handleOnSubmit2 = (e) => {
    e.preventDefault();

    if (file2) {
        const formData = new FormData();
        formData.append("file", file2);
      axios
      .post("http://localhost:3001/addContactCsvFile", formData)
      .then((res) => {
        console.log("error__", res.data.payload);
        toast.success("Company Contact Impport successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            props.history.push("/contactlist");
        }, 2000);
        
      })
      .catch((err) => {
        console.log("There was an error!", err);
      });
     
    }
  };
  //   Company contact add api
const handleOnSubmit3 = (e) => {
    e.preventDefault();

    if (file3) {
        const formData = new FormData();
        formData.append("file", file3);
      axios
      .post("http://localhost:3001/addCandidateCsvFile", formData)
      .then((res) => {
        console.log("error__", res);
        toast.success("Candidate Impport successfully!", {
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
        }, 4000);
        
      })
      .catch((err) => {
        console.log("There was an error!", err);
      });
     
    }
  };
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
                                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                              
                                        </div>
                                         {/* <!-- Content Row --> */}
                                         <div className="row dash_brd">
                                            <div className="col-sm-3"><i class="fas fa-building"></i><p onClick={setModalIsOpenToTrue}> Import Companies</p></div>
                                            <div className="col-sm-3"><i class="fas fa-address-book"></i><p onClick={setModalIsOpenToTrue2}> Import Contacts</p></div>
                                            <div className="col-sm-3"><i class="fas fa-users"></i><p onClick={setModalIsOpenToTrue3}> Import Candidate</p></div>
                                            {/* <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button> */}

                                            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                                                    <button className="crosBTN" onClick={setModalIsOpenToFalse}>x</button>
                                                    <div  className= "popBox" style={{ textAlign: "center" }}>
                                                        <h4> Import Companies</h4>
                                                        <p>Choose a CSV or XLS (Excel) file to import</p>
                                                        <form>
                                                            <input
                                                            type={"file"}
                                                            id={"csvFileInput"}
                                                            accept={".csv"}
                                                            onChange={handleOnChange}
                                                            />

                                                            <button
                                                            onClick={(e) => {
                                                                handleOnSubmit(e);
                                                            }}
                                                            >
                                                            IMPORT CSV
                                                            </button>
                                                        </form>

                                                        <br />

                                                        
                                                        </div>
                                            </Modal>
                                            {/* Contact add for compny */}
                                            <Modal isOpen={modalIsOpen2} style={customStyles} onRequestClose={()=> setModalIsOpen2(false)}>
                                                    <button className="crosBTN" onClick={setModalIsOpenToFalse2}>x</button>
                                                    <div  className= "popBox" style={{ textAlign: "center" }}>
                                                        <h4> Import Companies Contact</h4>
                                                        <p>Choose a CSV or XLS (Excel) file to import</p>
                                                        <form>
                                                            <input
                                                            type={"file"}
                                                            id={"csvFileInput"}
                                                            accept={".csv"}
                                                            onChange={handleOnChange2}
                                                            />

                                                            <button
                                                            onClick={(e) => {
                                                                handleOnSubmit2(e);
                                                            }}
                                                            >
                                                            IMPORT CSV
                                                            </button>
                                                        </form>

                                                        <br />

                                                        
                                                        </div>
                                            </Modal>
                                            {/* Candidate emport */}
                                            <Modal isOpen={modalIsOpen3} style={customStyles} onRequestClose={()=> setModalIsOpen3(false)}>
                                                    <button className="crosBTN" onClick={setModalIsOpenToFalse3}>x</button>
                                                    <div  className= "popBox" style={{ textAlign: "center" }}>
                                                        <h4> Import Candidate Contact</h4>
                                                        <p>Choose a CSV or XLS (Excel) file to import</p>
                                                        <form>
                                                            <input
                                                            type={"file"}
                                                            id={"csvFileInput"}
                                                            accept={".csv"}
                                                            onChange={handleOnChange3}
                                                            />

                                                            <button
                                                            onClick={(e) => {
                                                                handleOnSubmit3(e);
                                                            }}
                                                            >
                                                            IMPORT CSV
                                                            </button>
                                                        </form>

                                                        <br />

                                                        
                                                        </div>
                                            </Modal>
                                            
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
export default withRouter(AdminDashbord);
