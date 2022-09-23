
$("#add_user").submit(function(event){
    alert("Data inserted Successfully.");
  });

$("#update_user").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={}

    $.map(unindexed_array,function(n,i){
      data[n['name']] = n['value']
    })
    console.log(data);

    var request={
      "url": `http://localhost:3333/api/users/${data.id}`,
      "method": "PUT",
      "data": data
    }
    $.ajax(request).done(function(response){
      alert("Data updated Successfully!");
    })
  });

if(window.location.pathname == '/'){
  $ondelete = $(".table tbody td a.deletebtn");
  $ondelete.click(function(){
    var id = $(this).attr("data-id")

    var request = {
      "url": `http://localhost:3333/api/users/${id}`,
      "method": "DELETE",

    }
    if(confirm("DO U WANT TO DELETE THIS RECORD?")){
        $.ajax(request).done(function(response){
          alert("Data Deleted Successfully!");
          location.reload()
        })
    }
  })
}

