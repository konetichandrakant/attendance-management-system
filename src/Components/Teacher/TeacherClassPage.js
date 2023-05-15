import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function TeacherClassPage() {
  const { courseId } = useParams();

  const [details, setDetails] = useState(null);
  const [addStudent, setAddStudent] = useState(false);
  const [addStudentId, setAddStudentId] = useState(null);
  const [addedSuccessfully, setAddedSuccessfully] = useState(null);

  const navigate = useNavigate();

  const getPercentage = (a, b) => {
    return (100 * a) / b;
  }

  useEffect(() => {
    axios.get(`http://localhost:3500/teacher/${courseId}`)
      .then((response) => {
        if (data['teacherId'] === null) {
          navigate('/login');
        } else {
          setDetails(response.data);
        }
      });
  }, [])

  useEffect(() => { }, [])

  return (
    <>
      {
        details && (
          <div>
            <div className='flex-row'>
              <div className='flex-row'>
                <span>No.of Classes Taken: </span>
                <span>{details.classesTaken}</span>
              </div>

              {
                !addStudent && (
                  <div>
                    <button onClick={() => { setAddStudent(prev => !prev) }}>Add Student</button>
                  </div>
                )
              }
            </div>

            {
              addStudent && (
                <div className='flex-row'>
                  <div>
                    <img />
                  </div>

                  <div>
                    <span>
                      Student ID:
                    </span>
                    <span>
                      <input onChange={(e) => { setAddStudentId(e.target.value) }} value={addStudentId} />
                    </span>
                  </div>

                  <div>
                    <button onClick={() => { }}>Add Student</button>
                  </div>
                </div>
              )
            }

            <div>
              <div className='flex-row'>
                <span>SL no.</span>
                <span>Name</span>
                <span>Roll Number</span>
                <span>Attendance</span>
              </div>

              {
                details.students.map((x, i) => {
                  return (
                    <div onClick={() => {
                      navigate(`/student/${courseId}/${details.studentId}`)
                    }}
                      className='flex-row'>
                      <span>{i + 1}</span>
                      <span>{details.students[i].name}</span>
                      <span>{details.students[i].studentId}</span>
                      <span>{`${details.students[i].noOfPresent} | ${getPercentage(details.students[i].noOfPresent, details.classesTaken)}`}</span>
                    </div>
                  )
                })
              }
            </div>

          </div>
        )
      }
      {
        !details && (
          <Loading />
        )
      }

    </>
  )
}

export default TeacherClassPage