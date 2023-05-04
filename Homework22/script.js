const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
  const postId = document.getElementById('postId').value;
  getPostById(postId)
    .then(post => {
      showPost(post);
    })
    .catch(error => {
      console.error(error);
      const postBlock = document.getElementById('postBlock');
      postBlock.textContent = 'Пост не знайдено';
    });
});

function getPostById(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Пост не знайдено');
    });
}

function showPost(post) {
  const postBlock = document.createElement('div');
  postBlock.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
  `;
  const commentsBtn = document.createElement('button');
  commentsBtn.textContent = 'Коментарі';
  commentsBtn.addEventListener('click', () => {
    getCommentsByPostId(post.id)
      .then(comments => {
        showComments(comments);
      })
      .catch(error => {
        console.error(error);
        const commentsBlock = document.getElementById('commentsBlock');
        commentsBlock.textContent = 'Помилка при отриманні коментарів';
      });
  });
  postBlock.appendChild(commentsBtn);
  const postContainer = document.getElementById('postBlock');
  postContainer.innerHTML = '';
  postContainer.appendChild(postBlock);
}

function getCommentsByPostId(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Коментарі не знайдено');
    });
}

function showComments(comments) {
  const commentsBlock = document.createElement('div');
  comments.forEach(comment => {
    const commentBlock = document.createElement('div');
    commentBlock.innerHTML = `
      <h4>${comment.name} (${comment.email})</h4>
      <p>${comment.body}</p>
    `;
    commentsBlock.appendChild(commentBlock);
  });
  const commentsContainer = document.getElementById('commentsBlock');
  commentsContainer.innerHTML = '';
  commentsContainer.appendChild(commentsBlock);
}
