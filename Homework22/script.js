document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-btn');
  const inputId = document.getElementById('input-id');
  const postContainer = document.getElementById('post-container');
  const commentBtn = document.getElementById('comment-btn');
  const commentContainer = document.getElementById('comment-container');
  
  searchBtn.addEventListener('click', () => {
    const id = inputId.value;
    if (!id || id < 1 || id > 100) {
      alert('Please enter a valid ID between 1 and 100.');
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        postContainer.innerHTML = `
          <h2>${data.title}</h2>
          <p>${data.body}</p>
        `;
        commentBtn.style.display = 'block';
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred while fetching data.');
      });
  });

  commentBtn.addEventListener('click', () => {
    const id = inputId.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(response => response.json())
      .then(data => {
        commentContainer.innerHTML = '';
        data.forEach(comment => {
          commentContainer.innerHTML += `
            <h4>${comment.name}</h4>
            <p>${comment.body}</p>
            <hr>
          `;
        });
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred while fetching comments.');
      });
  });
});
