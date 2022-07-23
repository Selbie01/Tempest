function likeClick(){
  if (document.getElementById("heart").src.endsWith('img/like.png') == true){
    document.getElementById("heart").src = "img/like_red.png";
  }
  else if (document.getElementById("heart").src.endsWith('img/like_red.png') == true){
    document.getElementById("heart").src = "img/like.png";
  }
}
function comClick(){
    if (document.getElementById("comment").src.endsWith('img/comment.png') == true){
      document.getElementById("comment").src = "img/comment_dark.png";
    }
    else if (document.getElementById("comment").src.endsWith('img/comment_dark.png') == true){
      document.getElementById("comment").src = "img/comment.png";
    }
  }