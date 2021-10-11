const fetchApi = async (url) => {
    return await fetch(url).then( response => response.json()).then( data => data );
}

const renderPostsTempls = (data) => {
    return `<div class="blog">
    <h3 class="title">[${data.id}] ${data.title}</h3>
    <div class="content">
        <p>${data.body}</p>
    </div>
    <a href="#" data-id="${data.id}" class="blog-link button">Details</a>
</div>`
}



const inserIntoClass = (calssName, content) => {
    const elmt = document.getElementsByClassName(calssName)
    if (elmt.length === 0) {
        console.warn(calssName, ' class not found!');
        return;
    }
    elmt[0].innerHTML = content;
}
const inserIntoModal = (calssName, content) => {
    const elmt = document.getElementsByClassName(calssName)
    if (elmt.length === 0) {
        console.warn(calssName, ' class not found!');
        return;
    }
    elmt[0].innerHTML = content;
}
const onLinkClick = (event) => {
    event.preventDefault(); 
    const targetElmn = event.target;
    const { id } = targetElmn.dataset;

    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    console.log("clcked: ", id)
    modalrender();
}

const render = async () => {
    const posts = await fetchApi('https://jsonplaceholder.typicode.com/posts');    
    const postContent = posts.map( post => renderPostsTempls(post) ).join(''); 

    inserIntoClass('blog-list', postContent);
    onSinglePostActions();
}


const onSinglePostActions = async () => {
    const blogLink = document.getElementsByClassName('blog-link'); 
    for( link of blogLink) {
        link.addEventListener('click', onLinkClick)
    }
}


render();

 