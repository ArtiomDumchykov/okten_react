import axios from "axios";

import { owuBaseURl } from "../constans";

export const instanceAxiosCars = axios.create({baseURL: owuBaseURl});