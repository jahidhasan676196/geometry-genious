function calculateTriangle(){
    // get base value
    const triangleBase=document.getElementById('triangle-base')
    const triangleBasevalue=triangleBase.value
    const base=parseFloat(triangleBasevalue)
    // get height value
    const triangleheight=document.getElementById('triangle-height')
    const triangleheightValue=triangleheight.value
    const height =parseFloat(triangleheightValue)
    console.log(height)

    const area=0.5*base*height;

    const displayValue=document.getElementById('triangleaArea')
    displayValue.innerText=area;

    document.getElementById('output-area').innerText=`Triangle Area is:${area}`
}