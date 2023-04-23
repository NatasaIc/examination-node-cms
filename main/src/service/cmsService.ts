import axios from "axios";
import { Audio, AudioSingle} from "../models/audio";
import { Computer, ComputerSingle } from "../models/computer";
import { Mobile, MobileSingle } from "../models/mobile";
import { Television, TelevisonSingle } from "../models/television";



const baseURL = "http://localhost:1337/api";

/***************Audio GET POST PUT DELETE***************/
export const getAudios = async () => {
    const response = await axios.get<Audio>(`${baseURL}/audios`)
    return response.data;
};

export const getAudio = async (id: number) => {
const response = await axios.get<AudioSingle>(`${baseURL}/audios/${id}`)
  return response.data;
};

export const createAudio = async (audioData: AudioSingle) => {
const response = await axios.post(`${baseURL}/audios/`, audioData)
return response.status;
}

export const updateAudio = async (id: number, audioData: AudioSingle) => {
  const response = await axios.put(`${baseURL}/audios/${id}`, audioData)
  return response.status;
}

export const deleteAudio = async (id: number) => {
  const response = await axios.delete(`${baseURL}/audios/${id}`)
  return response.status;
}

/***************Computer GET POST PUT DELETE***************/
export const getComputers = async () => {
    const response = await axios.get<Computer>(`${baseURL}/computers/`)
    return response.data;
};

export const getComputer = async (id: number) => {
const response = await axios.get<ComputerSingle>(`${baseURL}/computers/${id}`)
  return response.data;
};

export const createComputer = async (computerData: ComputerSingle) => {
const response = await axios.post(`${baseURL}/computers`, computerData)
return response.status;
}

export const updateComputer = async (id: number, computerData: ComputerSingle) => {
  const response = await axios.put(`${baseURL}/computers/${id}`, computerData)
  return response.status;
}

export const deleteComputer = async (id: number) => {
  const response = await axios.delete(`${baseURL}/computers/${id}`)
  return response.status;
}

/*************Mobile GET POST PUT DELETE**************/
export const getMobiles = async () => {
    const response = await axios.get<Mobile>(`${baseURL}`)
    return response.data;
};

export const getMobile = async (id: number) => {
const response = await axios.get<MobileSingle>(`${baseURL}/mobiles/${id}`)
  return response.data;
};

export const createMobile = async (mobileData: MobileSingle) => {
const response = await axios.post(`${baseURL}/mobiles`, mobileData)
return response.status;
}

export const updateMobile = async (id: number, mobileData: MobileSingle) => {
  const response = await axios.put(`${baseURL}/mobiles/${id}`, mobileData)
  return response.status;
}

export const deleteMobile = async (id: number) => {
  const response = await axios.delete(`${baseURL}/mobiles/${id}`)
  return response.status;
}

/***************Television GET POST PUT DELETE***************/
export const getTelevisions = async () => {
    const response = await axios.get<Television>(`${baseURL}/televisions`)
    return response.data;
};

export const getTelevision = async (id: number) => {
const response = await axios.get<TelevisonSingle>(`${baseURL}/television/${id}`)
  return response.data;
};

export const createTelevision = async (televisionData: TelevisonSingle) => {
const response = await axios.post(`${baseURL}/televisions`, televisionData)
return response.status;
}

export const updateTelevision = async (id: number, televisionData: TelevisonSingle) => {
  const response = await axios.put(`${baseURL}/televisions/${id}`, televisionData)
  return response.status;
}

export const deleteTelevision = async (id: number) => {
  const response = await axios.delete(`${baseURL}/televisions/${id}`)
  return response.status;
}

