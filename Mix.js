<!-- JS End-->
<script type='text/javascript'>
/*<![CDATA[*/
// JavaScript Document
function rm(id) {
    var p = document.getElementById(id);
    imgtag = "";
    img = p.getElementsByTagName("img");
    if (img.length >= 1) imgtag = '';
    else imgtag = '';
    p.innerHTML = imgtag + '<a href="' + y + '"><img class="img-responsive" src="' + img[0].src + '"><div class="overlay"><div class="portfolio-title text-center"><h4 class="font-nixie sjtitle">' + x + '</h4><p class="small font-tinos">' + u + '</p></div></div></a>'
}
function authorshow(data) {
for (var i = 0; i < 1; i++) {
var entry = data.feed.entry[i];
var avtr = entry.author[0].gd$image.src;
document.write('<img width="100" height="100" src="' + avtr + '"/>');

}
}
/*]]>*/</script>
<script>//<![CDATA[
var classicMode = false ;
var summary = 50;
var indent = 3;
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();

function related_results_labels_thumbs(json) {
for (var i = 0; i < json.feed.entry.length; i++) {
var entry = json.feed.entry[i];
relatedTitles[relatedTitlesNum] = entry.title.$t;
try 
{thumburl[relatedTitlesNum]=entry.media$thumbnail.url;}


catch (error){

s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);
if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))
{thumburl[relatedTitlesNum]=d;} else {if(typeof(defaultnoimage) !== 'undefined') thumburl[relatedTitlesNum]=defaultnoimage; else thumburl[relatedTitlesNum]="http://4.bp.blogspot.com/-ZoL4BRpPhkw/U6wnup4_6gI/AAAAAAAAACA/sKpM61pmJPo/s1600/no_pic_available.jpg";}

}

if(relatedTitles[relatedTitlesNum].length>35) relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0, 35)+"...";
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
relatedUrls[relatedTitlesNum] = entry.link[k].href;
relatedTitlesNum++;


}
}
}
}
function removeRelatedDuplicates_thumbs() {
var tmp = new Array(0);
var tmp2 = new Array(0);
var tmp3 = new Array(0);
for(var i = 0; i < relatedUrls.length; i++) {
if(!contains_thumbs(tmp, relatedUrls[i])) 
{
tmp.length += 1;
tmp[tmp.length - 1] = relatedUrls[i];
tmp2.length += 1;
tmp3.length += 1;
tmp2[tmp2.length - 1] = relatedTitles[i];
tmp3[tmp3.length - 1] = thumburl[i];
}
}
relatedTitles = tmp2;
relatedUrls = tmp;
thumburl=tmp3;


}
function contains_thumbs(a, e) {
for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
return false;
}
function printRelatedLabels_thumbs(current) {
for(var i = 0; i < relatedUrls.length; i++)
{
if((relatedUrls[i]==current)||(!relatedTitles[i]))
{
relatedUrls.splice(i,1);
relatedTitles.splice(i,1);
thumburl.splice(i,1);
i--;
}
}


var r = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;

while (i < relatedTitles.length && i < 20 && i<maxresults) {
tmb = thumburl[r].replace('s72-c/','s300-c/');

document.write('<div class="item-related"><a href="' + relatedUrls[r] + '"><img width="150" height="100" src="'+tmb+'"/></a><h3><a href="' + relatedUrls[r] + '">'+relatedTitles[r]+'</a></h3></div>');i++;


if (r < relatedTitles.length - 1) {
r++;
} else {
r = 0;
}

}

relatedUrls.splice(0,relatedUrls.length);
thumburl.splice(0,thumburl.length);
relatedTitles.splice(0,relatedTitles.length);

}
function removeHtmlTag(strx,chop){
	var s = strx.split("<");
	for(var i=0;i<s.length;i++){
		if(s[i].indexOf(">")!=-1){
			s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
		}
	}
	s =  s.join("");
	s = s.substring(0,chop-1);
	return s;
}
//]]>></script>
<script>
$(document).ready(function(){
    $("#pull").click(function(){
        $(".navbar-collapse").slideToggle("slow");
    });
});
</script>
<!-- JS End-->