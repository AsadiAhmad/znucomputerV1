let egg = String.fromCodePoint(129370) //🥚
let happy = String.fromCodePoint(128512) //😀
let easter_egg = `There is no Easter Eggs ${egg} here go away!`;
console.log(`if you press ctrl + shift + k you can see this congratulations! ${happy}`)
console.log(easter_egg)

function link_tr(){
    var haveTable = document.getElementById('Table');
    if (haveTable != null) {
        var rowCount = document.getElementById('Table').rows.length;
        for (let i = 1; i <= rowCount; i++) {
            const row = document.getElementById(`tr${i}`);
            row.addEventListener("click", () => {
                window.location.href = row.dataset.href;
            });
        }
    } 
}

function blind_user(){
    document.oncontextmenu = new Function("return false");
}

var counter = {};

function manageClicks(url) {
	if (! counter[url]) counter[url] = 0;
	counter[url] ++;
	alert('you clicked '+counter[url]+' '+url);
 
    // return location.href = url;
	return false;
}

function init() {
    let count = localStorage.getItem('counter');
    if(count === null){
        count = 0;
        localStorage.setItem('counter', count);
    }
    count = parseInt(count);
    updateCount(count);
}
function incrementCounter() {
    let count = parseInt(localStorage.getItem('counter'));
    count = count + 1;
    localStorage.setItem('counter', count);
    updateCount(count);
    return true;
}
function updateCount(count) {
    document.getElementById("count").innerHTML = "Clicked "+count+" times!";
}

link_tr();
blind_user();
