import React from 'react'

function Loading() {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src='../../media/images/loading_image.gif' style={{ height: '10vh', width: '10vh' }} />
      </div>
      <div>
        Loading please wait...
      </div>
    </div>
  )
}

export default Loading