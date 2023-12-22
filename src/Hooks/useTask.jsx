import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useTask = () => {
    const axios = useAxios();
    const {user} = useAuth();
    const {data: task = [],isPending: loading,refetch, } = useQuery({
      queryKey: ["task"],
      queryFn: async () => {
        const res = await axios.get(`/task/${user?.email}`);
        return res?.data;
      },
    });
  
    return [task, loading, refetch];
};

export default useTask;