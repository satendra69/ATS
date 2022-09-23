import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 function ApplyJob(props) {
  const { id } = useParams();

  const [notes, getNotes] = useState([]);
  const [myId, setId] = useState(id);

  const url = "http://localhost:3001/getJobDescById";
  useEffect(() => {
    getAllNotes(myId);
  }, [myId]);

  const getAllNotes = (id) => {
    axios
      .post(url, { id: id })
      .then((response) => {
        const allNotes = response.data.payload.payload;
        getNotes(allNotes["0"]);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };
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
 
  //img upload code start
  var Cv = "";
  const handleChange = (e) => {
    const fl = e.target.files[0];
    const formData = new FormData();
    formData.append("file", fl);
    if (JobId != "") {
      
      //console.log("INSERT___",formData);
      axios
        .post("http://localhost:3001/submitJobApplicationResume", formData)
        .then((res) => {
          //console.log("error__", res.data.payload);
          const msg = res.data.payload;
          Cv = "http://localhost:3001/uploads/Resume/"+msg;
          setUser( p =>({...p, Cv:Cv}))
          //console.log("kkkk____",Cv)
          
        })
        
        .catch((err) => {
          console.log("There was an error!", err);
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
  };
  // End img code here!
 
//console.log("test___1",Cv);

  const handleChanged = (e) => {
     //console.log("form_dataddd",e);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    //console.log("imgTest2",Cv);
    const { JobId, FirstName, LastName, Email, Phone, City, Cv } = user

    if (JobId != "") {
      //console.log("INSERT___",formData);
      axios
        .post("http://localhost:3001/submitJobApplication", user)
        .then((res) => {
          console.log("error__",res);
          toast.success("Job Successfully Applied !", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          });
          setTimeout(() => {
            props.history.push("/jobPageInfo");
          }, 4000);
        })
        .catch((err) => {
           console.log('There was an error!', err);
          // this.setState({ errorMessage: error.message });
          toast.error(err.data.message, {
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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
  };
 
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
                        <div className="row">
                          <div className="col-sm-8">
                            <div className="d-flex align-items-center ">
                              <div className="d-flex align-items-center m-b-1">
                                <h3 className="color-black m-b-0">
                                  {notes.JobTitle}
                                </h3>
                              </div>
                            </div>
                            <p id="sTest-JobCity" className="m-b-0 ">
                              <i
                                className="fas fa-map-marker-alt"
                                aria-hidden="true"
                              ></i>
                              {notes.Country} <span>({notes.City})</span>
                            </p>
                            <p
                              id="sTest-JobDescription"
                              className="jd-p-description"
                            ></p>
                          </div>
                          <div className="col-sm-4">
                            <div className="container">
                              <div className="col-md-12 bg-light text-right">
                                <Link
                                  to={`/jobDes/${id}`}
                                  className="btn btn-light sec"
                                >
                                  View Job Description
                                </Link>
                              </div>
                              <div className="row">
                                <div className="col-md-12 bg-light text-right mb-4">
                                  <p>Share This Job</p>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    <i className="fab fa-linkedin-in"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-warning ml-2"
                                  >
                                    <i className="fab fa-twitter"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-warning ml-2"
                                  >
                                    <i className="fab fa-facebook-f"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="compny">
                        <div className="container">
                          {/* <!-- Content Row --> */}
                          <div className="row">
                            <div className="col-sm-10">
                              <div className="row">
                                <div className="col-sm-3">
                                  <h4>Personal Information</h4>
                                  <span>Your Name & Contact Information</span>
                                </div>
                                <div className="col-sm-9">
                                  <div>
                                  { console.log("job_apply___", user) }
                                    <form>
                                      <div className="row">
                                        <div className="col-md-6 mb-3">
                                          <label>First Name</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="FirstName"
                                            value={user.FirstName} onChange={ handleChanged }
                                          ></input>
                                          <input
                                            type="hidden"
                                            className="form-control"
                                            id="ghgh"
                                          ></input>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                          <label>Last Name</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="LastName"
                                            value={user.LastName} onChange={ handleChanged }
                                          ></input>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6 mb-3">
                                          <label>Email</label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            name="Email"
                                            value={user.Email} onChange={ handleChanged }
                                          ></input>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                          <label>Phone </label>
                                          <input
                                            type="number"
                                            className="form-control"
                                            name="Phone"
                                            value={user.Phone} onChange={ handleChanged }
                                          ></input>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6 mb-3">
                                          <label>City</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="City"
                                            value={user.City} onChange={ handleChanged }
                                          ></input>
                                        </div>
                                      </div>
                                      <div className="form-group mb-3">
                                        <label for="exampleFormControlFile1">
                                          Resume
                                        </label>
                                        <input
                                          type="file"
                                          className="form-control-file"
                                          id="exampleFormControlFile1"
                                          onChange={handleChange}
                                        />
                                        {/* <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(e) => setImage(e.target.files[0])} /> */}
                                      </div>
                                      <div className="mb-3">
                                        <div className="chk">
                                          <input
                                            className="t"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck1"
                                          />
                                          <label
                                            className="form-check-label"
                                            For="defaultCheck1"
                                          >
                                            I agree to Candidate Terms
                                          </label>
                                        </div>
                                        <div className="col-sm pt-3 btn">
                                          <div className="button3">
                                            <button
                                              type="button"
                                              className="btn btn-primary"
                                              onClick={register}
                                            >
                                              Submit Your Application
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
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
  );
}
export default withRouter(ApplyJob);