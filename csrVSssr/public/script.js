// console.log("hi i am script file");

function refreshList(){

    $('#list').empty(); //remove all the child

    $.get('/todos' , function(data){
        // console.log(data);
        for(let todo of data){
            $('#list').append(`<li>${todo}</li>`)
        }
    })
}
refreshList();

$('#btn').on('click', function(){
    // console.log("btn is clicked");
    let todo = $('#inp').val();
    $.post('/todos' ,{todo} , function(res){
        console.log(res);
        $('#inp').val("");
        refreshList();
    })

})