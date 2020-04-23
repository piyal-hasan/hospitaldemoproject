$.ajaxSetup({
     headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
   
jQuery(document).ready(function($) {
                
   
    $("#input-form").hide();
    dataLoad();



//add new data button js
$("#add-new").click(function(event){
    $("#form-action-btn").text("Add");
    $("#input-form")[0].reset();
    $("#input-form").show();
});

//form close button
$("#close-btn").click(function(event){
    $("#input-form")[0].reset();
    $("#input-form").hide();
});

   
           // add operation 
   
           $(document).on('submit', '#input-form', function(event){
               event.preventDefault();
   
               var button_press=$('#form-action-btn').text();
   
               var message_text="";
               var url="";
   
               if(button_press=="Add"){
                  message_text="Inserted";
                  url="/roles-add";
   
               }
   
               if(button_press=='Edit'){
                  message_text="Updated";
                  url="/roles-update";
               }
   
               if(button_press!=""){
   
                   $.ajax({
   
                       url:url,
                       type:"POST",
                       data:new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields 
                       contentType: false,       // The content type used when sending data to the server.
                       cache: false,            // To unable request pages to be cached
                       processData:false,
                       dataType:"json",
                       success:function (data) {
                       if(data.msg===1){
   
                          dataLoad();
   
                           $("#status-msg").text("Data "+message_text);
                          
                              
                               setTimeout(function()
                               { 
                                 $('#status-msg').text("");
                               }, 3000);
                           }
                         else if(data.msg===0){
                         message_text='';
                         for(var i=0;i<data.errors.length;i++){
                           message_text+=data.errors[i];
                         }
                         $("#status-msg").text(message_text);
                           setTimeout(function()
                             { 
                                $("#status-msg").text("");
                             }, 10000);
                         }
                         else{
                         message_text='';
                         for(var i=0;i<data.errors.length;i++){
                           message_text+=i+1+"). "+data.errors[i];
                         }
                         $("#status-msg").text(message_text);
                             setTimeout(function()
                             { 
                                $("#status-msg").text("");
                             }, 10000);
                         }
                         
                       }
                   })
   
               }
               else{
                   $("#status-msg").text("Check the format of data in the hotel services field");
               }
   
           });
   
           // end of the  add operation
   
           // update operation 
   
           $(document).on('click', '.update', function(){
               var id = $(this).attr("id");
              // alert(id);
               $.ajax({
                   // url:"test.php",
                   url:"roles-edit",
   
                   method:"POST",
   
                   data:
                   {
                       id:id
                   },
   
                    dataType:"json",
   
                   success:function(data)
                   {
                       if(data.msg==1){
                      
                       $('#name').val(data.role.name);
                       $("#role").html(data.permission);
                    
                       $('#id').val(id);
                       $('#form-action-btn').text("Edit");
                       $("#input-form").show();  
                       }else{
                           alert("This value is not avilable");
                       }  
   
                   }
               })
           });
   
            // end of the update operation
   
   
    
   
       //end of the avilable operation 
   
           //  delete operation
   
           $(document).on('click', '.delete', function(){
               var id = $(this).attr("id");
   
               if(confirm("Are you sure you want to delete this?"))
               {
                   $.ajax({
                       url:"roles-delete",
   
                       method:"POST",
   
                       dataType:"json",
   
                       data:
                       {   
                           id:id,
                       },
   
                       success:function(data)
                       {
                           if(data.msg==0){
                               alert(data.errors);
                           }
                           else{
                              dataLoad();  
                           }
                       
                       }
                   });
               }
               else
               {
                   return false;
               }
           });
                 
                              
   });
   
            function dataLoad(){
                   $.ajax({
                       url:"/roles-get",
                       type:"post",
                       dataType:"json",
                       success:function(res){
   
                          console.log(JSON.stringify(res.permission));
   
                           if(res.status==1){
                                let row="<tr>";
                                let permission=""
                                let permissions="";
                                res.permission.forEach( function(e, i) {
                                   permissions+='<li class="d-inline-block mr-3"><input type="checkbox" class="custom-control-input" id="ig_checkbox'+i+'" name="permissions[]" value="'+e.id+'"> <label class="custom-control-label" for="ig_checkbox'+i+'">'+e.name+'</label></li>';
                                   permission+=e.name+" ";
                                });
                                $("#table-data").html(res.role);
                                $("#role").html(permissions);
                           }
                       }
                   })
               }