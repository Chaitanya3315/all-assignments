function timer(n){
    let count =n;
    let interval = setInterval((n)=>{
      count--;
      if(count<=0){
        clearInterval(interval);
      }
      console.clear();
      console.log(count);
    },1000);   
}

function counter(n) {
    let count = n;
    let delay = 1000;

    function printCount() {
        count--;
        if (count >= 0) {
            console.clear();
            console.log(count);
            setTimeout(printCount, delay);
        }
    }

    printCount();
}