let section = document.createElement('section')
document.body.appendChild(section)
section.className = "section1"

let h1 = document.createElement('h1')
h1.textContent = 'Le Juste Prix'
h1.className = "titre"
section.appendChild(h1)

let div1 = document.createElement('div')
section.appendChild(div1)
div1.className = 'div1'

let divv = document.createElement('div')
div1.appendChild(divv)
divv.className = 'divv'

let p = document.createElement('p')
div1.appendChild(p)
p.className = 'p'



let input = document.createElement('input')
divv.appendChild(input)
input.className = 'input'
input.setAttribute('placeholder','Deviner le prix ! (entre 0 et 100)')

let btn = document.createElement('button')
btn.textContent = 'Deviner'
btn.className = 'btn'
divv.appendChild(btn)

let div2 = document.createElement('div')
section.appendChild(div2)
div2.className = 'div2'

let random = Math.floor(Math.random() * 101) 
console.log(random);
let i = 1;
function ii() {
    i++
}

input.addEventListener('keyup', ()=>{
    if (input.value.length < 1) {
        input.style.border = 'red solid 2px'
    }else if (isNaN(input.value)) {
        p.textContent = 'Vous devez rentrer un nombre'
        p.style.display = 'block'
    } else if(input.value > 100) {
        p.textContent = input.value +' est supérieur à 100, veuillez entrer un nombre entre 0 et 100'
        p.style.display = 'block'
    }else if(input.value < 0) {
        p.textContent = input.value +' est inférieur à 100, veuillez entrer un nombre entre 0 et 100'
        p.style.display = 'block'
    }else{
        p.style.display = 'none'
        input.style.border = 'gray solid 2px'
    }
})


btn.addEventListener('click',()=>{
    
    if (input.value.length < 1) {
        input.style.border = 'red solid 2px'
    }else if (isNaN(input.value)) {
        p.textContent = 'Vous devez rentrer un nombre'
        p.style.display = 'block'
    } else if(input.value > 100) {
        p.textContent = input.value +' est supérieur à 100, veuillez entrer un nombre entre 0 et 100'
        p.style.display = 'block'
    }else if(input.value < 0) {
        p.textContent = input.value +' est inférieur à 100, veuillez entrer un nombre entre 0 et 100'
        p.style.display = 'block'
    }else if(input.value < random ) {
        let moin = document.createElement('div')
        div2.appendChild(moin)
        moin.textContent ='#'+ i +  ' (' +  input.value + ')' + ' est inferieur !'
        moin.className = 'moin'
        ii();
    }else if(input.value > random ) {
        let plus = document.createElement('div')
        div2.appendChild(plus)
        plus.textContent ='#'+  i + ' (' + input.value + ')' + ' est supérieur !'
        plus.className = 'plus'
        ii();
    }else if(input.value == random ) {
        let trouver = document.createElement('div')
        div2.appendChild(trouver)
        trouver.textContent ='#'+  i + ' bravo ' + '(' +  input.value + ')' + ' est la bonne réponse !'
        trouver.className = 'trouver'
        input.disabled = true;
        
        
    }
    
})







