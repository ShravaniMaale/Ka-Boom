/* 
---------------- 
Date Object - 5
---------------- 
Using this object to verify the Arrival date in the form
*/
var userdt = new Date();


/* 
--------------------
Global Variables - 2
--------------------
*/
let index = 0;

/*
---------- 
Array - 2
---------- 
*/
let animateArr = [];



/*
-----------------------------------------------------------
Function to make the header(both Logo and navigation) fixed
-----------------------------------------------------------
Techniques Used:
~   querySelectorAll - 2
~   if Statement     - 5
~   Built in property for window object(pageYOffset)     - 2
-----------------------------------------------------------
*/

var homeHeaderEl = document.querySelectorAll(".homeHeader");

function myFunction() {
    for (var i = 0; i < homeHeaderEl.length; i++) {
        if (window.pageYOffset > homeHeaderEl[i].offsetTop) {
            homeHeaderEl[i].classList.add("sticky");
        }
    }
}

/*      End of the function     */




/*  
------------------------------------
Display the TESTIMONIALS
------------------------------------
Techniques Used:
    ~ Custom function - 2 (To display all the persons in TESTIMONIALS)
    ~ Built in property for document object(getElementById)   - 2
    ~ getElementsByClassName   - 2
    ~ if.. else       - 5
    ~ for loop        - 5
    ~ innerHTML       - 2
------------------------------------
*/
var paddingBoxEl = document.getElementById("paddingBox");
var BoxEl = document.getElementsByClassName("paddingBox");
for (var i = 0; i < BoxEl.length; i++) {
    animateArr.push(BoxEl.item(i).innerHTML);
}
console.log(animateArr);
if (paddingBoxEl !== null) {
    paddingBoxEl.innerHTML = animateArr[index];
}


function swapClass() {
    if (index == animateArr.length - 1) {
        index = 0;
    } else {
        index++;
    }
    if (paddingBoxEl !== null) {
        paddingBoxEl.innerHTML = animateArr[index];
    }
}
setInterval(swapClass, 3000);
/*  End of the Function    */



/*  
Function to display the About Us div on clicking the About Us button
*/
const aboutUsEl = document.getElementById("aboutUsPage");
var mainClassEl = document.getElementsByClassName("mainClass");

function diplayDiv() {
    for (var i = 0; i < mainClassEl.length; i++) {
        mainClassEl[i].style.display = 'block';
        mainClassEl[i].scrollIntoView();
    }
}

if (aboutUsEl !== null) {
    aboutUsEl.onclick = diplayDiv;
}
/*  End of the Function  */



/*  5 JQuery Methods -10
        1. mouseenter
        2. mouseleave
        3. hover
        4. focus
        5. click
-------------------------------------

Using 'this' keyword to access the elements - 5

--------------------------------------
~   mouseenter and mouseleave to animate the TESTIMONIALS section
~   hover to style the TOP Navigation buttons
~   focus to style the inputs of the form
~   click to style the menu items navigation
*/
$(document).ready(function() {
    $(".paddingBox1").mouseenter(function() {
        $(this).animate({
            height: '130%',
            width: '75%',
            marginLeft: '200px',
            paddingTop: '100px',
            paddingBottom: '0px'
        });
    });
    $(".paddingBox1").mouseleave(function() {
        $(this).animate({
            height: '380px',
            width: '650px',
            marginLeft: '300px',
            paddingTop: '40px'
        });
    });
    $(".menuButton").hover(function() {
            $(this).css("background-color", "#ffffff");
            $(this).css("color", "#f44336");
        },
        function() {
            $(this).css("background-color", "#f44336");
            $(this).css("color", "#ffffff");
        });
    $("input").focus(function() {
        $(this).css("background-color", "#FFFFE0");
    });
    
    $('.menuItemsList').click(function(){
    $('.menuItemsList').removeClass('active').addClass('inactive');
     $(this).removeClass('inactive').addClass('active');
    });

});
/*     End of the function      */



