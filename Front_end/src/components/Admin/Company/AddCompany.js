import React, { useState, useEffect  } from "react"
import axios from "axios"
import { Link, withRouter } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin";
import swal from 'sweetalert';  
import {useLocation} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


 function AddCompany(props) {
  const OwnerId = localStorage.getItem("id");
  const [ user, setUser] = useState({
    companyName:"",
    OwnerId     : OwnerId,
    industryName:"",
    websiteName:"",
    cityName:"",
    aboutCompny:"",
    fullAddress:"",
    fbUrl:"",
    twtUrl:"",
    linkdin_url:""
})
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const handleChange = e => {
    //console.log("form_data",e);
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    });
}
const styleObj = {
    marginTop: "5px"
}
const AdComny = (e) => {
    
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
   
    const { companyName, OwnerId, industryName, websiteName,cityName,aboutCompny,fullAddress,fbUrl,twtUrl,linkdin_url } = user
        if( companyName && industryName && websiteName && cityName && aboutCompny && fullAddress ){
            axios.post("http://localhost:3001/addCompany", user)
            .then( res => {
               // console.log("Add_company_____",res);
                toast.success("Company Added Successfully", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                 setTimeout(() => {
                   props.history.push("/companylist");
                   // window.location = "/companylist";
                }, 4000);
 
            }).catch(err => {
                console.log('There was an error!', err.response.data.message);
               // this.setState({ errorMessage: error.message });
               toast.error(err.response.data.message, {
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            });
        } else {
            toast.error("Please fill in all the required fields!", {
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            //alert("invlid input")
        }
        
    
    
}
useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
     
    }
  }, [formErrors]);
const validate =(values)=>{
  const errors = {};
  if (!values.companyName) {
    errors.companyName = "Company Name is required!";
  }
  if (!values.industryName) {
    errors.industryName = "Industry Name is required!";
  }
  if (!values.websiteName) {
    errors.websiteName = "website Name is required!";
  }
  if (!values.cityName) {
    errors.cityName = "city Name is required!";
  }
  if (!values.aboutCompny) {
    
    errors.aboutCompny = "About Compny is required!";
  }
  if (!values.fullAddress) {
   
    errors.fullAddress = "Full Address is required!";
  }
  return errors;
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
                                                <h1 className="h3 mb-0 text-gray-800">Add Company</h1>
                                                
                                        </div>
                                        <div className="compny">
                                         {/* <!-- Content Row --> */}
                                         <h5>Company Detalis</h5>
                                            <div className="col-sm-9 rsp">
                                           
                                                {/* console.log("User", user) */}
                                                <div className="row">
                                                    <div className="col">
                                                        <label>Company Name</label>
                                                        
                                                        <input type="text" className="form-control" name="companyName" value={user.companyName} onChange={ handleChange } placeholder="BMW" ></input>
                                                        <p className="erromsg">{formErrors.companyName}</p>
                                                    </div>
                                                    
                                                    <div className="col">
                                                        <label>Industry </label>
                                                        <input type="text" className="form-control" name="industryName" value={user.industryName} onChange={ handleChange } placeholder="Automotive" ></input>
                                                        <p className="erromsg">{formErrors.industryName}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <label>Website</label>
                                                        <input type="text" className="form-control" name="websiteName" value={user.websiteName} onChange={ handleChange } placeholder="www.bmw.com"></input>
                                                        <p className="erromsg">{formErrors.websiteName}</p>
                                                        
                                                    </div>
                                                    <div className="col">
                                                        <label>City </label>
                                                        <input type="text" className="form-control" name="cityName" value={user.cityName} onChange={ handleChange } placeholder="New York" ></input>
                                                        <p className="erromsg">{formErrors.cityName}</p>
                                                       
                                                    </div>
                                                </div>
                                                <div className="form-group"> 
                                                    <label htmlFor="exampleFormControlTextarea1">About Company</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" name="aboutCompny" value={user.aboutCompny} onChange={ handleChange } placeholder="About Company" rows="3"></textarea>
                                                    <p className="erromsg" style={styleObj}>{formErrors.aboutCompny}</p>

                                                    <label htmlFor="exampleFormControlTextarea1">Full Address</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" name="fullAddress" value={user.fullAddress} onChange={ handleChange } placeholder="Street Address" rows="3"></textarea>
                                                    <p className="erromsg"  style={styleObj}>{formErrors.fullAddress}</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <label>Facebook Profile URL</label>
                                                        <input type="text" className="form-control" name="fbUrl" value={user.fbUrl} onChange={ handleChange } placeholder="www.facebook.com/bmw"></input>
                                                        
                                                    </div>
                                                    <div className="col">
                                                        <label>Twitter Profile URL </label>
                                                        <input type="text" className="form-control" name="twtUrl" value={user.twtUrl} onChange={ handleChange } placeholder="www.twitter.com/bmw" ></input>
                                                    </div>
                                                </div>
                                                <label>Linkdin Profile URL </label>
                                                <input type="text" className="form-control" name="linkdin_url" value={user.linkdin_url} onChange={ handleChange } placeholder="www.linkdin.com/bmw"></input>
                                                
                                                <div className="col-sm">
                                                    <div className="button2" ><button type="button"  className="btn btn-primary" onClick={ AdComny }>Submit</button></div>
                                                 </div>
                                                
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
    )
}
export default withRouter(AddCompany);
