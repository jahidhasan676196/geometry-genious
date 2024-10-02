function inputValueById(id){
    const inputText =document.getElementById(id)
    const inputValue =inputText.value
    const value =parseFloat(inputValue)
    return value;
}