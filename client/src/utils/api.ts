//class for work with rest api
enum methods {
    POST = 'POST',
    PUT = 'PUT'
}
export class Api {
  private readonly headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  //method for get data from server
  async get(url: string) {
    const response = await fetch(url);
    return await response.json();
  }
  //method for post data to server
  async post(url: string, data: any) {
    const response = await fetch(url, {
      method: methods.POST,
      headers: this.headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}
