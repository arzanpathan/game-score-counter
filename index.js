let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let countEntries;
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if(saveEl.textContent == "Previous Entries: "){
        countEntries = count;
        console.log(saveEl.textContent);
    }
    else{
        countEntries = count + " - ";
    }
    
    saveEl.textContent += countEntries;
    countEl.textContent = 0;
    count = 0;
}
function clearscore() {
    saveEl.textContent = "Previous Entries: ";
    countEntries = ""; 
    countEl.textContent = 0;
    count = 0;
}