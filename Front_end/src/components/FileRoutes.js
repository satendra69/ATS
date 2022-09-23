import React from "react"
import { Route, Switch, BrowserRouter,HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import InviteTeam from "./InviteTeam";
import AdminDashbord from "./Admin/AdminDashbord";
import ResetPassword from "./Admin/ResetPassword";
import UpdatePassword from "./UpdatePassword";
//import InviteTeam from "./components/InviteTeam";

import { PublicRoute, PrivateRoute, ProtectedRoute,} from "./RouteComponents";
import AddCompany from "./Admin/Company/AddCompany";
import AddContact from "./Admin/Company_Contact/AddContact";
import CompanyList from "./Admin/Company/CompanyList";
import ContactList from "./Admin/Company_Contact/ContactList";
//import EditContact from "./Admin/EditContact";
//import ContactView from "./Admin/ContactView";
//import CompanyView from "./Admin/CompanyView";
//import EditCompany from "./Admin/EditCompany";
import JobsList from "./Admin/Job/JobsList";
import AddJobs from "./Admin/Job/AddJobs";
import JobPageInfo from "./Admin/Job/JobPageInfo";
import JobDescription from "./Admin/Job/JobDescription";
import ApplyJob from "./Admin/Job/ApplyJob";
import CandidatesList from "./Admin/Candidate/CandidatesList";
import AddCandidates from "./Admin/Candidate/AddCandidates";
import AppliedJobList from "./Admin/Job/AppliedJobList";
import CandidatesInfo from "./Admin/Candidate/CandidatesInfo";
import AdminProfile from "./Admin/AdminProfile";
import JobInfo from "./Admin/Job/JobInfo";
import CompanyInfo from "./Admin/Company/CompanyInfo";
import JobListInfo from "./Admin/Job/JobListInfo";
const Page404 = () => <h5>Page Not Found 404</h5>;
const Home = () => <h5>Home</h5>;
const FileRotes = () => {
    const [user, setLoginUser] = useState({
        id: null,
        user: {},
      });
    
      useEffect(() => {
        const id = localStorage.getItem("id");
        const user = localStorage.getItem("FirstName");
    
       // console.log(id, user);
      }, [localStorage.getItem("id")]);
    return (
        <div className="fileRoutes">
            <Switch>
          <ProtectedRoute
            path="/signin"
            component={Login}
          ></ProtectedRoute>

          <PrivateRoute path="/dashboard" component={AdminDashbord}></PrivateRoute>
          <PrivateRoute path="/adminProfile" component={AdminProfile}></PrivateRoute>
          <PrivateRoute path="/resetpassword" component={ResetPassword}></PrivateRoute>
          <PrivateRoute path="/inviteTeam" component={InviteTeam}></PrivateRoute>
          <PrivateRoute path="/addcompany" component={AddCompany}></PrivateRoute>
          <PrivateRoute path="/companylist" component={CompanyList}></PrivateRoute>
          <PrivateRoute path="/CompanyInfo/:id/:source" component={CompanyInfo}></PrivateRoute>
          <PrivateRoute path="/addcontact" component={AddContact}></PrivateRoute>
          <PrivateRoute path="/contactlist" component={ContactList}></PrivateRoute>
          {/* <PrivateRoute path="/editContact/:id" component={EditContact}></PrivateRoute> */}
          {/* <PrivateRoute path="/contactView/:id" component={ContactView}></PrivateRoute>
          <PrivateRoute path="/companyView/:id" component={CompanyView}></PrivateRoute>
          <PrivateRoute path="/editCompany/:id" component={EditCompany}></PrivateRoute> */}
          <PrivateRoute path="/Jobs" component={JobsList}></PrivateRoute>
          <PrivateRoute path="/AddJobs" component={AddJobs}></PrivateRoute>
          <PrivateRoute path="/jobPageInfo" component={JobPageInfo}></PrivateRoute>
          <PrivateRoute path="/ApplyJob/:id" component={ApplyJob}></PrivateRoute>
          <PrivateRoute path="/jobDes/:id" component={JobDescription}></PrivateRoute>
          <PrivateRoute path="/jobInfo/:id" component={JobInfo}></PrivateRoute>
          <PrivateRoute path="/jobListInfo/:id/:source" component={JobListInfo}></PrivateRoute>
          <PrivateRoute path="/candidatesList" component={CandidatesList}></PrivateRoute>
          <PrivateRoute path="/candidatesInfo/:id" component={CandidatesInfo}></PrivateRoute>
          <PrivateRoute path="/addcondidates" component={AddCandidates}></PrivateRoute>
          <PrivateRoute path="/appliedJobList" component={AppliedJobList}></PrivateRoute>
          <ProtectedRoute path="/updatePassword" component={UpdatePassword}></ProtectedRoute>
          <ProtectedRoute path="/forget-password" component={ForgetPassword}></ProtectedRoute>
          <ProtectedRoute exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/" component={Signup} />
         <Route path="*" component={Page404} /> 
         </Switch>
        </div>
    )
}

export default FileRotes