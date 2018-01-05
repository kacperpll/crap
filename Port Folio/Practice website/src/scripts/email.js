// Vanilla JS

// function _(id) { return document.getElementById(id); }
//     function submitForm() {
//         _("mybtn").disabled = true;
//         var formdata = new FormData();
//         formdata.append("name", _("name").value);
//         formdata.append("email", _("email").value);
//         formdata.append("phone", _("phone").value);
//         formdata.append("message", _("message").value);
//         var ajax = new XMLHttpRequest();
//         ajax.open("POST","php/post.php");
//         ajax.onreadystatechange = function() {
//         if(ajax.readyState == 4 && ajax.status == 200) {
//                 if(ajax.responseText == "success") {
//                   showFormData();
//                 } else {
//                   alert("Brak danych do wyświetlenia");
//                     _("mybtn").disabled = false;
//                 }
//             }
//         }
//         ajax.send (formdata);
//     }


// JQ v.1
// $(document).ready(function() {
//   $("#mybtn").click(function(e) {
//     e.preventDefault();
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var phone = $("#phone").val();
//     var message = $("#message").val();
// $.post("php/post.php",{
//      name: name,
//      email: email,
//      phone: phone,
//      message: message
//    }, function(data){
//      if (data == "success") {
//        showFormData();
//      } else{
//        alert("Brak danych do wyświetlenia");
//      }
//    });
//   });
// });


//JQ v.2

$(document).ready(function() {
  $("#mybtn").click(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
    $.ajax("php/post.php", {
      method: "POST",
      data: {name: name, email: email, phone: phone, message: message}
    })
      .done(function(){
        showFormData();
      })
      .fail(function(){
        alert("Brak danych do wyświetlenia");
      });
  });
});