/*
-----------------------------------------------------------------------
Function to display the present Day with a cheering message on the Form
-----------------------------------------------------------------------

Techniques Used:
    ~   built-in method for the Date object - 2
    ~   built-in method for the Math object(Math.floor and Math.random) - 2
    ~   local variable - 2
    ~   Switch statement with 7 cases and default -10
    ~   built-in method for the string object(concat) - 2
    
-----------------------------------------------------------------------
*/
function displayDay() {
//    Date Object
    var d = new Date();

//    Local Variable
    var day;
//    Switch Statement
    
//    Date Method
    switch (d.getDay()) {
        case 0:
            day = "Sunday 🖖";
            break;
        case 1:
            day = "Monday 💪😀";
            break;
        case 2:
            day = "Tuesday 😜";
            break;
        case 3:
            day = "Wednesday 😌☕️";
            break;
        case 4:
            day = "Thursday 🤗";
            break;
        case 5:
            day = "Friday 🍻";
            break;
        case 6:
            day = "Saturday 😴";
            break;
        default:
            day = "Looking forward to the Weekend";
    }
  
    var randomWordArray = Array(
        "Oh my, it's ",
        "Whoop, it's ",
        "Happy ",
        "Seems it's ",
        "Awesome, it's ",
        "Have a nice ",
        "Happy fabulous ",
        "Enjoy your "
    );

//    Math Functions
    var randomWord =
        randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
    if (document.getElementById("hello") !== null) {
        document.getElementById("hello").innerHTML = randomWord.concat(day);
    }

}
displayDay();
//window.onload=displayDay;

/*          End of the Function          */



/*  
-------------------------------------------------
Displaying google maps using API on contact page
-------------------------------------------------
Techniques Used:
    ~ API                   -10
    ~ addEventListener      - 2
-------------------------------------------------

*/

 if (document.getElementById("geomap") !== null) {
var geocoder;
var map;
var marker;
     var contactSectionEl = document.getElementById("contact");
    contactSectionEl.style.display = 'block';
    contactSectionEl.scrollIntoView();

/*
 * Google Map with marker
 */
function initialize() {
    var initialLat = $('.search_latitude').val();
    var initialLong = $('.search_longitude').val();
    initialLat = initialLat?initialLat:43.453168;        //36.169648;
    initialLong = initialLong?initialLong:-80.494423;    //-115.141000;

    var latlng = new google.maps.LatLng(initialLat, initialLong);
    var options = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("geomap"), options);

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: latlng
    });

    google.maps.event.addListener(marker, "dragend", function () {
        var point = marker.getPosition();
        map.panTo(point);
        geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                marker.setPosition(results[0].geometry.location);
                $('.search_addr').val(results[0].formatted_address);
                $('.search_latitude').val(marker.getPosition().lat());
                $('.search_longitude').val(marker.getPosition().lng());
            }
        });
    });

}

$(document).ready(function () {
   
    //load google map
    initialize();
    
    /*
     * autocomplete location search
     */
    var PostCodeid = '#search_location';
    $(function () {
        $(PostCodeid).autocomplete({
            source: function (request, response) {
                geocoder.geocode({
                    'address': request.term
                }, function (results, status) {
                    response($.map(results, function (item) {
                        return {
                            label: item.formatted_address,
                            value: item.formatted_address,
                            lat: item.geometry.location.lat(),
                            lon: item.geometry.location.lng()
                        };
                    }));
                });
            },
            select: function (event, ui) {
                $('.search_addr').val(ui.item.value);
                $('.search_latitude').val(ui.item.lat);
                $('.search_longitude').val(ui.item.lon);
                var latlng = new google.maps.LatLng(ui.item.lat, ui.item.lon);
                marker.setPosition(latlng);
                initialize();
            }
        });
    });
    
    /*
     * Point location on google map
     */
    $('.get_map').click(function (e) {
        var address = $(PostCodeid).val();
        geocoder.geocode({'address': address}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                marker.setPosition(results[0].geometry.location);
                $('.search_addr').val(results[0].formatted_address);
                $('.search_latitude').val(marker.getPosition().lat());
                $('.search_longitude').val(marker.getPosition().lng());
            } else {
                alert("search was not successful for the following reason: " + status);
            }
        });
        e.preventDefault();
    });

    //Add listener to marker for reverse geocoding
    google.maps.event.addListener(marker, 'drag', function () {
        geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    $('.search_addr').val(results[0].formatted_address);
                    $('.search_latitude').val(marker.getPosition().lat());
                    $('.search_longitude').val(marker.getPosition().lng());
                }
            }
        });
    });
});
}


/*
----------------------------------------------------------------
Form to get the data from the user to reserve a table in Contact page
----------------------------------------------------------------
Techniques Used:
~   localStorage          - 5
~   addEventListener      - 2
~   form Validations      - 10
~   If                    - 5
~   If .. Else if         - 5
~   JQuery UI(datepicker) - 10
~   Logical AND           - 5
~   Logical NOT           - 5

*/

