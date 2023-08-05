import axios from "axios";

import { jsonBaseURL } from "../constans";

export const instanceAxiosJsonPL = axios.create({baseURL: jsonBaseURL});