import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function Registration() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target[0].value === '' || event.target[1].value === '' || event.target[2].value === '') {
        setError(true);
      } else {
        setError(false);
        navigate('/dashboard');

      }
  }
  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? "" : "none"}}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div>
      <h2>User Registration</h2>
      <div>
        {errorMessage()}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
        <ReCAPTCHA
        sitekey="6LfThdodAAAAAD1U3Ld-OrM5Qtb4HO3-IK0WHblQ"
        onChange={onChange}
        />
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}


//6LfThdodAAAAAD1U3Ld-OrM5Qtb4HO3-IK0WHblQ : site-key
//6LfThdodAAAAABqEmv5Ksztxd3UGe9HhuDNDXfqO : secret-key