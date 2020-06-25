const lists = document.querySelectorAll('.list');
const items = document.querySelectorAll('.items');

let draggedItem = null;

for(let i = 0; i < items.length; i++) {
     const item = items[i];

item.addEventListener('dragstart', function() {
      draggedItem = item;
      setTimeout(function() {
           item.style.display = 'none';
      }, 0)
});

item.addEventListener('dragend', function() {
     setTimeout(function() {
          
          draggedItem.style.display = 'flex';
          //item.style.display = 'flex';
          //draggedItem = null;
     }, 0)
});

for(let l = 0; l < lists.length; l++) {
     const list = lists[l];

list.addEventListener('dragover', function(e) {
       e.preventDefault();
       
});

list.addEventListener('dragenter', function(e) {
       e.preventDefault();
       
});

list.addEventListener('drop', function() {
     
     this.append(draggedItem);

     list.classList.add("el");
    
     
     
});
}
}