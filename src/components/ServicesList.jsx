import { useState } from "react";
import Service from "../components/Service";

const ServicesList = () => {
    const [list, setList] = useState([])
    return (
        <>
        <p>{list}</p>
        </>
    )
}

export default ServicesList;