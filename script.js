var input1 = document.getElementById('task1')
var res = document.getElementById('result')
var button = document.getElementById('button')
var counter=0
button.addEventListener('click',
function()
{


if(input1.value == 'github'){
    counter ++
    console.log(counter)
    button.setAttribute('disabled','true')
    res++
}
    else{
        alert('false')
        }
}


)