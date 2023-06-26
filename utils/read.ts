import axios, { AxiosResponse } from "axios";

class readservice {
  read(bnum: string): Promise<AxiosResponse<any, any>> {
    return axios.get("http://localhost:5001/api/post" + bnum);
  }
}
export default new readservice();
