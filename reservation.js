$(document).ready(function() {
    $("#arrival_date").focus();
    document.getElementById("formErrorMessage").innerHTML = "";
    $("#reservation_form").submit(
        function(Event) {
            document.getElementById("formErrorMessage").innerHTML = "";
            var isValid = true;
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var email = $("#email").val().trim();
            
            if (email == "") {
                $("#email").next().text("This field is required.");
                document.getElementById("formErrorMessage").innerHTML = "email is Required";
                $("#email").focus();
                isValid = false;
            } else if (!emailPattern.test(email)) {
                $("#email").next().text("Must be a valid email address.");
                document.getElementById("formErrorMessage").innerHTML = "email is Required";
                isValid = false;
            } else if ($("#arrival_date").val() == "") {
                $("#arrival_date").next().text("This field is required.");
                $("#arrival_date").focus();
                document.getElementById("formErrorMessage").innerHTML = "Arrival Date is Required";
                isValid = false;
            } else if ($("#name").val() == "") {
                $("#name").next().text("This field is required.");
                $("#name").focus();
                document.getElementById("formErrorMessage").innerHTML = "Name is Required";
                isValid = false;
            } else if ($("#phone").val() == "") {
                $("#phone").next().text("This field is required.");
                $("#phone").focus();
                document.getElementById("formErrorMessage").innerHTML = "Phone is Required";
                isValid = false;
            } else {
                document.getElementById("formErrorMessage").innerHTML = "Message sent successfully. Thank you, will get back to you soon!";
                alert("Message sent successfully. Thank you, will get back to you soon!");
            }
            alert("Message sent successfully. Thank you, will get back to you soon!");
            $("#email").val(email);
            
//            else {
//                $("#email").next().text("");
//                document.getElementById("formErrorMessage").innerHTML = "";
//            }
//            
//            // validate the arrival date
//             else {
//                $("#arrival_date").next().text("");
//                document.getElementById("formErrorMessage").innerHTML = "";
//            }
//            // validate the name
//             else {
//                $("#name").next().text("");
//                document.getElementById("formErrorMessage").innerHTML = "";
//            }
//            // validate the phone
//             else {
//                $("#phone").next().text("");
//                document.getElementById("formErrorMessage").innerHTML = "";
//            }
            if (isValid == false) {
                Event.preventDefault();
            }
        });
});
// end ready