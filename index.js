//sets updated date in (month, day, and year format)
var currentDate = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").html(currentDate);


var hours = [];
  
  for (var hour = 9; hour < 18; hour++) {
      hours.push(moment({hour}).format('h  a'));

      $('.container').append(`<div class="row time-block" data-time="${hour}"> 
         <!--hour column-->
             <div class="col-sm col-md-2 hour"> 
               <p class=dayHour>${moment({hour}).format('h  a')}</p>
             </div> 
             
         <!--user input text area-->
             <div class="col-sm col-md-8 d-flex description"> 
               <textarea class=textArea></textarea> 
             </div> 
        
         <!--saveBtn-->
             <div class="col-sm col-md-2 saveBtn">
             <i class="far fa-save fa-2x" id=icon></i>  
             </div>`);
  }


var m = moment();
  $.each($(".time-block"), function (index, value) {
      let dateHour = $(value).attr("data-time");
      if (Number(dateHour) === m.hour()) {
          $(this).find("textarea").addClass('present');
      } else if (Number(dateHour) < m.hour()) {
          $(this).find("textarea").addClass('past');
      } else {
          $(this).find("textarea").addClass('future');
      }
  });

let timeBlock = {};
  if (localStorage.getItem('timeBlock')) {
      timeObject = JSON.parse(localStorage.getItem('timeBlock'));
  }else{
    timeBlock = {
      '9': { time: "9", value: ""},
      '10':{ time: "10", value: ""},
      '11':{ time: "11", value: ""},
      '12':{ time: "12", value: ""},
      '13':{ time: "13", value: ""},
      '14':{ time: "14", value: ""},
      '15':{ time: "15", value: ""},
      '16':{ time: "16", value: ""},
      '17':{ time: "17", value: ""}
    };
  }

//set value of timeObject to equal the user input for each row 
$(".time-block").each(function(){
   $(this).find(".textArea").val(timeObject[$(this).attr("data-time")].value);

  });

 //saves value to local storage
 $(".saveBtn").on('click', function(event){
     //set timeObject time attribute
     var timeValue = $(this).closest(".time-block").attr("data-time");
    //set timeObject value attribute
     var textValue = $(this).closest(".time-block").find(".textArea").val();
     timeObject[timeValue].value = textValue;

  //saves user input in each object to local storage
     localStorage.setItem('timeObject', JSON.stringify(timeObject));



 });
  
  