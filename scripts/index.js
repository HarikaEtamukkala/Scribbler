function createPost() {
    document.getElementById('createPostModal').style.display='block';
}
function getAllPosts() {
    window.location.href= "./html/postslist.html";
}
function onClosePostModal() {
    document.getElementById('newPostModal').style.display='none';
    
}