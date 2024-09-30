import React from 'react'
import "./NotEligible.css"
import "../Eligible/Eligible.css"
const NotEligible = () => {
  return (
    <div className='Eligible'>
        <h3>Thanks for participating!</h3>
<p>Unfortunately you didn't score enough.
</p>
<button className='eligible-btn'>
    <a href="https://www.masterfrosty.com" target='_blank' rel='noopener noreferrer'>Visit Our Website</a>
    </button>
    </div>
  )
}

export default NotEligible