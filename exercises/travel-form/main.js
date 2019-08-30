const travel =document.travel

travel.addEventListener("submit", function(event){
    event.preventDefault()
    console.log('text')
    let firstName = travel.firstName.value
    let lastName = travel.lastName.value
    let age = travel.age.value
    let gender = travel.gender.value
    let location = travel.location.value
    console.dir(travel)
    let vegan =''
    let carnivore = ''
    let lactoseInt = ''
    let chocolate = ''
    if(travel[6].checked){
        vegan= travel[6].value
    }
    if(travel[7].checked){
        carnivore = travel[7].value
    }
    if(travel[8].checked){
        lactoseInt = travel[8].value
    }
    if(travel[9].checked){
        chocolate = travel[9].value
    }

    
     
    window.alert(
        `"First Name:" ${firstName}
         "Last Name:" ${lastName} 
         "age:"       ${age}
         "gender:"     ${gender} 
         "location:"   ${location}
         "Dietary Restrictions: ${vegan + ',' + carnivore + ',' + lactoseInt + ',' + chocolate}`) 
         
         
 let dietRestrictions = document.getElementById('diet-array') 
     dietRestrictions.textContent = vegan + ',' + carnivore + ',' + lactoseInt + ',' + chocolate             
    


})