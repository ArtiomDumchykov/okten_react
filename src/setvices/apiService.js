import axios from "axios";

import { baseURL } from "../constans";

export const instanceAxios = axios.create({baseURL});