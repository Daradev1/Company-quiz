import React, { useState } from 'react';
import "./Eligible.css";

const Eligible = () => {
    const [result, setResult] = React.useState("");
    const [isDone, setIsDone] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Do not refresh, Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "ee159a8e-e3e4-4d5a-970d-6225fc7c11bb");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setResult("Airtime is being processed, this might take a few minutes...");
          event.target.reset();
          setIsDone(true);
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
    };

    return (
        <div className='Eligible'>
        {isDone ? (
            <>
                <h3>Your Airtime is on the way...</h3>
                <button className='eligible-btn'>
                    <a href="https://www.masterfrosty.com" target='_blank' rel='noopener noreferrer'>
                        Visit Our Website
                    </a>
                </button>
            </>
        ) : (
            <>
                <h3>Congratulations!</h3>
                <p>You've passed the quiz with flying colors! As a token of appreciation, enter
                   your phone number and choose your network provider to receive an airtime reward!
                </p>
                <form onSubmit={onSubmit}>
                {/* Dropdown for selecting the network provider */}
                <label htmlFor="network">Choose your network provider:</label>
                    <select name="network" id="network" required>
                        <option value="">--Select a network--</option>
                        <option value="MTN">MTN</option>
                        <option value="Airtel">Airtel</option>
                        <option value="Glo">Glo</option>
                    </select>
                    
                    <input type="tel" name='phone' placeholder='Enter Your Phone Number' required />

                    <button type='submit' className='eligible-btn'>Send</button>
                    <span>{result}</span>
                </form>
            </>
        )}
        </div>
    );
};

export default Eligible;
