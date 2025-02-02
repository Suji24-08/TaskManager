$('document').ready(function(){
    //taskAdding
    $('#addButton').click(function(){
        var task = $('#inputField').val();
        if(task){ //this if condition only works when the task variable contains value 
            //Append list item to the list
            $('#taskList').append('<li><span class="textVal">'+task+'</span><span class="editBtn">Edit</span><span class="removeBtn">Remove</span></li>');
            $('#inputField').val('');
        }
});
    $('#inputField').focus(function(){
        $(this).addClass('highlight');
    })
    $('#inputField').blur(function(){
        $(this).removeClass('highlight');
    })

    //mark as completed
    $('#taskList').on('click','.textVal',function(){
        $(this).toggleClass('completed');
    })

    //Remove task from the list
    $('#taskList').on('click','.removeBtn',function(){
        //$(this).parent().remove();//this works here so this will work for removing the button
        $(this).closest('li').remove();//reliable but it works to remove the ancestor of the button which is the list and it is logically reliable than parent()
    })
    //1.53.16(youtube duration stopped)
    $('#taskList').on('click','.editBtn',function(){
        var $EditingText = $(this).siblings('.textVal');
        var currentText = $EditingText.text();
        var newText = prompt("Edit you Task: ",currentText);
        if(newText){
            $EditingText.text(newText);
        }
    })
});