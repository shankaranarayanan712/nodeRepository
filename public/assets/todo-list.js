$(document).ready(function(){
  $('form').on('submit',(e)=>{
     var item = $('form input');
      var todo = {item: item.val()};
      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success:(data)=>{
          console.log(data);
          //do something with the data via front-end framework
          location.reload();
        }
      });
      return false;

  });
  $('.del').on('click',(e)=>{
      var item =  $(e.currentTarget)[0].innerText
      $.ajax({
        type: 'DELETE',
        url: '/todo/'+item,
        success: (data)=>{
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });
    $('.edit').on('click',(e)=>{
        var item =  $(e.currentTarget).attr("id")
        $.ajax({
            type: 'GET',
            url: '/todo/getItem/' +item,
            success: (data)=>{
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});
