import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, withRouter } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin"; 
import {useLocation} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

 function AddCompanyInfo(props) {
    //Get compnay name
    const [ notes, getNotes] = useState(
       []    
    );
    const [myId, setId] = useState(12);
    const url = 'http://localhost:3001/getCompanyList/';
    useEffect(()=>{
        getAllNotes(myId);
    }, [myId]);

    const getAllNotes = (id) =>{
        axios.post(url,{userId:id})
        .then((response)=>{
           // console.log("ssshh",response);
            const allNotes = response.data.payload.payload;
            getNotes(allNotes);
        })
        .catch(error => console.log(`Error: ${error}`));
    }

  const OwnerId = localStorage.getItem("id");
  const [ user, setUser] = useState({
    companyName:"",
    OwnerId : OwnerId,
    fName:"",
    lName:"",
    title:"",
    email:"",
    phoneNumber:"",
    cityName:"",
    fbUrl:"",
    twtUrl:"",
    linkdin_url:"",
    stage:""

})
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const handleChange = e => {
   // console.log("form_data",e);
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    });
}
const styleObj = {
    marginTop: "5px"
}
const ContactAdd = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);

    const { companyName, OwnerId, fName, lName, title, email, phoneNumber,cityName,fbUrl,twtUrl,linkdin_url,stage} = user
    if( companyName && fName && lName && title && phoneNumber && email && cityName && stage){
        axios.post("http://localhost:3001/addContact", user)
        .then( res => {
            toast.success("Company Contact Added Successfully", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
             setTimeout(() => {
                props.history.push("/contactlist");
            }, 4000);
            
        }).catch(err => {
            //console.log('There was an error!', err.response.data.message);
            toast.error(err.response.data.message, {
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            //console.log('There was an error!', err);
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
       
    }

}
 useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
     
    }
  }, [formErrors]);
  const validate =(values)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.companyName) {
        errors.companyName = "Company Name is required!";
      }
    if (!values.fName) {
      errors.fName = "First Name is required!";
    }
    if (!values.lName) {
      errors.lName = "Last Name is required!";
    }
    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is required!";
    }
    if (!values.cityName) {
      errors.cityName = "City Name is required!";
    }
    if(!values.stage){
        errors.stage = "Stage is required";
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
                                                <h1 className="h3 mb-0 text-gray-800">Company Contact</h1>
                                               
                                        </div>
                                        
                                        <div className="compny">
                                         {/* <!-- Content Row --> */}
                                         
                                            <div className="col-sm-9 rsp">
                                                
                                                <div className="row">
                                                    <div className="col slc">
                                                      <label>Select Company </label>
                                                        <select className="form-select" name="companyName" onChange={ handleChange }>
                                                        <option >Select Company Name</option>
                                                            {notes.map(notes => (
                                                                <option
                                                                key={notes.CompanyId}
                                                                value={notes.CompanyId}
                                                                >
                                                                {notes.CompanyName}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <p className="erromsg">{formErrors.companyName}</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <label>First Name</label>
                                                        <input type="text" className="form-control" placeholder="Ryan" name="fName" value={user.fName} onChange={ handleChange }></input>
                                                        <p className="erromsg">{formErrors.fName}</p>
                                                    </div>
                                                    <div className="col">
                                                        <label>Last Name </label>
                                                        <input type="text" className="form-control" placeholder="Cooper" name="lName" value={user.lName} onChange={ handleChange }></input>
                                                        <p className="erromsg">{formErrors.lName}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <label>Title</label>
                                                        <input type="text" className="form-control" placeholder="HR Manager" name="title" value={user.title} onChange={ handleChange }></input>
                                                        <p className="erromsg">{formErrors.title}</p>
                                                        
                                                    </div>
                                                    <div className="col">
                                                        <label>Email </label>
                                                        <input type="email" className="form-control" placeholder="ryan@gmail.com" name="email" value={user.email} onChange={ handleChange }></input>
                                                        <p className="erromsg">{formErrors.email}</p>
                                                       
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <label>Phone</label>
                                                        <input type="number" className="form-control" placeholder="+1-202-555-0187" name="phoneNumber" value={user.phoneNumber} onChange={ handleChange } ></input>
                                                        <p className="erromsg">{formErrors.phoneNumber}</p>
                                                        
                                                    </div>
                                                    <div className="col">
                                                        <label>City </label>
                                                        <input type="text" className="form-control" placeholder="New York" name="cityName" value={user.cityName} onChange={ handleChange }></input>
                                                        <p className="erromsg">{formErrors.cityName}</p>
                                                       
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <label>Facebook Profile URL</label>
                                                        <input type="text" className="form-control" placeholder="www.facebook.com/bmw" name="fbUrl" value={user.fbUrl} onChange={ handleChange }></input>
                                                        
                                                    </div>
                                                    <div className="col">
                                                        <label>Twitter Profile URL </label>
                                                        <input type="text" className="form-control" placeholder="www.twitter.com/bmw" name="twtUrl" value={user.twtUrl} onChange={ handleChange } ></input>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                      <label>Linkdin Profile URL </label>
                                                      <input type="text" className="form-control" placeholder="www.linkdin.com/bmw" name="linkdin_url" value={user.linkdin_url} onChange={ handleChange }></input>
                                                        
                                                    </div>
                                                    <div className="col">
                                                   
                                                        <label>Stage </label>
                                                        <select className="form-select" name="stage" onChange={ handleChange }>
                                                        <option >Select Stage</option>
                                                        <option value="Leads" >Leads</option>
                                                        <option value="Accounts">Accounts </option>
                                                        <option value="Followup">Followup </option>
                                                        
                                                    </select>
                                                    <p className="erromsg" style={styleObj}>{formErrors.stage}</p>
                                                    </div>
                                                    
                                                </div>
                                                 
                                                
                                                <div className="col-sm">
                                                    <div className="button2" ><button type="button"  className="btn btn-primary" onClick={ ContactAdd }>Submit</button></div>
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
export default withRouter(AddCompanyInfo);