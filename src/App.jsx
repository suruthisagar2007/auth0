import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <>
          <h2>Welcome {user.name}</h2>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}