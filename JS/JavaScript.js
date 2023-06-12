let egg = String.fromCodePoint(129370) //🥚
let happy = String.fromCodePoint(128512) //😀
let easter_egg = `There is no Easter Eggs ${egg} here go away!`;
console.log(`if you press ctrl + shift + k you can see this congratulations! ${happy}`)
console.log(easter_egg)

function link_tr(str){
    var table = document.getElementById(str);
    if (table != null) {
        for (let row of table.rows) {
            row.addEventListener("click", () => {
                window.location.href = row.dataset.href;
                //window.open(row.dataset.href);
                copyToClipBoard(row);
            });
        }
    } 
}

function link_video(tableStr, videoStr, linkStr){
    var table = document.getElementById(tableStr);
    var video = document.getElementById(videoStr);
    var link = document.getElementById(linkStr);
    if (table != null) {
        for (let row of table.rows) {
            row.addEventListener("click", () => {
                video.src = row.dataset.href;
                link.href = row.dataset.href;
            });
        }
    } 
}

function copyToClipBoard(element) {
    //var copyText = document.getElementById(elementID);
    //element.select();
    //element.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(element.dataset.href);
    //alert("link Copied!");
}

function blind_user(){
    document.oncontextmenu = new Function("return false");
}

function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

link_tr('Table');
link_tr('TableB');
link_tr('TableC');
link_video('TableX', 'Video', 'download_click');
blind_user();
