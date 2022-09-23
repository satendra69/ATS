import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, withRouter  } from "react-router-dom";
import FooterAdmin from "../FooterAdmin";
import TopBarAdmin from "../TopBarAdmin";
import SideBarAdmin from "../SideBarAdmin";
import { useParams } from "react-router-dom";



 function CompanyInfo(props) {

  
  const { id } = useParams();
  const  {source} = useParams();

  const [notes1, getNotes1] = useState([]);
  const [myId, setId] = useState(id);
  const url = "http://localhost:3001/getCompanyInfoById";
  useEffect(() => {
    getAllNotes1(myId);
  }, [myId]);
 

  const getAllNotes1 = (id) => {
    axios
      .post(url, { id: id })
      .then((response) => {
         console.log("Testing2____",response);
        const allNotes = response.data.payload.payload;
        getNotes1(allNotes["0"]);
      })
      .catch((error) => console.log(`Error: ${error}`));
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
                        
                      </div>

                      <div className="compny candiInfo">
                        <div className="container">
                          {/* <!-- Content Row --> */}
                            {(() => {
                                if (source == "addres") {
                                return (
                                    <div className="row">
                                        <div className="col-sm-12 us4">
                                            <span><b>Company Address</b></span> 
                                        </div>
                                        <div className="col-sm-12 mt-2">
                                            <div className="row">
                                               {notes1.Address}
                                            </div>
                                        </div>
                                    </div>
                                )
                                } else {
                                return (
                                    <div className="row">
                                        <div className="col-sm-12 us4">
                                            <span><b>Company About</b></span> 
                                        </div>
                                        <div className="col-sm-12 mt-2">
                                            <div className="row">
                                              {notes1.About}
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            })()}
                          
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
    </>
  );
}
export default withRouter(CompanyInfo);
