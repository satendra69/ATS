import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin";
import swal from 'sweetalert';  
import {useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function JobDescription() {
    const { id } = useParams();
    const [ notes, getNotes] = useState(
        []    
     );
    const [myId, setId] = useState(id);
    
    const url = 'http://localhost:3001/getJobDescById';
    useEffect(()=>{
        getAllNotes(myId);
    }, [myId]);

    const getAllNotes = (id) =>{
        axios.post(url,{id:id})
        .then((response)=>{
           //console.log("PPPPOOOOO____",response);
            const allNotes = response.data.payload.payload;
            getNotes(allNotes['0']);
        })
        .catch(error => console.log(`Error: ${error}`));
    }
  // console.log("KKKKKK___",notes);
   
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
                                                <h1 className="h3 mb-0 text-gray-800"></h1>
                                                
                                        </div>
                                        <div class="container">

                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="d-flex align-items-center ">
                                                    
                                                    <div className="d-flex align-items-center m-b-1">
                                                    <h3 className="color-black m-b-0">{notes.JobTitle}</h3> 
                                                    </div>
                                                    
                                                    </div> 
                                                    <p id="sTest-JobCity" className="m-b-0 ">
                                                    <i className="fas fa-map-marker-alt" aria-hidden = "true"></i>
                                                    {notes.Country} <span>({notes.City})</span></p> 
                                                    <p id="sTest-JobDescription" className="jd-p-description"></p>
                                                
                                                </div> 
                                                <div className="col-sm-4">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col-md-12 bg-light text-right mb-4">
                                                                <p>Share This Job</p>
                                                                <button type="button" class="btn btn-primary"><i class="fab fa-linkedin-in"></i></button>
                                                                <button type="button" class="btn btn-warning ml-2"><i class="fab fa-twitter"></i></button>
                                                                <button type="button" class="btn btn-warning ml-2"><i class="fab fa-facebook-f"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 bg-light text-right">
                                                    <Link to="/jobPageInfo" class="btn btn-dark">Close</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="compny">
                                        <div class="container">
                                         {/* <!-- Content Row --> */}
                                            <div className="row">
                                            <div className="col-sm-9">
                                                <p className="p-description">{notes.Jobdescription}</p>
                                                <div className="text-center">
                                                    <Link to={`/ApplyJob/${id}`} className="btn btn-primary">Apply To This Job</Link>
                                                </div>
                                                
                                            </div>  
                                            
                                            </div>  
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
