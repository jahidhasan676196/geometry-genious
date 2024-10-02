function calculaterombousarea(){
    const d1=  inputValueById('rhombus-dymention1')
    const d2 =inputValueById('rhombus-dymention2')
    const area=0.5*d1*d2;
    document.getElementById('rhombus-area').innerText=area;
    document.getElementById('output-area').innerText=`Rombous Area is:${area}`
}