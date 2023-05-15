import React from 'react'
import Loading from '../Loading';

function TeacherClassDetails() {
  const [details, setDetails] = useState(null);

  return (
    <>
      {
        details && (
          <div>

          </div>
        )
      }
      {
        !details && (
          <Loading/>
        )
      }
    </>
  )
}

export default TeacherClassDetails