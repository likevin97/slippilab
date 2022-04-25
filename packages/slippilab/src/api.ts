import axios from 'axios';

export interface SlpReplay {
  id: string;
  connectCode: string;
  fileName: string;
  fileData: string;
  contentType: string;
  createdAt: Date;
};

export interface GetReplaysResponse {
  data: SlpReplay[];
}


export class Api {

    public async getSlpReplays(connectCode: string) {
        try {
            // 👇️ const data: GetUsersResponse
            const { data, status } = await axios.get<GetReplaysResponse>(
                'http://localhost:8080/replays-by-connect-code?connectCode=' + encodeURIComponent(connectCode.toUpperCase()),
                {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    Accept: 'application/json',
                },
                },
            );
      
            // console.log(JSON.stringify(data, null, 4));
        
            // 👇️ "response status is: 200"
            console.log('response status is: ', status);

            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    public async postSlpReplays(connectCode: string, file: File) {
        const formData = new FormData();
        formData.append("file", file, file.name);
        formData.append("connectCode", connectCode.toUpperCase())
        axios.post('http://localhost:8080/add-replay', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export const api = new Api()