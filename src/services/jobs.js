import axios from "axios";

const allJobs = async (options) => {
    try {
        const posted = await axios.get("jobs", options);
        if (posted) return posted;
    } catch (error) {
        return false;
    }
};

export default allJobs;
