const editFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const post_id = document.querySelector('.post-id').id;
  
    if ( title && content ) {
      const response = await fetch(`/api/posts${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };

if(document.querySelector('.edit-post-form')){

document
.querySelector('.edit-post-form')
.addEventListener('submit', editFormHandler);
}