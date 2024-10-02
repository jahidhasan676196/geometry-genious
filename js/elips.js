function calculateElipsArea(){
    const a =inputValueById('elips-a')
    const b =inputValueById('elips-b')
    const area =3.14*a*b;
    document.getElementById('elips-area').innerText=area
    document.getElementById('output-area').innerText= `Elips Area is:${area}`
}