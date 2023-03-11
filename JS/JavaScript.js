let name = 'There is no istrage here go away!';
console.log(name)

function link_tr(){
    var rowCount = document.getElementById('Table').rows.length;
    for (let i = 1; i <= rowCount; i++) {
        const row = document.getElementById(`tr${i}`);
        row.addEventListener("click", () => {
            window.location.href = row.dataset.href;
        });
    }
}

link_tr();