/* Form Validations */
$(document).ready(function() {
    if (document.getElementById("formErrorMessage") !== null) {
        document.getElementById("formErrorMessage").innerHTML = "";
    }

    $("#reservation_form").submit(
        function(Event) {
            document.getElementById("formErrorMessage").innerHTML = "";
            var isValid = true;
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//Fetching and storing the existing details in local variables
            
            var storedName = localStorage.getItem("name");
            var storedDate = localStorage.getItem("date");
            var storedEmail = localStorage.getItem("email");
            var storedPhone = localStorage.getItem("phone");

            var email = $("#email").val().trim();
            var uName = $("#name").val();
            var date = $("#datepicker").val();
            var phone = $("#phone").val();
            var mydate = new Date(date);
            console.log(mydate);
            console.log(userdt);
            
//Checking if the entered details matches with the existing details and displaying the message
            
            if (storedName == uName && storedDate == date && storedEmail == email && storedPhone == phone) {
                document.getElementById("formErrorMessage").style.color = "#1C7007";
                document.getElementById("formErrorMessage").innerHTML = "You are already Registered and we have confirmed your booking!";
            } else {
            
//If the details donot match, then validating the user inputs
                
                if (email == "") {
                    document.getElementById("formErrorMessage").innerHTML = "email is Required";
                    isValid = false;
                } else if (!emailPattern.test(email)) {
                    document.getElementById("formErrorMessage").innerHTML = "Must be a valid email address.";
                    isValid = false;

                } else if (date == "") {
                    document.getElementById("formErrorMessage").innerHTML = "Arrival Date is Required";
                    isValid = false;

                } else if (mydate < userdt) {
                    document.getElementById("formErrorMessage").innerHTML = "Selected date is in past";
                    isValid = false;

                } else if (uName == "") {
                    document.getElementById("formErrorMessage").innerHTML = "Name is Required";
                    isValid = false;

                } else if (phone == "") {

                    document.getElementById("formErrorMessage").innerHTML = "Phone is Required";
                    isValid = false;

                } else if (!phone.match(phonePattern)) {

                    document.getElementById("formErrorMessage").innerHTML = "Invalid Phone number";
                    isValid = false;

                } else {
                    isValid = true;
                    
                    //Storing the user inputs into the local storage
                    localStorage.setItem("name", uName);
                    localStorage.setItem("email", email);
                    localStorage.setItem("date", date);
                    localStorage.setItem("phone", phone);
                    document.getElementById("formErrorMessage").innerHTML = "Thank you! " + uName + ". We will send all the details to " + email;


                }
            }
            $("#email").val(email);


            if (isValid == false) {
                Event.preventDefault();
            }
        });
});

if (document.getElementById('formBodySection') !== null) {
    document.getElementById('formBodySection').addEventListener('submit', function(e) {
        e.preventDefault();
    }, false);
}

if (document.getElementById("datepicker") !== null) {
    $(function() {
        $("#datepicker").datepicker();
    });
} 
/*  End of the Function   */



/*  

Creating and using the XMLHTTPRequest object to get JSON data to print the menu contents    - 15 + 15 = 30
~ getAttribute - 2
~ built-in method for the string object(concat) - 2


*/
var xhr = new XMLHttpRequest();
var url = "/json_files/";
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayMenu();
    }
};
xhr.open("GET", url, true);
xhr.send();

function displayMenu() {
    var title = "allFoodItems"
    $("a").click(function() {
        console.log($(this).attr('title'));
        let title = this.getAttribute('title');

        $.getJSON(url.concat(title) + ".json", function(data) {
            var html = '';
            $(".menuFilterData").html('');
            $.each(data.foodItems, function(key, foodItems) {
                html += "<div class=grid-container>";
                html += "<div class=grid-item-img><img src=" + foodItems.image + " ></div>";
                html += "<div class=grid-item-itemName>" + foodItems.itemName + "</div>";
                html += "<div class=grid-item-price>" + foodItems.price + "</div>";
                html += "<div class=grid-item-description>" + foodItems.description + "</div>";
                html += "</div>";
            });
            $(".menuFilterData").append(html);

        });
    });
    if (document.getElementById("allFoodItemsId") !== null) {
        $("#allFoodItemsId")[0].click();
    }

}


//Image Slider
if(document.getElementById("menuGallery")!==null){
    
window.onload = function() {  
  const imageSlider = new imageAutoSlider("#imageSlider");
};

class imageAutoSlider {
  constructor(imagesEl) {
      this.el = document.querySelector(imagesEl);
      this.initialize();
  }

  initialize() {
      this.images = this.el.querySelectorAll(".slide");
      this.index = 0;
      this.interval = null;
      this.delay = 3000;
      this.swapImage();
  }

  nextImage(slide) {
      const currentImage = this.images[slide];
      currentImage.style.opacity = 1;

      for (let i = 0; i < this.images.length; i++) {
          let slide = this.images[i];
          if (slide !== currentImage) {
              slide.style.opacity = 0;
          }
      }
  }

  swapImage() {
      this.interval = setInterval(function () {
          this.index++;
          if (this.index == this.images.length) {
              this.index = 0;
          }
          this.nextImage(this.index);
      }.bind(this), this.delay);
  }

}
}

