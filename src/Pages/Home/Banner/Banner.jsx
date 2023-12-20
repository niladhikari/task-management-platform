import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="mt-6 lg:mt-1 max-w-[1300px] mx-auto background py-4 lg:py-0 lg:h-[80vh] grid justify-center items-center">
      <div className=" flex flex-col-reverse lg:flex-row justify-around gap-6 items-center px-6">
        <div>
          <h2 className="text-center text-xl md:text-3xl font-bold text-red-400 mb-3 md:mb-0">
            A task management platform streamlines productivity by efficiently
            organizing and tracking assignments across teams and individuals.
          </h2>
          <div className="grid justify-center">
            <Link to={'/login'}>
              <button className="btn bg-teal-400 text-xl font-bold mt-9 mx-auto">
                Let’s Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
