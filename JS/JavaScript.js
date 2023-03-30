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

function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

link_tr();
blind_user();
