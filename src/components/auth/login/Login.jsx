import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";

export default function Login() {
  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  async function login(event) {
    event.preventDefault(); // prevents refreshing, because it is a single page application

    const formElement = event.target;
    const { email, password } = formElement;

    if (password.value.length < 8) {
      alert("Wrong password");
      return;
    }

    const user = {
      email: email.value,
      password: password.value,
    };
    
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      const JWToken = await data.accessToken;
      const userDetails = data.user;

      localStorage.setItem("accessToken", JWToken);
      localStorage.setItem("user", JSON.stringify(userDetails)); // Store user info

      setAuth({ token: JWToken, user: userDetails });
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  }

  return (
    <form onSubmit={login}>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        {/* we need the name = 'username' because that's how forms send to the react component
          javascript the content of the form  */}
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </fieldset>

      <button>Login</button>
    </form>
  );
}
