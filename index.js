let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let stopSaving = document.getElementById("save-btn");
let count = 0;
let noSaveElements = 0;
let countEntries;
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if(saveEl.textContent == "Previous Entries: "){
        countEntries = count;
    }
    else{
        countEntries = " - " + count;
    }

    
    noSaveElements += 1;
    saveEl.textContent += countEntries;
    countEl.textContent = 0;
    count = 0;   
    console.log(saveEl.textContent,) 
    if(noSaveElements == 4){
        console.log(noSaveElements, "value");        
        stopSaving.disabled = true;
        saveEl.insertAdjacentHTML("afterend", `<p class="red-col">Maximum 4 values can be saved</p>`);
    }

    
}
function clearscore() {
    saveEl.textContent = "Previous Entries: ";
    countEntries = ""; 
    countEl.textContent = 0;
    count = 0;
    noSaveElements = 0;
    stopSaving.disabled = false;
    document.querySelector(".red-col").remove();
}