$(document).ready(function(){
    var title = "toobin"
    $("a").click(function() {
//          console.log($(this).attr('title'));
          let title = this.getAttribute('title');
    
    $.getJSON("/speakers/json_files/"+title + ".json", function(data) {
         var html='';
        $("#main").html('');
				$.each(data.speakers, function(key, speakers) {
//				    $("#main").replaceWith(
                        html+=  "<h1>" + speakers.title + "</h1>";
                        html+= "<img src=" + speakers.image + " >";
				        html+= "<h3>"+ speakers.month +"<br>" + speakers.speaker + "</h3>"; 
				        html+= "<p>" + speakers.text + "</p>";
//				    );
				});
            $("#main").append(html);
          
        });
        
   
        
      
                     
    });
      $("#toobinId")[0].click();
}); // end ready