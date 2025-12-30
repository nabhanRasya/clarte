import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router";

function HomePage() {
  const { logout } = useAuth0();
  return (
    <div>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="button logout"
      >
        Log Out
      </button>
      <br />
      <hr />
      <Link to="/scan">
        <button>Scan</button>
      </Link>
    </div>
  );
}

export default HomePage;
