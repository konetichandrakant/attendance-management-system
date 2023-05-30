import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function TeacherStudentAttendancePage() {
  const { courseId, studentId } = useParams();

  const [addStudentId, setAddStudentId] = useState(null);
  const [addStudent, setAddStudent] = useState(false);
  const [details, setDetails] = useState(null);

  const navigate = useNavigate();

  const getPercentage = (a, b) => {
    return (100 * a) / b;
  }

  useEffect(() => {
    axios.get(`http://localhost:3500/teacher/${courseId}/${studentId}`)
      .then((response) => {
        let data = response.data;
        if (data['teacherId'] === null) {
          navigate('/login');
        } else {
          setDetails(data);
        }
      });
  }, [])

  useEffect(() => { }, [])

  return (
    <>
      {/* {
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
      } */}

      {
        details === null && (
          <Loading />
        )
      }

      {
        details && (
          <div className=''>
            <div>
              <Link to={`/teacher-details/${details.teacherID}`}>{details.teacherID}</Link>
            </div>
            {/* Here i consider classname classId and no of classes taken*/}
            <div className='card'>
              <div className='course-details-box'>
                <div>
                  Course Details:
                </div>

                <div>
                  <span>
                    Course ID:
                  </span>
                  <span>
                    {
                      details['courseId']
                    }
                  </span>
                </div>

                <div>
                  <span>
                    Course Name:
                  </span>
                  <span>
                    {
                      details['courseName']
                    }
                  </span>
                </div>

                <div>
                  <span>
                    Teacher ID:
                  </span>
                  <span>
                    {
                      details['teacherId']
                    }
                  </span>
                </div>

                <div>
                  <span>
                    Teacher Name:
                  </span>
                  <span>
                    {
                      details['teacherName']
                    }
                  </span>
                </div>
              </div>

              <div>

              </div>
            </div>

          </div>
        )
      }

    </>
  )
}

export default TeacherStudentAttendancePage