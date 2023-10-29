import React, { useEffect, useState } from "react";
import "./Students.css";
import Student from "../Student/Student";
import Team from "../Team/Team";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loadStudents, setLoadStudents] = useState(false);
  useEffect(() => {
    if (loadStudents === true) {
      fetch("/public/data.json")
        .then((res) => res.json())
        .then((data) => setStudents(data));
    }
  }, [loadStudents]);

  const [teamList, setTeamList] = useState([]);
  const loadSingleStu = (student) => {
    // const newStudent = [...teamList, student];
    // setTeamList(newStudent);
    let filteredList = teamList.filter((std) => std.id !== student.id);
    const newList = [...filteredList, student];
    setTeamList(newList);
  };
  // const [deleteMem, setDeleteMem] = useState([]);
  const deleteMember = (member) => {
    const filtered = teamList.filter((t) => t.id !== member);
    setTeamList(filtered);
  };
  if (loadStudents) {
    document.getElementById("show-student-btn").style.display = "none";
  }
  return (
    <>
      <button
        id="show-student-btn"
        className="show-student-btn"
        onClick={() => setLoadStudents(true)}
      >
        Show Students
        <i className="fa-solid fa-eye"></i>
      </button>
      <div className="students-cart-container">
        <div className="students">
          {students.map((student) => (
            <Student
              key={student.id}
              student={student}
              loadSingleStu={loadSingleStu}
            />
          ))}
        </div>
        <div className="cart">
          <Team teamList={teamList} deleteMember={deleteMember} />
        </div>
      </div>
    </>
  );
};

export default Students;
