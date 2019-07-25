import React from "react";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "../react-auth0-wrapper";

function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Home Page</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default Home;
