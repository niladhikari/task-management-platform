import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Componets/SectionTitle/SectionTitle";


const Update = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <SectionTitle subHeading={'gg'} heading={'gg'}></SectionTitle>
        </div>
    );
};

export default Update;