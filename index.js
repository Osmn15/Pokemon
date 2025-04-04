async function fetchdata() {
    try{
        const pokemon =document.getElementById('pokemonname').value .toLowerCase()
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if(!response.ok){
            throw new Error('cound not fetch the resource')
        }
        const data=await response.json()
        const pokemoSprite=data.sprites.front_default
        const imgelement=document.getElementById('pokemonsprite')
        imgelement.src=pokemoSprite
        imgelement.style.display='block'
    }

    catch(error){
        console.error(error)

    }
    
}
