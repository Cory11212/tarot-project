//GRABBING THE FORM
const form=document.getElementById('myForm')
const allCards=[]

//THE FORM SUBMISSION EVENT
form.addEventListener('submit', (event)=>{
    event.preventDefault()

    //FETCH
    fetch("https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=5")
    .then((response)=>response.json())
    .then((response)=>{
        response.cards.forEach(item => {
            allCards.push(item)
        })
        allCards.forEach((item, i)=>{
            createCard(item, i)
        })  
    })
    .catch(function (error) {
      // handle what went wrong
    });

    //REMOVES FORM 
    form.remove()  
})

//FUNCTION THAT CREATES CARDS AND APPENDS IT TO THE BODY
function createCard(item, i){
    const card= document.createElement('div')
    card.className='card'
    const img= document.createElement('img')
    img.src="pictures/card back.png"
    card.appendChild(img)

    //CARD EVENT LISTENERS
    card.addEventListener('click', ()=>{
        alert(`${item.name.toUpperCase()}: ${item.meaning_up}`)
    })
    card.addEventListener('mouseover', ()=>{
        img.src=`pictures/${[i]}.png`
    })
    card.addEventListener('mouseout', ()=>{
        img.src=`pictures/card back.png`
    })
    
    //APPENDS CARDS TO BODY
    document.body.appendChild(card)
}