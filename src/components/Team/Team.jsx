import React from "react";
import "./Team.css";
import Swal from "sweetalert2";

const Team = (props) => {
  const deleteMember = props.deleteMember;
  const teamList = props.teamList;
  let total = 0;
  for (const i of teamList) {
    total += i.budget;
  }
  {
    if (total >= 600) {
      Swal.fire({
        title: "<h5>Well Done!</br> minimum budget crossed</h5>",
        confirmButtonColor: "#07072a",
      });
    }
  }
  return (
    <div>
      <table className="table">
        <tbody>
          <tr className="trow">
            <td>
              <i className="fas fa-users me-1"></i> Total Students
            </td>
            <td>{teamList.length}</td>
          </tr>
          <tr className="trow2">
            <td>
              <i className="fas fa-dollar-sign me-1"></i> Total Money
            </td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      {teamList.map((singleStu) => (
        <div className="team" key={singleStu.id}>
          <img src={singleStu.img} alt="" />
          <h4>{singleStu.name}</h4>
          <button onClick={() => deleteMember(singleStu.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Team;
