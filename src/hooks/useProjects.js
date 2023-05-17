import { useCallback, useState } from "react";
import mainService from "services/MainService";

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getProjects = useCallback(async () => {
        try {
            setLoading(true);
            const response = await mainService.getData();
            const sortedList = response.sort((a, b) => a.start_date < b.start_date);
            setProjects(sortedList);
        } catch (error) {
            setError(error?.message);
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    return { error, getProjects, loading, projects };
};

export default useProjects;
