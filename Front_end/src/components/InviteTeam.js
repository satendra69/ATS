import React from "react";
import axios from 'axios';
import FooterAdmin from "./Admin/FooterAdmin";
import TopBarAdmin from "./Admin/TopBarAdmin";
import SideBarAdmin from "./Admin/SideBarAdmin";
import TaskList from "./InviteList";
import swal from 'sweetalert'; 
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class InviteTeam extends React.Component {
    state = {
        taskList: [{ index: Math.random(), email: "", taskStatus: "" }],
        
    
    }
  
    handleChange = (e) => {
        if (["email", "taskStatus"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = () => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), email: "", taskStatus: "" }],
        }));
    }


    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        {/*if(this.state.date==='' || this.state.description==='')
        {
            NotificationManager.warning("Please Fill up Required Field . Please check Task and Date Field");
            return false;
        } */}
        for(var i=0;i<this.state.taskList.length;i++)
        {
                if(this.state.taskList[i].email==='' || this.state.taskList[i].taskStatus==='')
                {
                    NotificationManager.warning("Please Fill up Required Field.Please Check Email And Role Field");
                    return false;
                }
        }
        let data = { formData: this.state, userData: localStorage.getItem('id') }
        //axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
        axios.post("http://localhost:3001/inviteTeamMate", data).then(res => {
            toast.success(res.data.payload, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
           
            //if(res.data.success) NotificationManager.success(res.data.msg);
        }).catch(error => {
            if(error.response.status && error.response.status===400)
            NotificationManager.error("Bad Request");
            else NotificationManager.error("Something Went Wrong");
            this.setState({ errors: error })
        });
    }
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    render() {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state
        return (
            <>
            { /*<div className="container adm"> */ }
                <div className="adm">
                    <div className="mb-3">
                        <div className="row" id="main">
                            <div id="page-top">
                                <div id="wrapper">
                                    {/*sidebar component*/}
                                    <SideBarAdmin />\
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
                                                        <h1 className="h3 mb-0 text-gray-800">Invite Teammates</h1>
                                                        
                                                </div>
                                                 {/* <!-- Content Row --> */}
                                                
                                                    <div className="login invite">
                                                        { /*console.log("User", user) */}
                                                        
                                                       
                                                        <h6>Roles</h6>
                                                        <ul>
                                                            <li><b>Admin:</b> An "Admin" can add or delete any records. They also have complete access to the reporting suite & admin panel (except billing/payments).</li>
                                                            <li><b>Team Member: </b> A "Team Member" can view & add all data but does not have access to Delete Data, generate Report or Access the Admin Panel.</li>
                                                            <li><b>Restricted Team Member:</b> A "Restricted Team Member" can view & edit data that either they add into the system or are assigned to. This role is generally given to freelancers.</li>
                                                        </ul>
                                                    </div> 
                                                    <div className="content nfg">
                                                        <NotificationContainer/>
                                                        
                                                        <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                                                            <div className="row" style={{ marginTop: 20 }}>
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                    
                                                                        <div className="card-body">
                                                                            
                                                                            <table className="table">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th className="required" >Email</th>
                                                                                        <th className="required" >Role</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                                                                                </tbody>
                                                                                <tfoot>
                                                                                    { /*<tr><td colSpan="4">
                                                                                        <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                                                                    </td></tr> */}
                                                                                </tfoot>
                                                                            </table>
                                                                            
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <div className="card-footer m text-left"> <button type="submit" className="btn btn-secondary text-center">Close</button></div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="card-footer m text-right"> <button type="submit" className="btn btn-success text-center">Send Invitation</button></div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        </form>
                                                    </div>
                                                    
                                                 {/* Content Row End*/}
                                                
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
}
export default InviteTeam
