const renderModalempls = (data) => {
	return `<div class="blog">
    <h3>${data.title}</h3>
    <div class="content">
        <p>${data.body}</p>
    </div>
</div>`;
};

const modalrender = async (id) => {
	// Remove all content from modal body
	inserIntoClass('modal-content', '');
	// call api for fetch the post by ID
	const post = await fetchApi(`https://jsonplaceholder.typicode.com/posts/${id}`);
	// Generate post content markup
	const postContent = renderModalempls(post);
	// Insert post content into modal body
	inserIntoClass('modal-content', postContent);

	onModalPostActions();
};

const onModalPostActions = async () => {
	const modalLink = document.getElementsByClassName('modal-link');
	for (link of modalLink) {
		link.addEventListener('click', onLinkClick);
	}
};

const modal = document.getElementById('myModal');

const btn = document.getElementsByClassName('blog-link');

const span = document.getElementsByClassName('close')[0];

span.onclick = function () {
	modal.style.display = 'none';
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
