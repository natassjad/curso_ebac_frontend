$(document).ready(function () {
    $('form').on('submit', function (e){
        e.preventDefault();
        const task = $('#task').val();
        const newTask = $(`<li><div class="tasks">${task}</div></li>`);
        $(newTask).appendTo('ul');
        $('#task').val('');
    })

    $('ul').on('click',"div.tasks", function (e){
        $(this).toggleClass('completed');
    })
})