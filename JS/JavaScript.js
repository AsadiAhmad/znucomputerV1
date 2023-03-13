let egg = String.fromCodePoint(129370) //🥚
let easter_egg = `There is no Easter Eggs ${egg} here go away!`;
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

link_tr();
