const apiKey =
  'RatOGx_n6gQbmdD4iHAd2nzB-QKGJ9ieMlo-2ivp_iTV7Ndq2DTnJHqXxzfb2Six393FC3WgBGZkNvZzFkxDcWKSZefb8RkARviv6GofbqxjCp9j9hfSzaYUCOmbaHYx';

const searchYelp = async (term, location, sortBy) => {
  const corsUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`, // Use Bearer token for authorization
    },
  };

  try {
    const response = await fetch(corsUrl + url, options);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error fetching data from Yelp API:', error);
  }
};

export default searchYelp;
