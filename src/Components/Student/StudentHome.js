import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

  }, [])

  return (
    <div>
      {/* header section*/}
      {

      }

      {
        details === null && (
          <Loading />
        )
      }

      {/* classes */}
      {
        details !== null && (
          details.map((x, i) => {
            return (
              <div className='' onClick={() => {
                navigate('/attendance',{params:{}})
              }}>
                <div>
                  <text>
                    COURSE ID: {details[i].course_id}
                  </text>
                </div>

                <div>
                  <text>
                    SUBJECT: {details[i].course_name}
                  </text>
                </div>

                <div>
                  <text>
                    SEMESTER: {details[i].semester}
                  </text>
                </div>

                <div>
                  <text>
                    CLASSNAME: {details[i].classname}
                  </text>
                </div>
              </div>
            )
          })
        )
      }
    </div>
  )
}

export default Home