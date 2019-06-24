
$(document).ready(function () {

    var form = document.getElementById('todoForm'),
          list = document.getElementById('todoList'),
          input = document.getElementById('createInput'),
          tooltip = document.getElementById('errorTooltip'),
          removeDone = document.getElementById('removeDone'),
          doneItems;

    form.addEventListener('submit', function (e){
        e.preventDefault();
        var listItem;
        if(input && input.value) {
            listItem = document.createElement('li');
            listItem.classList.add('item');
            listItem.textContent = input.value;
            list.appendChild(listItem);
            tooltip.classList.add('hide');
            input.value = '';
        }
        else {
            tooltip.classList.remove('hide');
        }
    });

    list.addEventListener('click', function (e){
        var item = e.target;
        item.classList.toggle('item--done');
        tooltip.classList.add('hide');
        doneItems = Array.from(document.querySelectorAll('.item--done'));
        if(doneItems.length > 0) {
            removeDone.classList.remove('hide');
        }
        else {
                removeDone.classList.add('hide');
        }
    });

    removeDone.addEventListener('click', function (){
        doneItems = Array.from(document.querySelectorAll('.item--done'));
        doneItems.forEach(function (item){
            item.remove();
            removeDone.classList.add('hide');
        });
    });
});