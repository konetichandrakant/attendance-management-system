import React, { useEffect } from 'react'
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  // This page details should contain-
  // image of teacher and teacher ID (Link format)

  useEffect(() => {
    axios.get('http://localhost:3500',
      {
        params: { teacherID: teacherID, courseId: courseId },
        headers: { Authorization: localStorage.getItem('jwttoken') }
      }
    )
      .then((response) => { setDetails(response.data) })
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
                      <span>
                        {x.courseName}
                      </span>

                      <span>
                        <span>
                          Class ID:
                        </span>
                        <span>
                          {x.courseId}
                        </span>
                      </span>

                      <span>
                        <span>
                          No Of Classes Taken:
                        </span>
                        <span>
                          {x.noOfClassesTaken}
                        </span>
                      </span>
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

export default HomePage