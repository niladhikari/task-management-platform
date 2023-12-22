import  { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import useAxios from '../../../Hooks/useAxios';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';

const TodoList = () => {
  const [task, setTask] = useState([]);
  console.log(task);
  const axios = useAxios(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/task');
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, [axios]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/tasks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            const updatedTasks = task.filter((item) => item._id !== id);
            setTask(updatedTasks);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto mt-8 rounded-xl text-black">
        <table className="table bg-yellow-100">
          <thead>
            <tr className="bg-orange-300 text-black m-10">
              <th></th>
              <th>Todo</th>
              <th>Ongoing</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {task.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div>
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="w-64">{item.descriptions}</p>
                    <div className="flex gap-3">
                      <p>{item.deadlines}</p>
                      <p>{item.priority}</p>
                    </div>
                    <div className="flex flex-col gap-2 lg:flex-row mt-2">
                      <Link to={`/dashboard/updateProduct/${item._id}`}>
                        <button className="btn btn-ghost btn-md bg-orange-300">
                          <FaRegEdit className="text-white text-2xl" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost btn-md bg-red-600"
                      >
                        <RiDeleteBin5Line />
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
