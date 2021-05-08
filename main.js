var images=["https://i.postimg.cc/hjXMQq1F/IMG-9598.jpg","https://i.postimg.cc/YS9zTwV4/IMG-8981.jpg","https://i.postimg.cc/J4Frj3L9/IMG-0282.jpg","https://i.postimg.cc/xdv9rWz2/IMG-3602.jpg";
var family_names=["ME","MAMA","PAPA","ARJUN"];

var i=0;
function next_page(){
document.getElementById("name").innerHTML=family_names[i];
document.getElementById("cover_page").src=images[i];
i++;
}
