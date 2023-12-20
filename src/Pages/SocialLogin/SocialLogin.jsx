

import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
  const { SignInGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSocialLogin = () => {
    SignInGoogle()
      .then((res) => {
        console.log(res.user.auth.email);
        toast.success(" Successfully Login");
        setTimeout(() => {
          navigate("/");
        }, 2000);
        // const user = { email };
        fetch("https://brand-shop-server-vert.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(res.user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })

      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div>
      <div className="p-4 space-y-3 mb-7 text-center grid w-96 m-auto">
        <button
          onClick={handleSocialLogin}
          className="btn btn-outline  text-blue-600 "
        >
          <FaGoogle></FaGoogle>
          Google Login
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default SocialLogin;