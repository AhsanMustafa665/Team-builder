import React, { useState } from "react";
import "./Student.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Student = (props) => {
  const { img, budget, id, department, batch, facebook, mobile, name, email } =
    props.student;
  const loadSingleStu = props.loadSingleStu;
  return (
    <div className="student">
      <img src={img} alt="student-img" />
      <table>
        <tr>
          <td>Name</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Id No</td>
          <td>{id}</td>
        </tr>
        <tr>
          <td>Department</td>
          <td>{department}</td>
        </tr>
        <tr>
          <td>Batch</td>
          <td>{batch}</td>
        </tr>
        <tr>
          <td>Budget</td>
          <td>
            $<span>{budget}</span>
          </td>
        </tr>
      </table>
      <div className="student-info">
        <div className="social-icon">
          <a style={{ textDecoration: "none", color: "white" }} href={facebook}>
            <i className="fab fa-facebook"></i>
          </a>
          <i className="fa-solid fa-phone"></i>
          <a style={{ textDecoration: "none", color: "white" }} href={email}>
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <button onClick={() => loadSingleStu(props.student)}>
            <FontAwesomeIcon icon={faUserPlus} /> Add To Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Student;
