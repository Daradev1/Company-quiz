import React, { useState } from 'react'
import "./Eligible.css"
const Eligible = () => {
    const [result, setResult] = React.useState("");
    const [isDone, setIsDone] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Do not refresh Sending...");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "93461ab0-659d-4b08-af8c-9e66e5729f83");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Airtime is being processed this might take a few minute...");
          event.target.reset();
          setIsDone(true);
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };  

  return (
    <div className='Eligible'>
    {isDone? <>
    <h3>Your Airtime is on the way...</h3>
    <button className='eligible-btn'>
    <a href="https://www.masterfrosty.com" target='_blank' rel='noopener noreferrer'>Visit Our Website</a>
    </button>
    </> :<>
    
    <h3>Congratulations!</h3>
<p>you've passed the quiz with flying Colors! as a token of appriciation enter
your Phone number to recieve An airtime reward!
</p>
<form onSubmit={onSubmit} >
<input type="tel" name='phone' placeholder='Enter Your Phone Number' required />
<button type='submit' className='eligible-btn'>Send</button>
<span>{result}</span>
</form>
    
    
    </>}


    </div>
  )
}

export default Eligible