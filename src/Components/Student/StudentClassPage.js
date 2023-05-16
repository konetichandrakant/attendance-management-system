import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading';

function StudentClassPage() {
  const { courseId } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  // This page details should contain-
  // image of teacher and teacher ID (Link format)

  useEffect(() => {
    axios.get('http://localhost:3500/student',
      {
        params: { courseId: courseId },
        headers: { Authorization: localStorage.getItem('jwttoken') }
      }
    )
      .then((response) => {
        let data = response.data;
        if (data['type'] !== 'student') {
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
                    <div onClick={() => { navigate(`http://localhost:3500/class/${x.courseId}`) }}>
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

                      <div>
                        <span>
                          No Of Classes Taken:
                        </span>
                        <span>
                          {details.listOfClasses[i].noOfClassesTaken}
                        </span>
                      </div>

                      <div>
                        <span>
                          No Of Classes Taken:
                        </span>
                        <span>
                          {details.listOfClasses[i].noOfClassesTaken}
                        </span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
    </>
  )
}

export default StudentClassPage