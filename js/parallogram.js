function calculateparallogram(){
   const base= inputValueById('parallogram-base')
   const height =inputValueById('parallogram-height')
   const area =base*height;
   document.getElementById('parallogram-area').innerText=area;
   document.getElementById('output-area').innerText=`Parallogram Area is:${area}`
}