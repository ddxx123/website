


const zero = document.getElementById('btn0')
const one = document.getElementById('btn1')
const two = document.getElementById('btn2')
const three = document.getElementById('btn3')

const add = document.getElementById('btn+')
const sub = document.getElementById('btn-')
const mulp = document.getElementById('btn*')
const div = document.getElementById('btn/')
const equal = document.getElementById('btn=')

const result = document.getElementById('result')
const clear = document.getElementById('btnc')


let answer = String("")

let flag = 1

let temp = 0



one.onclick = function(){
    answer+=1
    result.textContent = answer
    
}

add.onclick = function(){
   flag = 1
   // getting the input from answer and putting it in to nums
    num = Number(answer)
    // resetting the answer variable everything i click add
   answer = String('')
}

two.onclick = function(){
   answer+=2
   result.textContent = answer
}

three.onclick = function(){
    answer+=3
    result.textContent = answer
}

equal.onclick = function(){
  if (flag == 1){
    num += Number(answer)
    result.textContent = num
  }
  if(flag == 2){
    num -= Number(answer)
    result.textContent = num
  }
  if(flag == 3){
    num *= Number(answer)
    result.textContent = num
  }
  if(flag == 4){
    num /= Number(answer)
    result.textContent = num
  }

}

clear.onclick = function(){
    answer = String("")
    result.textContent = 0
}

sub.onclick = function(){
    flag = 2
    num = Number(answer)
   answer = String('')
}
mulp.onclick = function(){
    flag = 3
    num = Number(answer)
    answer = String('')
}
div.onclick = function(){
    flag = 4
    num = Number(answer)
    answer = String('')
}