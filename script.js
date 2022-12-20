var pics = ["https://www.si.edu/sites/default/files/styles/social_media/public/blog/crab_nebula.jpg?itok=l-fZ5PRC","https://img.freepik.com/premium-photo/panorama-space-scene-with-planets-stars-galaxies-banner-template-many-nebulae-galaxies-space-many-light-years-away-deep-universe-large-scale-structure-3d-rendered_91497-7933.jpg?w=2000","https://today.duke.edu/sites/default/files/SpaceDiplomacy_Background_Ben--Moved%20Moon%5B22%5D.jpg"];
let inputPic;

$(".add").click(function(){
    $(".gallery").text("");
	inputPic = $(".picture-url").val();
    pics.push(inputPic);
    for (var photos of pics){
    	$(".gallery").append("<img src=" + photos +">");
    }
});

