import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import { PropTypes } from 'prop-types';
import Lottie from 'lottie-react';
import loadAnim from '../assets/animations/LoadingAnimation.json';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <Lottie animationData={loadAnim} />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
  };
export default PrivateRoute;