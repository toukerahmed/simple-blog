const fetchApi = async (url) => {
    return await fetch(url).then( response => response.json()).then( data => data );
}

const renderPostsTempls = (data) => {
    return `<div class="blog">
    <h3 class="title">[${data.id}] ${data.title}</h3>
    <div class="content">
        <p>${data.body}</p>
    </div>
    <a href="#">Details</a>
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

const renderPosts = async () => {
    const posts = await fetchApi('https://jsonplaceholder.typicode.com/posts');    
    const postContent = posts.map( post => renderPostsTempls(post) ).join(''); 

    inserIntoClass('blog-list', postContent)
}
 

renderPosts();
 