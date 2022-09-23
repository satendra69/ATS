import React from "react"
const TaskList = (props) => {
  return (
    props.taskList.map((val, idx) => {
      let email = `email-${idx}`, taskStatus = `taskStatus-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input type="email"  name="email" id={email} data-id={idx} className="form-control " placeholder="Enter Your Email"/>
          </td>
          <td>
            <select name="taskStatus" id={taskStatus} data-id={idx} class="form-select" aria-label="Default select example" >
              <option value="0">Admin</option>
              <option value="1">Team Member</option>              
              <option value="2">Restricted Team Member</option>
            </select>
          </td>
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default TaskList