export function Register() {
  function register(event) {
    event.preventDefault(); // prevents refreshing, because it is a single page application

    const formElement = event.target;
    const { email, username, password, reTypePassword } = formElement;

    if (password.value !== reTypePassword.value) {
      alert("Passwords don't match");
      return;
    }

    if (password.value.length < 8) {
      alert("Password too short");
      return;
    }

    const user = {
      email: email.value,
      username: username.value,
      password: password.value,
    };

    fetch("http://localhost:3000/register", {
      method: "POST",
      // in the header we let the server know that the file we send is a json
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      console.log(response);
    });
  }
  return (
    <form onSubmit={register}>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        {/* we need the name = 'username' because that's how forms send to the react component
      javascript the content of the form  */}
      </fieldset>
      <fieldset>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        {/* we need the name = 'username' because that's how forms send to the react component
        javascript the content of the form  */}
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </fieldset>
      <fieldset>
        <label htmlFor="reTypePassword">Retype password:</label>
        <input type="password" id="reTypePassword" name="reTypePassword" />
      </fieldset>

      <button>Register</button>
    </form>
  );
}
