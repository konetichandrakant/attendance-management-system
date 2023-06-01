import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentHomePage() {
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  console.log('student');

  // <i class="bi bi-arrow-right-circle"></i>
  // <i class="bi bi-arrow-right-circle-fill"></i>

  // This page details should contain-
  // image of stduent and student ID (Link format)

  useEffect(() => {
    console.log(localStorage.getItem('token'));
    axios.get('http://localhost:3500/student',
      { headers: { Authorization: localStorage.getItem('token') } })
      .then((response) => {
        console.log(response);
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
              <span>
                welcome {details.studentId}
              </span>
            </div>
            {/* Here i consider classname classId and no of classes taken*/}
            <div>
              {
                details.courses.map((x, i) => {
                  return (
                    <div onClick={() => { navigate(`/student/${details.courses[i]}`) }} className='courses'>
                      <div>
                        <span>
                          Class ID:
                        </span>
                        <span>
                          {details.courses[i]}
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