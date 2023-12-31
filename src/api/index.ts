const url= 'http://localhost:8000'

export const loginApi = async () => {
    try {
      const response = await fetch(`${url}/auth/google`, {
        method: "GET",
        headers: { 'Content-type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error('Network Error');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in loginApi:', error);
      throw error; 
    }
  }


  export const FetchStepCounts = async (access_token:any, refresh_token:any) => {
    try {
      const response = await fetch(`${url}/auth/fetch-data`, {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ access_token, refresh_token })
      });
  
      if (!response.ok) {
        throw new Error('Network Error');
      }
  
      const data = await response.json(); 
      console.log(data, "Response"); 
  
      return data;
    } catch (error) {
      console.error('Error in FetchStepCounts:', error);
      throw error;
    }
  }
  

  export const FetchAllData = async (access_token:string, refresh_token:string) => {
    try {
      const response = await fetch(`${url}/auth/fetch-all`, {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ access_token, refresh_token })
      });
  
      if (!response.ok) {
        throw new Error('Network Error');
      }
  
      const data = await response.json(); 
      console.log(data, "Response"); 
  
      return data;
    } catch (error) {
      console.error('Error in FetchStepCounts:', error);
      throw error;
    }
  }
  