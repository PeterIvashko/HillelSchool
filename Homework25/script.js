document.getElementById('apiForm').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('output').innerText = '';
  document.getElementById('idContainer').innerText = '';
  document.getElementById('controllerContainer').innerText = '';

  document.getElementById('loader').classList.remove('hidden');

  const endpoint = document.getElementById('endpointInput').value.trim();
  const apiUrl = document.getElementById('apiUrlInput').value.trim();

  fetch(apiUrl + endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('loader').classList.add('hidden');
      document.getElementById('resultContainer').classList.remove('hidden');

      document.getElementById('output').innerText = JSON.stringify(data, null, 2);

      if (data.hasOwnProperty('Id')) {
        document.getElementById('idContainer').innerText = `Id: ${data.Id}`;
      } else {
        document.getElementById('idContainer').innerText = 'Id not found';
      }

      if (data.hasOwnProperty('controller')) {
        document.getElementById('controllerContainer').innerText = `Controller: ${data.controller}`;
      } else {
        document.getElementById('controllerContainer').innerText = 'Controller not found';
      }
    })
    .catch(error => {
      document.getElementById('loader').classList.add('hidden');
      document.getElementById('resultContainer').classList.remove('hidden');

      document.getElementById('output').innerText = `Error: ${error.message}`;
    });
});
