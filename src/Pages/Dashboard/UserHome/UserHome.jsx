import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>User Home</title>
      </Helmet>
      <div className="grid justify-center">
        <img className="w-24" src={user.photoURL} alt="" />
        <h2 className="text-3xl mt-3">
          <span>Hi, Welcome </span>
          {user?.displayName ? user.displayName : "Back"}
        </h2>
      </div>
    </div>
  );
};

export default UserHome;
