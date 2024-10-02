function calculatepentagonArea(){
  const p=  inputValueById('pentagon-p')
  const b=inputValueById('pentagon-b')
  const area =0.5*p*b;
  document.getElementById('pentagon-area').innerText=area;
  document.getElementById('output-area').innerText=`Pentagon area is: ${area}`
}