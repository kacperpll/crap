function _(id) { return document.getElementById(id); }
    function submitForm() {
        _("mybtn").disabled = true;
        var formdata = new FormData();
        formdata.append( "n", _("n").value);
        formdata.append("e", _("e").value);
        formdata.append("m", _("m").value);
        var ajax = new XMLHttpRequest();
        ajax.open("POST","php/parser.php");
        ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
                if(ajax.responseText == "success") {
                    alert("Message has been send.");
                } else {
                    _("mybtn").disabled = false;
                }
            }
        }
        ajax.send (formdata);
    }
