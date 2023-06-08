document.getElementById('apiForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Clear previous results
  document.getElementById('output').innerText = '';
  document.getElementById('idContainer').innerText = '';
  document.getElementById('controllerContainer').innerText = '';

  // Show loader
  document.getElementById('loader').classList.remove('hidden');

  const endpoint = document.getElementById('endpointInput').value.trim();
  const apiUrl = 'https://swapi.dev/api/';

  fetch(apiUrl + endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Hide loader
      document.getElementById('loader').classList.add('hidden');
      document.getElementById('resultContainer').classList.remove('hidden');

      // Display formatted response
      document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      // Hide loader
      document.getElementById('loader').classList.add('hidden');
      document.getElementById('resultContainer').classList.remove('hidden');

      // Display error message
      document.getElementById('output').innerText = `Error: ${error.message}`;
    });
});
