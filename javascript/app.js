
let Local ={};

const addtoCort = Item => {
 
 const storedTracker = localStorage.getItem('chka-beka');
 if(storedTracker) {
     Local = JSON.parse(storedTracker);
 }
    if(Item in Local){
      Local[Item] = Local[Item] + 1;


  }else {
      Local[Item] = 1;

  }
  localStorage.setItem('chka-beka' , JSON.stringify(Local));
}
const removeItem = item => {
    const storedTracker = localStorage.getItem('chka-beka');
    if(storedTracker){
        const storedObject = JSON.parse(storedTracker);
        delete storedObject[item];
        localStorage.setItem('chka-beka', JSON.stringify(storedObject))
    }
}