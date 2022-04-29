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
                'https://www.slippi-replay.store/replays-by-connect-code?connectCode=' + encodeURIComponent(connectCode.toUpperCase()),
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
        await axios.post('https://www.slippi-replay.store/add-replay', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        });
    }

    public async deleteSlpReplaysExceptLatest(connectCode: string, num: number) {
        await axios.delete('https://www.slippi-replay.store/delete-replays-by-connect-code-excluding-latest?connectCode=' 
            + encodeURIComponent(connectCode.toUpperCase()) + "&num=" + num);
        
        console.log("Finished deleting for connect code " + connectCode + " except for the " + num + " latest replays");
    }
}

export const api = new Api()