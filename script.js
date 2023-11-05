const locationInput = document.getElementById('location');
const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', async () => {
const location = locationInput.value;

if (!location) {
alert('Please enter a location');
return;
}

// Replace 'YOUR_API_KEY' with your actual Visual Crossing API key
const API_KEY = '3ZXZANLK7RM2HPQUQL2XNDFKD';

// Define the start and end date for the 6-month period
const startDate = '2023-06-07';
const endDate = '2023-11-07';

// Construct the API URL
const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=xlsx`;
// Create a hidden link to download the CSV
const downloadLink = document.createElement('a');
downloadLink.style.display = 'none';

// Set the href attribute to the API URL
downloadLink.href = apiUrl;

// Set the download attribute to specify the file name
downloadLink.download = 'weather_data.csv';

// Trigger a click event on the link to initiate the download
downloadLink.click();
});
