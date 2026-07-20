import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(

        "http://localhost:8000/api/auth/signup",

        {
          name,
          email,
          password
        },

        {
          withCredentials: true
        }

      );

      alert(data.message);

      navigate("/");

    }

    catch (error) {

      console.log(error);

      alert(error.response.data.message);

    }

  }

  return (

    <div>

      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>

        <input

          type="text"

          placeholder="Enter Name"

          value={name}

          onChange={(e) => setName(e.target.value)}

        />

        <br /><br />

        <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

        />

        <br /><br />

        <input

          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />

        <br /><br />

        <button>

          Signup

        </button>

      </form>

      <br />

      <button onClick={() => navigate("/signin")}>

        Already Have Account

      </button>

    </div>

  )

}

export default Signup;