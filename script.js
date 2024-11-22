function Addfun(){
    let a = document.getElementById('firstbox').value
    let b = document.getElementById('secondbox').value

    a=parseInt(a)
    b =parseInt(b)

    let sum = a+b
    let r = document.getElementById('result')

    r.innerHTML=sum;
}

function Subfun(){
    let a = document.getElementById('firstbox').value
    let b = document.getElementById('secondbox').value

    a=parseInt(a)
    b =parseInt(b)

    let sub = a-b
    let r = document.getElementById('result')

    r.innerHTML=sub;
}