console.log("loaded");
const commentHandler = async (event) => {
    event.preventDefault();
    console.log("something was done");

    const comment = document.querySelector('#comment-text').value.trim();
    // const wine_id = document.querySelector('').value.trim();

    if(comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
              // wine_id,
              comment
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
        
          if (response.ok) {
            console.log(response);
            document.location.reload();
          } else {
            alert(response.statusText);
          }
    }
}

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentHandler);