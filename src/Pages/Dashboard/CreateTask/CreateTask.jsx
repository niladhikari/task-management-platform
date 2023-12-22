import SectionTitle from "../../../Componets/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";

const CreateTask = () => {
    const { register, handleSubmit,reset } = useForm();
    const {user} = useAuth();
    const axios = useAxios();
    const onSubmit = async (data) => {
        console.log(data);
        
 
          // now send the menu item data to the server with the image url
          const taskItem = {
            title: data.title,
            deadlines: data.deadlines,
            priority: data.priority,
            email:user.email,
            descriptions: data.descriptions,
          };
          console.log(taskItem);
          const tasksRes = await axios.post("/tasks", taskItem);
          console.log(tasksRes.data);
          if (tasksRes.data.insertedId) {
            // show success popup
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.title} is added to the Task.`,
              showConfirmButton: false,
              timer: 1500,
            });
          }

      };
  return (
    <div>
      <SectionTitle
        subHeading={"For the user"}
        heading={"New Task"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Task Title*</span>
            </label>
            <input
              type="text"
              placeholder="Task Title"
              {...register("title", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Task Deadline*</span>
              </label>
              <input
                type="date"
                placeholder="Deadlines"
                {...register("deadlines", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Priority*</span>
              </label>
              <input
                type="text"
                placeholder="priority"
                {...register("priority", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Descriptions</span>
            </label>
            <textarea
              {...register("descriptions")}
              className="textarea textarea-bordered h-24"
              placeholder="Task Descriptions"
            ></textarea>
          </div>

          <button className="btn bg-orange-700 text-white mt-3">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
