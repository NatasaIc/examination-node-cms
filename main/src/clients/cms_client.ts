import axios from "axios";


const client = axios.create({
    baseURL: "http://localhost:1337/api",
  });

export class CMSClient {
constructor() {}

public async getAudios(): Promise<any> {
    const response = await client.get('/audios')
    return response.data;
};

public async getAudio(id: number): Promise<any> {
const response = await client.get(`/audios/${id}`)
  return response.data;
};

public async deleteAudio(id: number): Promise<any> {
  const response = await client.get(`/audios/${id}`)
  return response.data
}

public async getComputers(): Promise<any> {
    const response = await client.get('/computers')
    return response.data;
};

public async getComputer(id: number): Promise<any> {
const response = await client.get(`/computers/${id}`)
  return response.data;
};

public async deleteComputer(id: number): Promise<any> {
  const response = await client.get(`/computers/${id}`)
  return response.data
}

public async getMobiles(): Promise<any> {
    const response = await client.get('/mobiles')
    return response.data;
};

public async getMobile(id: number): Promise<any> {
const response = await client.get(`/mobiles/${id}`)
  return response.data;
};

public async deleteMobile(id: number): Promise<any> {
  const response = await client.get(`/mobiles/${id}`)
  return response.data
}


public async getTelevisions(): Promise<any> {
    const response = await client.get('/televisions')
    return response.data;
};

public async getTelevision(id: number): Promise<any> {
const response = await client.get(`/television/${id}`)
  return response.data;
};

public async deleteTelevision(id: number): Promise<any> {
  const response = await client.get(`/televisions/${id}`)
  return response.data
}

}