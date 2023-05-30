import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentHomePage() {
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  // <i class="bi bi-arrow-right-circle"></i>
  // <i class="bi bi-arrow-right-circle-fill"></i>

  // This page details should contain-
  // image of stduent and student ID (Link format)

  useEffect(() => {
    axios.get('http://localhost:3500/student',
      {
        headers: { Authorization: localStorage.getItem('jwttoken') }
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
            <div>
              <Link to={`/student/${details.studentId}`}>{details.studentId}</Link>
            </div>
            {/* Here i consider classname classId and no of classes taken*/}
            <div>
              {
                details.listOfClasses.map((x, i) => {
                  return (
                    <div onClick={() => { navigate(`http://localhost:3500/student/${details.listOfClasses[i].courseId}`) }} className='courses'>
                      <div>
                        {details.listOfClasses[i].courseName}
                      </div>

                      <div>
                        <span>
                          Class ID:
                        </span>
                        <span>
                          {details.listOfClasses[i].courseId}
                        </span>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            <div>
              click for above classes for more details
            </div>
          </div>
        )
      }
    </>
  )
}

export default StudentHomePage