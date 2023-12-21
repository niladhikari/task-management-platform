import Banner from "./Banner/Banner";
import TaskManagementUsers from "./TaskManagementUsers/TaskManagementUsers";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TaskManagementUsers></TaskManagementUsers>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;