function likeClick(){
  if (document.getElementById("heart").src.endsWith('img/like.png') == true){
    document.getElementById("heart").src = "img/like_red.png";
  }
  else if (document.getElementById("heart").src.endsWith('img/like_red.png') == true){
    document.getElementById("heart").src = "img/like.png";
  }
}
function comHover(){
    if (document.getElementById("message").src.endsWith('img/comment.png') == true){
      document.getElementById("message").src = "img/comment_dark.png";
    }
  }
function comLeave(){
    if (document.getElementById("message").src.endsWith('img/comment_dark.png') == true){
      document.getElementById("message").src = "img/comment.png";
    }
}