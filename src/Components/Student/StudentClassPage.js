import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading';
import "bootstrap/dist/css/bootstrap.min.css";

function StudentClassPage() {
  const { courseId } = useParams();
  console.log(courseId);
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  console.log(details)

  // This page details should contain-
  // image of teacher and teacher ID (Link format)

  useEffect(() => {
    console.log(localStorage.getItem('token'))
    axios.get(`http://localhost:3500/student/${courseId}`,
      {
        params: { courseId: courseId },
        headers: { Authorization: localStorage.getItem('token') }
      }
    ).then((response) => {
      let data = response.data;
      if (data['studentId'] === null) {
        navigate('/login');
      } else {
        setDetails(data);
      }
    })
  }, [])

  return (
    <>
      {
        details === null && (
          <Loading />
        )
      }

      {
        details && (
          <div className=''>
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

export default StudentClassPage