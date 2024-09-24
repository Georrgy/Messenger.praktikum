//class for work with rest api
enum methods {
    POST = 'POST',
    PUT = 'PUT'
}
export const baseUrl= 'http://localhost:3001'
export class Api {
  static readonly headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  //method for get data from server
  static async  get(url: string) {
    const response = await fetch(url);
    return await response.json();
  }
  //method for post data to server
  static async post(url: string, data: object) {
    const response = await fetch(baseUrl+url, {
      method: methods.POST,
      headers: this.headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}
