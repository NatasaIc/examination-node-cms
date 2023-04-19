import axios from "axios";
import { Audio} from "../models/audio";
import { Computer } from "../models/computer";
import { Mobile } from "../models/mobile";
import { Television } from "../models/television";


const client = axios.create({
    baseURL: "http://localhost:1337/api",
  });

export class CMSClient {
constructor() {}
/***************Audio GET POST PUT DELETE***************/
public async getAudios(): Promise<any> {
    const response = await client.get('/audios')
    return response.data;
};

public async getAudio(id: number): Promise<any> {
const response = await client.get(`/audios/${id}`)
  return response.data;
};

public async createAudio(audioData: Audio): Promise<any> {
const response = await client.put(`/audios`, audioData)
return response.data
}

public async updateAudio(id: number, audioData: Audio): Promise<any> {
  const response = await client.put(`/audios/${id}`, audioData)
  return response.data
}

public async deleteAudio(id: number): Promise<any> {
  const response = await client.get(`/audios/${id}`)
  return response.data
}

/***************Computer GET POST PUT DELETE***************/
public async getComputers(): Promise<any> {
    const response = await client.get('/computers')
    return response.data;
};

public async getComputer(id: number): Promise<any> {
const response = await client.get(`/computers/${id}`)
  return response.data;
};

public async createComputer(computerData: Computer): Promise<any> {
const response = await client.put(`/computers`, computerData)
return response.data
}

public async updateComputer(id: number, computerData: Computer): Promise<any> {
  const response = await client.put(`/computers/${id}`, computerData)
  return response.data
}

public async deleteComputer(id: number): Promise<any> {
  const response = await client.get(`/computers/${id}`)
  return response.data
}

/*************Mobile GET POST PUT DELETE**************/
public async getMobiles(): Promise<any> {
    const response = await client.get('/mobiles')
    return response.data;
};

public async getMobile(id: number): Promise<any> {
const response = await client.get(`/mobiles/${id}`)
  return response.data;
};

public async createMobile(mobileData: Mobile): Promise<any> {
const response = await client.put(`/mobiles`, mobileData)
return response.data
}

public async updateMobile(id: number, mobileData: Mobile): Promise<any> {
  const response = await client.put(`/mobiles/${id}`, mobileData)
  return response.data
}

public async deleteMobile(id: number): Promise<any> {
  const response = await client.get(`/mobiles/${id}`)
  return response.data
}

/***************Television GET POST PUT DELETE***************/
public async getTelevisions(): Promise<any> {
    const response = await client.get('/televisions')
    return response.data;
};

public async getTelevision(id: number): Promise<any> {
const response = await client.get(`/television/${id}`)
  return response.data;
};

public async createTelevision(televisionData: Television): Promise<any> {
const response = await client.put(`/televisions`, televisionData)
return response.data
}

public async updateTelevision(id: number, televisionData: Television): Promise<any> {
  const response = await client.put(`/televisions/${id}`, televisionData)
  return response.data
}

public async deleteTelevision(id: number): Promise<any> {
  const response = await client.get(`/televisions/${id}`)
  return response.data
}

}