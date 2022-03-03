const commentHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-text').value.trim();
    const wine_id = document.querySelector('').value.trim();

    if(comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
              wine_id,
              comment_text
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
        
          if (response.ok) {
            document.location.reload();
          } else {
            alert(response.statusText);
          }
    }
}

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentHandler);