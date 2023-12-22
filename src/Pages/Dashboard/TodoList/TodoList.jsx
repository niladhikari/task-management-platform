import Swal from "sweetalert2";
import SectionTitle from "../../../Componets/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import useTask from "../../../Hooks/useTask";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

const TodoList = () => {
  const [task,refetch] = useTask();
  const axios = useAxios();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/tasks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        subHeading={"For the user"}
        heading={"Todo List Task"}
      ></SectionTitle>

      <div className="overflow-x-auto mt-8 rounded-xl ">
        <table className="table bg-yellow-100">
          {/* head */}
          <thead>
            <tr className="bg-orange-300 m-10">
              <th></th>
              <th>Todo</th>
              <th>Ongoing</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {task?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="">
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="w-64">{item.descriptions}</p>
                    <div className="flex gap-3">
                      <p>{item.deadlines}</p>
                      <p>{item.priority}</p>
                    </div>
                    <div className="flex flex-col gap-2 lg:flex-row mt-2">
                    <Link to={`/dashboard/updateProduct/${item._id}`}>
                      <button
                        className="btn btn-ghost btn-md bg-orange-300"
                      >
                        <FaRegEdit className="text-white text-2xl" />
                      </button>
                    </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost btn-md bg-red-600"
                      >
                        <RiDeleteBin5Line></RiDeleteBin5Line>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
