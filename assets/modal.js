const renderModalempls = (data) => {
    return `<div class="blog">
    <div class="modal-content">
        <p>${data.body}</p>
    </div>
     <a href="#" data-id="${data.id}" class="modal-link"></a>
</div>`
}


const modalrender = async () => {
    const posts = await fetchApi('https://jsonplaceholder.typicode.com/posts');    
    const postContent = posts.map( post => renderModalempls(post) );
    //console.log(postContent); 
    const modalPost = posts.body;


    inserIntoClass('modal-content', postContent);
    
    onModalPostActions();
}



const onModalPostActions = async () => {
    const modalLink = document.getElementsByClassName('modal-link'); 
    for( link of modalLink) {
        link.addEventListener('click', onLinkClick)
    }
}



const modal = document.getElementById("myModal");

const btn = document.getElementsByClassName("blog-link");

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}