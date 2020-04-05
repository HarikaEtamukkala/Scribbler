var postId;
function onDeletePost(post) {
  postId = post;
  console.log(postId);
  document.getElementById('deletePostPrompt').style.display = 'block';
}

function onCloseDeleteClicked() {
  document.getElementById('deletePostPrompt').style.display = 'none';
}

function onYesClicked() {
  console.log(postId + "second");
  console.log(document.getElementById(postId));
  document.getElementById(postId).style.display = 'none';
  document.getElementById('deletePostPrompt').style.display = 'none';
}

function fullPost() {
  window.location.href = "./post.html";
}