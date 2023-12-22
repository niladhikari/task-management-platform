import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Componets/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const {_id,title,priority,deadlines,descriptions} = useLoaderData();
    console.log(descriptions);
    const axios = useAxios();
    const onSubmit = async (data) => {
          const taskItem = {
            title: data.title,
            deadlines: data.deadlines,
            priority: data.priority,
            descriptions: data.descriptions,
          };
          console.log(taskItem);
          const menuRes = await axios.put(`/tasks/${_id}`, taskItem);

          if (menuRes.data.modifiedCount > 0) {
            // show success popup
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.title} is updated to the menu.`,
              showConfirmButton: false,
              timer: 1500,
            });
          }

      };
    return (
        <div>
            <SectionTitle subHeading={'Add new Thinks'} heading={'Update Task'}></SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Task Title*</span>
            </label>
            <input
              type="text"
              placeholder="Task Title"
              defaultValue={title}
              {...register("title", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
  
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Task Deadline*</span>
              </label>
              <input
                type="date"
                placeholder="Deadlines"
                defaultValue={deadlines}
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
                defaultValue={priority}
                {...register("priority", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Descriptions</span>
            </label>
            <textarea
              defaultValue={descriptions}
              {...register("descriptions")}
              className="textarea textarea-bordered h-24"
              placeholder="Task Descriptions"
            ></textarea>
          </div>

          <button className="btn bg-orange-700 text-white mt-3">
            Update Task
          </button>
        </form>
      </div>
        </div>
    );
};
export default UpdateProduct;


