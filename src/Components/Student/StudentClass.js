import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import Header from './Header';

function Class() {
  const [urlSearchParams, setUrlSerachParams] = useSearchParams();
  const course_id = urlSearchParams.get('course_id');

  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3500/attendance', { params: { course_id: course_id } })
      .then((response) => {
        setDetails(response.data);
      })
  }, [])

  return (
    <div>
      <Header />
      {
        details === null && (
          <Loading />
        )
      }
      {
        details !== null && course_id === null && (
          <div className='class-boxes'>
            {
              details.map((x, i) => {
                return (
                  <div className='class-box' onClick={() => { }}>
                    <span>CLASS: {details[i].classname}</span>
                    <span>COURSE ID: {details[i].course_id}</span>
                    <span>NO OF STUDENTS: { }</span>
                  </div>
                )
              })
            }
          </div>
        )
      }
      {
        details !== null && course_id !== null && (
          details.map((x, i) => {
            return (
              <div>

              </div>
            )
          })
        )
      }
    </div>
  )
}

export default Class