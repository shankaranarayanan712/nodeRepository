$(document).ready(function(){
  $('form').on('submit', function(){
     var item = $('form input');
      var todo = {item: item.val()};
      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          console.log(data);
          //do something with the data via front-end framework
          location.reload();
        }
      });
      return false;

  });

  $('.del').on('click', function(e){
      var item =  $(e.currentTarget)[0].innerText
      $.ajax({
        type: 'DELETE',
        url: '/todo/'+item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });
    
    $('.edit').on('click', function(e){
        var item =  $(e.currentTarget).attr("id")
        $.ajax({
            type: 'PUT',
            url: '/todo/getItem/' +item,
            success: function(data){
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});
