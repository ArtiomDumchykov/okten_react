import axios from "axios";
import { rickmortyURL } from "../constans";

export const instanseAxiosRickMorty = axios.create({baseURL: rickmortyURL});