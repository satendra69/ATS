import React, { useEffect, useState } from "react"
import axios from "axios"
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin";
import { useLocation, withRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RichTextEditor from "./RichTextEditor";
//import CurrencyList from 'currency-list';



function AddJobs(props) {

    //const currencyGet = CurrencyList.getAll('en_US');

    //Get compnay name
    const [notes, getNotes] = useState(
        []
    );
    const [myId, setId] = useState(12);
    const url = 'http://localhost:3001/getCompanyList/';
    useEffect(() => {
        getAllNotes(myId);
    }, [myId]);

    const getAllNotes = (id) => {
        axios.post(url, { userId: id })
            .then((response) => {
                //console.log("ssshh",response);
                const allNotes = response.data.payload.payload;
                getNotes(allNotes);
            })
            .catch(error => console.log(`Error: ${error}`));
    }
    const [value2, setValue] = useState("");
    const getValue = (value2) => {
        setValue(value2);
    };

    const OwnerId = localStorage.getItem("id");
    const [user, setUser] = useState({
        CompanyId: "",
        OwnerId: OwnerId,
        JobTitle: "",
        NoOfOpenings: "",
        MinExp: "",
        MaxExp: "",
        SalaryType: "",
        Currency: "",
        Jobdescription: OwnerId,
        MinSalary: "",
        MaxSalary: "",
        Qualification: "",
        Specialization: "",
        City: "",
        Locality: "",
        State: "",
        Country: "",
        Address: ""
    })

    const styleObj = {
        marginTop: "5px"
    }
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = e => {
        //console.log("form_data",e);
        const { name, value } = e.target
        setUser(pre => ({ ...pre, [name]: value }));
    }
    // Rich text editor

    const AdJob = (e) => {
        e.preventDefault();
        setFormErrors(validate(user));
        setIsSubmit(true);

        const { CompanyId, OwnerId, JobTitle, NoOfOpenings, MinExp, MaxExp, SalaryType, Currency, Jobdescription, MinSalary, MaxSalary, Qualification, Specialization, City, Locality, State, Country, Address } = user
        if (CompanyId && JobTitle && NoOfOpenings && MinExp && MaxExp && SalaryType && Currency && Jobdescription && MinSalary && MaxSalary && Qualification && Specialization && City && Locality && State && Country && Address) {
            axios.post("http://localhost:3001/addJob", { ...user, texteditir: value2 }
            )
                .then(res => {
                    //console.log("Add_Jobs_____",res);
                    toast.success("Job Added successfully!", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        props.history.push("/Jobs");
                    }, 2000);

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
                    console.log('There was an error!', err);
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
    const validate = (values) => {
        const errors = {};
        if (!values.CompanyId) {
            errors.CompanyId = "Company Name is required!";
        }
        if (!values.JobTitle) {
            errors.JobTitle = "Job Title is required!";
        }
        if (!values.NoOfOpenings) {
            errors.NoOfOpenings = "No Of Openings is required!";
        }
        if (!values.MinExp) {
            errors.MinExp = "MinExp is required!";
        }
        if (!values.MaxExp) {
            errors.MaxExp = "MaxExp is required!";
        }
        if (!values.SalaryType) {
            errors.SalaryType = "Salary Type is required!";
        }
        if (!values.Currency) {
            errors.Currency = "Currency is required!";
        }
        if (!values.MinSalary) {
            errors.MinSalary = "Min Salary is required!";
        }
        if (!values.MaxSalary) {
            errors.MaxSalary = "Max Salary is required!";
        }
        if (!values.Qualification) {
            errors.Qualification = "Qualification is required!";
        }
        if (!values.Specialization) {
            errors.Specialization = "Specialization is required!";
        }
        if (!values.City) {
            errors.City = "City is required!";
        }
        if (!values.Locality) {
            errors.Locality = "Locality is required!";
        }
        if (!values.State) {
            errors.State = "State is required!";
        }
        if (!values.Country) {
            errors.Country = "Country is required!";
        }
        if (!values.Address) {
            errors.Address = "Address is required!";
        }
        return errors;
    }
    return (
        <>
            { /*<div className="container adm"> */}
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
                                                <h1 className="h3 mb-0 text-gray-800">Add Jobs</h1>
                                                {/* { console.log("AddJob__" ,user) } */}
                                            </div>
                                            <div className="compny">
                                                {/* <!-- Content Row --> */}
                                                <h5>Job Detalis</h5>
                                                <div className="col-sm-9 rsp">
                                                    <div className="row">
                                                        <div className="col slc">
                                                            <label>Select Company </label>

                                                            <select className="form-select" name="CompanyId" onChange={handleChange}>
                                                                <option>Select Company Name</option>
                                                                {/* {Object.entries(currencyGet).map(([key,value]) => {
                                                                {console.log("pap111___",key)}
                                                                {console.log("pap222___",value)}
                                                                 <option>
                                                                
                                                                {key}
                                                                 </option>
                                                           })} */}

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
                                                        <p className="erromsg">{formErrors.CompanyId}</p>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                            <label>Job Title</label>
                                                            <input type="text" className="form-control" name="JobTitle" value={user.JobTitle} onChange={handleChange} placeholder="" ></input>
                                                            <p className="erromsg">{formErrors.JobTitle}</p>
                                                        </div>
                                                        <div className="col">
                                                            <label>No Of Openings </label>
                                                            <input type="text" className="form-control" name="NoOfOpenings" value={user.NoOfOpenings} onChange={handleChange} placeholder="" ></input>
                                                            <p className="erromsg">{formErrors.NoOfOpenings}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label>Min Exp</label>
                                                            <input type="text" className="form-control" name="MinExp" value={user.MinExp} onChange={handleChange} placeholder=""></input>
                                                            <p className="erromsg">{formErrors.MinExp}</p>

                                                        </div>
                                                        <div className="col">
                                                            <label>Max Exp </label>
                                                            <input type="text" className="form-control" name="MaxExp" value={user.MaxExp} onChange={handleChange} placeholder="" ></input>
                                                            <p className="erromsg">{formErrors.MaxExp}</p>

                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                            <label>Salary Type</label>
                                                            <select className="form-select" name="SalaryType" onChange={handleChange}>
                                                                <option >Select Salary Type</option>
                                                                <option value="monthly" >Monthly</option>
                                                                <option value="quarterly">Quarterly </option>
                                                                <option value="yearly">Yearly </option>

                                                            </select>
                                                            {/* <input type="text" className="form-control" name="SalaryType" value={user.SalaryType} onChange={ handleChange } placeholder=""></input> */}
                                                            <p className="erromsg" style={styleObj}>{formErrors.SalaryType}</p>

                                                        </div>
                                                        <div className="col">
                                                            <label>Currency </label>
                                                            <input type="text" className="form-control" name="Currency" value={user.Currency} onChange={handleChange} placeholder="" ></input>
                                                            <p className="erromsg">{formErrors.Currency}</p>

                                                        </div>
                                                    </div>

                                                    <div className="row edt">
                                                        <label>Job Description</label>
                                                        <RichTextEditor initialValue="" getValue={getValue} />

                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label>Min Salary</label>
                                                            <input type="text" className="form-control" name="MinSalary" value={user.MinSalary} onChange={handleChange} placeholder=""></input>
                                                            <p className="erromsg">{formErrors.MinSalary}</p>

                                                        </div>
                                                        <div className="col">
                                                            <label>Max Salary</label>
                                                            <input type="text" className="form-control" name="MaxSalary" value={user.MaxSalary} onChange={handleChange} placeholder="" ></input>
                                                            <p className="erromsg">{formErrors.MaxSalary}</p>
                                                        </div>
                                                    </div>
                                                    <label>Qualification </label>
                                                    <input type="text" className="form-control" name="Qualification" value={user.Qualification} onChange={handleChange} placeholder=""></input>
                                                    <p className="erromsg">{formErrors.Qualification}</p>

                                                    <label>Specialization </label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" name="Specialization" value={user.Specialization} onChange={handleChange} placeholder="" rows="3" ></textarea>
                                                    <p className="erromsg" style={styleObj}>{formErrors.Specialization}</p>
                                                    <div className="row ft">
                                                        <div className="col">
                                                            <label>City</label>
                                                            <input type="text" className="form-control" name="City" value={user.City} onChange={handleChange} placeholder=""></input>
                                                            <p className="erromsg">{formErrors.City}</p>
                                                        </div>
                                                        <div className="col">
                                                            <label>Locality</label>
                                                            <input type="text" className="form-control" name="Locality" value={user.Locality} onChange={handleChange} placeholder="" ></input>
                                                            <p className="erromsg">{formErrors.Locality}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label>State</label>
                                                            <input type="text" className="form-control" name="State" value={user.State} onChange={handleChange} placeholder=""></input>
                                                            <p className="erromsg">{formErrors.State}</p>

                                                        </div>
                                                        <div className="col">
                                                            <label>Country</label>
                                                            <input type="text" className="form-control" name="Country" value={user.Country} onChange={handleChange} placeholder="" ></input>
                                                            <p className="erromsg">{formErrors.Country}</p>
                                                        </div>
                                                    </div>
                                                    <label>Address </label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" name="Address" value={user.Address} onChange={handleChange} placeholder="" rows="3"></textarea>
                                                    <p className="erromsg" style={styleObj}>{formErrors.Address}</p>

                                                    <div className="col-sm">
                                                        <div className="button2" ><button type="button" className="btn btn-primary" onClick={AdJob}>Submit</button></div>
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
export default withRouter(AddJobs);
