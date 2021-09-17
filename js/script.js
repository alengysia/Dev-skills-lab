
    
    $('#main-button').click(function(){
        let input = document.querySelector('#input').value;
        $('ul').append(`<li>${input}<button class="close-btn">X</button></li>`);
console.log(input);
$('input').val('');
    });

    $('ul').on('click', 'li', function(){
        $(this).remove()
    })
    