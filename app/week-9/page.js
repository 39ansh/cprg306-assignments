// import React from "react";
// import { useUserAuth } from "./_utils/auth-context";

// const Page = () => {
//   const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       {user ? (
//         <>
//           <p>
//             Welcome, {user.displayName} ({user.email})
//           </p>
//           <button onClick={firebaseSignOut}>Logout</button>
//           <br />
//           <a href="/shopping-list">Go to Shopping List</a>
//         </>
//       ) : (
//         <button onClick={gitHubSignIn}>Login with GitHub</button>
//       )}
//     </div>
//   );
// };

// export default Page;




import React from "react";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={firebaseSignOut}>Logout</button>
          <br />
          <a href="/week-9/shopping-list/page">Go to Shopping List</a>
        </>
      ) : (
        <button onClick={handleLogin}>Login with GitHub</button>
      )}
    </div>
  );
};

export default Page;
