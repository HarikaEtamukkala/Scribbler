function createPost() {
    document.getElementById('createPostModal').style.display='block';
}
function getAllPosts() {
    window.location.href= "./html/postslist.html";
}
function onClose() {
    document.getElementById('newPostModal').style.display='none';
    
}