const newFormHandler = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#comment-content').value.trim();

    const id = event.target.getAttribute('data-id');

    console.log("content", content);

    if ( content ) {
    const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace(`/api/posts/${id}`);
    } else {
        alert('Failed to create comment');
    }
    }
    
};
  
if(document.querySelector('.new-comment-form')){

document
.querySelector('.new-comment-form')
.addEventListener('submit', newFormHandler);
}
