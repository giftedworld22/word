const pageURL = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent(document.title);

function popup(url){

window.open(
url,
"_blank",
"width=650,height=550"
);

}

function shareFacebook(){

popup(`https://www.facebook.com/sharer/sharer.php?u=${pageURL}`);

}

function shareTwitter(){

popup(`https://twitter.com/intent/tweet?url=${pageURL}&text=${pageTitle}`);

}

function shareWhatsapp(){

window.open(`https://wa.me/?text=${pageTitle}%20${pageURL}`,"_blank");

}

function shareLinkedIn(){

popup(`https://www.linkedin.com/sharing/share-offsite/?url=${pageURL}`);

}

function shareTelegram(){

popup(`https://t.me/share/url?url=${pageURL}&text=${pageTitle}`);

}

function shareReddit(){

popup(`https://reddit.com/submit?url=${pageURL}&title=${pageTitle}`);

}

function sharePinterest(){

popup(`https://pinterest.com/pin/create/button/?url=${pageURL}&description=${pageTitle}`);

}

function shareEmail(){

window.location.href=
`mailto:?subject=${pageTitle}&body=${pageURL}`;

}

async function copyLink(){

try{

await navigator.clipboard.writeText(window.location.href);

alert("Link copied successfully!");

}catch{

prompt("Copy this link:",window.location.href);

}

}

async function nativeShare(){

if(navigator.share){

try{

await navigator.share({

title:document.title,
text:document.title,
url:window.location.href

});

}catch(err){}

}else{

alert("Your browser doesn't support native sharing.");

}

}