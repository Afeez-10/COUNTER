let numberCount = localStorage.getItem('score') || Number(document.querySelector('.number-count').innerText);
let highCount = localStorage.getItem('highest') || Number(document.querySelector('.high-count').innerText);
document.querySelector('.high-count').innerText = localStorage.getItem('highest');
document.querySelector('.number-count').innerText = localStorage.getItem('score');
function subtractOne() {
  if(numberCount !== 0){
    numberCount--;
    localStorage.setItem('score',numberCount);
    document.querySelector('.number-count').innerText = localStorage.getItem('score');
  }
}
function addOne() {
    numberCount++;
    localStorage.setItem('score',numberCount);
    document.querySelector('.number-count').innerText = localStorage.getItem('score');
    if(highCount < numberCount){
      highCount++;
      localStorage.setItem('highest',highCount);
      document.querySelector('.high-count').innerText = Number(localStorage.getItem('highest'));
    }
}
function resetCount() {
    localStorage.removeItem('score');
    document.querySelector('.number-count').innerText = 0;
    numberCount = 0;
    
}
function resetHighestCount(){
    localStorage.removeItem('highest');
    document.querySelector('.high-count').innerText = 0;
    highCount = numberCount;
}