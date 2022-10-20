let algoList = document.getElementById("algo-list")
let x = 5;
let arr = [3,8,5,99,6,24,98,66];



function searching() {
    // algoList.innerText = "Searching"
    algoList.innerHTML = '<input id="input-txt" placeholder="Enter Number to Search" type="number" /><br/> <ul class = "algo-list"><li id="item-1"><button id="search-btn1" onclick="linearSearch()">1. Linear Search</button><li id="item-2"><button id="search-btn2" onclick="frontBackSearch()">2. Front & Back Search</button><li id="item-3"><button id="search-btn3" onclick="maxSearch()">3. Max Num Search</button><li id="item-4"><button id="search-btn4" onclick="minSearch()">4. Min Num Search</button></ul>'
}

function sorting() {
    algoList.innerHTML = '<ul class = "algo-list"><li id="item-1"><button id="sort-btn1">1. Insertion Sort</button><li id="item-2"><button id="sort-btn2">2. Heap Sort</button><li id="item-3"><button id="sort-btn3">3. Selection Sort</button><li id="item-4"><button id="sort-btn4">4. Merge Sort</button><li id="item-5"><button id="sort-btn5">5. Quick Sort</button><li id="item-6"><button id="sort-btn6">6. Counting Sort</button></ul>'
}

function linearSearch(){
    let inputTxt = document.getElementById("input-txt");
    numInput = parseInt(inputTxt.value);
    // console.log(numInput)
    for(element of arr){
        if(element==numInput)
        {
            console.log("match found at index: " + arr.indexOf(element))
            // console.log(arr.indexOf(numInput))
            break;
        }
    }
}

function frontBackSearch(){
    let inputTxt = document.getElementById("input-txt");
    numInput = parseInt(inputTxt.value);
    // console.log(numInput)
    frontInd = 0;
    backInd = arr.length-1;
    while (frontInd<backInd){
        if(numInput==arr[frontInd]){
            console.log("match found at index: " + arr.indexOf(numInput));
            break;
        }
        if (numInput==arr[backInd]){
            console.log("match found at index: " + arr.indexOf(numInput));
            break;   
        }
        frontInd++;
        backInd--;
    }
}

function maxSearch(){
    let max = arr[0];
    // console.log(numInput)
    for(element of arr){
        if(element>max)
        {
            max = element;
        }
    }
    console.log("Max number is: "+max+" at index: "+arr.indexOf(max))
}

function minSearch(){
    let min = arr[0];
    // console.log(numInput)
    for(element of arr){
        if(element<min)
        {
            min = element;
        }
    }
    console.log("Min number is: "+min+" at index: "+arr.indexOf(min))
}
