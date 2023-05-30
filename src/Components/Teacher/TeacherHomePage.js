import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TeacherHomePage() {
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  // This page details should contain-
  // image of teacher and teacher ID (Link format)

  useEffect(() => {
    axios.get('http://localhost:3500/teacher',
      {
        headers: { Authorization: localStorage.getItem('jwttoken') }
      }
    ).then((response) => {
      let data = response.data;
      if (data['teacherId'] === null) {
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
              <Link to={`/teacher/${details.teacherID}`}>{details.teacherID}</Link>
            </div>
            {/* Here i consider classname classId and no of classes taken*/}
            <div>
              {
                details.listOfClasses.map((x, i) => {
                  return (
                    <div onClick={() => { navigate(`http://localhost:3500/teacher/${details.listOfClasses[i].courseId}`) }}>
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

export default TeacherHomePage