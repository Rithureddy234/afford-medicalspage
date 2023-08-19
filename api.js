// api.js
// Implement API calls and authentication logic here

const baseUrl = 'http://20.244.56.144:80/train'; // Base URL for API calls

// Sample registration data
const registrationData = {
  companyName: 'Train Central',
  ownerName: 'Ram',
  rollNo: '1',
  ownerEmail: 'ram@abc.edu',
  accessCode: 'FKDLjg',
};

// Sample authentication data
const authData = {
  companyName: 'Train Central',
  clientID: 'b46128a-fbde-4c16-a4b1-6ae6ad718e27',
  ownerName: 'a',
  ownerEmail: 'ram@abc.edu',
  rollNo: '1',
  clientSecret: 'Xoyo10PayBOGAN',
};

export const registerCompany = async () => {
  return {
    companyName: 'Train Central',
    clientID: 'b46128a0-fbde-4c16-a4b1-6ae6ad718e27',
    clientSecret: 'XOyo1ORPayKBOdAN',
  };
};

export const getAuthorizationToken = async () => {
  return 'YOUR_AUTHORIZATION_TOKEN';
};

export const getAllTrains = async () => {
  try {
    // Implement API call to get all trains
    const authToken = await getAuthorizationToken();
    const response = await fetch(`${baseUrl}/trains`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all trains:', error);
    throw error;
  }
};

export const getTrainDetails = async (trainNumber) => {
  try {
    // Implement API call to get train details by train number
    const authToken = await getAuthorizationToken();
    const response = await fetch(`${baseUrl}/train/${trainNumber}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching train details:', error);
    throw error;
  }
};
