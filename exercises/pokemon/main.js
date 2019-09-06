const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon ", true);
xhr.send();


xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // 
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata) 
        const pokemon = data.objects[0].pokemon
        console.log(pokemon) 
        listDataToDom(pokemon)
    }else if(xhr.readyState === 4 && xhr.status !== 200){

    }
}
const listDataToDom =(arr) =>{
    for (let i = 0; i < arr.length; i++ ){
        //step 1- creating the element  
    const h4 = document.createElement('h4')
    //step 2 - amending the element
    h4.textContent = arr[i].name
    //step 3 - appending it to the DOM
    document.body.appendChild(h4)
    } 
} 