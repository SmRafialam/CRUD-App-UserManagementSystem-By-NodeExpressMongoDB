
$("#add_user").submit(function(event){
    alert("Data inserted Successfully.");
  });

  $("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    console.log(unindexed_array);
  });