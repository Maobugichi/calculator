const element = document.getElementById('par')

const btn = document.querySelectorAll('.btn')

let calc = ''


for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    const btnValue = this.innerText
    if (btnValue === '=' && calc !== '') {
      calc = `Answer: ${eval(calc)}`
      
      
    } else if (btnValue === 'AC'){
      calc = ''
    } else if(btnValue === 'DEL') {
     calc = calc.slice(0,calc.length - 1)
    } 
    
    else {
      calc += btnValue
    }
    
    element.innerText = calc
  })
}

