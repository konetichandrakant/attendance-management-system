import React from 'react'

function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid flex-row justify-content-end">
        {props.userId}
      </div>
    </nav>
  )
}

export default Header