function calculateRectangleArea(){
    
   const width= inputValueById('rectangle-width')
   const height =inputValueById('rectangle-length')
   const area =width*height;
   document.getElementById('rectangle-area').innerText=area;
   document.getElementById('output-area').innerText=`Rectangle Area is:${area}`
}

