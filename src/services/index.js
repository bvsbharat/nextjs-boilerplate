import axios from "axios";
import allJobs from "./jobs";

axios.defaults.baseURL = process.env.API_URL;

export { allJobs };
