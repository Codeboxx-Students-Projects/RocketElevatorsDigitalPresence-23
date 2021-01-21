
function Residentiel() {
    //my function for Residentiel

    var s = document.getElementById('item1');
    var item1 = s.options[s.selectedIndex].value; 

        
      
    if (item1 == 1) {
        //if the first item is press do this condition 
        var number_of_apartments=document.getElementById("num1").value; //value who stuck the information of the number of appartement

var number_of_floors=document.getElementById("num2").value; //value who stuck the information of the number of floors
var cost_installation = 2269; //value of the cost for the installation
var cost_elevator=22695; //value who stuck the price of the elevator
var total_prix=parseFloat(cost_elevator)+parseFloat(cost_installation ); //value who stuck the total amount


var result=parseFloat(number_of_apartments)/parseFloat(number_of_floors); //resulte for divide number_of_apartments with number_of_floors


if (result < 20)
    Math.trunc(13.37);
    // if result is smaller then 20 do this conditition 
    var result_cage=parseFloat(result)/6;  // stuck the number of cage 
    var result_arrondie= Math.round(result_cage);// put
   
    document.getElementById("reponse3").innerHTML="prix unitaire:"+total_prix; //print the price for one elevator
    document.getElementById("installation").innerHTML="price for installation:"+result_arrondie*cost_installation; //print the number of the cage multipled by the cost of installation
    document.getElementById("answer").innerHTML="Le nombre d'ascenseurs:"+Math.round(result_cage); //print the number of escalator
    document.getElementById("reponse").innerHTML="final price:"+final_price*total_prix; //print the total value
   

    
 

    
    


if (result > 20)
    
    var result2=parseFloat(result)/6;
    var result3=parseFloat(result2)*total_prix;
    
    document.getElementById("answer2").innerHTML="prix unitaire"+total_prix;
    document.getElementById("reponse1").innerHTML="prix total"+result3;


}







else if (item1 == 2){
    //if the first item is press do this condition 
    var number_of_apartments=document.getElementById("num1").value; //value who stuck the information of the number of appartement

var number_of_floors=document.getElementById("num2").value; //value who stuck the information of the number of floors
var cost_installation = 4814.55; //value of the cost for the installation
var cost_elevator= 37035; //value who stuck the price of the elevator
var total_prix=parseFloat(cost_elevator)+parseFloat(cost_installation ); //value who stuck the total amount


var result=parseFloat(number_of_apartments)/parseFloat(number_of_floors); //resulte for divide number_of_apartments with number_of_floors


if (result < 20)

// if result is smaller then 20 do this conditition 
var result_cage=parseFloat(result)/6;  // stuck the number of cage 
var result_arrondie= Math.round(result_cage);// put

document.getElementById("reponse3").innerHTML="prix unitaire:"+total_prix; //print the price for one elevator
document.getElementById("installation").innerHTML="price for installation:"+result_arrondie*cost_installation; //print the number of the cage multipled by the cost of installation
document.getElementById("answer").innerHTML="Le nombre d'ascenseurs:"+Math.round(result_cage); //print the number of escalator
document.getElementById("reponse").innerHTML="final price:"+final_price*total_prix; //print the total value









if (result > 20)

var result2=parseFloat(result)/6;
var result3=parseFloat(result2)*total_prix;

document.getElementById("answer2").innerHTML="prix unitaire"+total_prix;
document.getElementById("reponse1").innerHTML="prix total"+result3;


}

 if (item1 == 3) {
    //if the first item is press do this condition 
    var number_of_apartments=document.getElementById("num1").value; //value who stuck the information of the number of appartement

var number_of_floors=document.getElementById("num2").value; //value who stuck the information of the number of floors
var cost_installation =7392; //value of the cost for the installation
var cost_elevator=46200; //value who stuck the price of the elevator
var total_prix=parseFloat(cost_elevator)+parseFloat(cost_installation ); //value who stuck the total amount


var result=parseFloat(number_of_apartments)/parseFloat(number_of_floors); //resulte for divide number_of_apartments with number_of_floors


if (result < 20)

// if result is smaller then 20 do this conditition 
var result_cage=parseFloat(result)/6;  // stuck the number of cage 
var result_arrondie= Math.round(result_cage);// put

document.getElementById("reponse3").innerHTML="prix unitaire:"+total_prix; //print the price for one elevator
document.getElementById("installation").innerHTML="price for installation:"+result_arrondie*cost_installation; //print the number of the cage multipled by the cost of installation
document.getElementById("answer").innerHTML="Le nombre d'ascenseurs:"+Math.round(result_cage); //print the number of escalator
document.getElementById("reponse").innerHTML="final price:"+final_price*total_prix; //print the total value









if (result > 20)

var result2=parseFloat(result)/6;
var result3=parseFloat(result2)*total_prix;

document.getElementById("answer2").innerHTML="prix unitaire"+total_prix;
document.getElementById("reponse1").innerHTML="prix total"+result3;


}
}

//end Residentiel


function commercial(){

     //my function for Residentiel

     var s = document.getElementById('item2');
     var item2 = s.options[s.selectedIndex].value; 
 
         
       
     if (item2 == 1) {
          var number_of_cage=document.getElementById("lol1").value; 
          var cost_installation = 12860.50;
          var cost_elevator = 128605;
          var total_for_one = cost_installation+cost_elevator;
           
          document.getElementById("a").innerHTML="Numbers of elevator:"+number_of_cage;
          document.getElementById("b").innerHTML="price for one:"+total_for_one;

          document.getElementById("c").innerHTML="price for installation"+cost_installation*number_of_cage;
          document.getElementById("d").innerHTML="total price:"+total_for_one*number_of_cage;

    }

        
    if (item2 == 2) {
        var number_of_cage=document.getElementById("lol1").value; 
        var cost_installation = 209865;
        var cost_elevator = 27282.45;
        var total_for_one = cost_installation+cost_elevator;
         
        document.getElementById("a").innerHTML="Numbers of elevator:"+number_of_cage;
        document.getElementById("b").innerHTML="price for one:"+total_for_one;

        document.getElementById("c").innerHTML="price for installation"+cost_installation*number_of_cage;
        document.getElementById("d").innerHTML="total price:"+total_for_one*number_of_cage;

        

  }
      
  if (item2 == 3) {
    var number_of_cage=document.getElementById("lol1").value; 
    var cost_installation = 209865;
    var cost_elevator = 27282.45;
    var total_for_one = cost_installation+cost_elevator;
     
    document.getElementById("a").innerHTML="Numbers of elevator:"+number_of_cage+"$";
    document.getElementById("b").innerHTML="price for one:"+total_for_one+"$";

    document.getElementById("c").innerHTML="price for installation"+cost_installation*number_of_cage+"$";
    document.getElementById("d").innerHTML="total price:"+total_for_one*number_of_cage+"$";

}
}
function CorporateHybride(){

    var s = document.getElementById('item3');
    var item3 = s.options[s.selectedIndex].value; 

        
      
    if (item3 == 1) {

        var max_personn_per_stage = document.getElementById("lol20").value;
        var number_stage =  document.getElementById("lol21").value;
        var person_total = max_personn_per_stage*number_stage;
        var num_colone = number_stage/20;
        var elevator_number= person_total/1000;
        var elevator_colum= number_stage/20;
        var total_elevator=elevator_number*elevator_colum;
        var cost_installation= 4539;
        var cost_elevator=45390;
        var cost_total = cost_installation+cost_elevator;
    
        document.getElementById("a1").innerHTML="Numbers of elevator:"+cost_elevator*total_elevator;
        document.getElementById("a2").innerHTML="price for one:"+cost_total;
        document.getElementById("a3").innerHTML="price for installation"+cost_elevator*total_elevator;
        document.getElementById("a3").innerHTML="total price"+cost_elevator*total_elevator;

   
}
if (item3 == 2) {

    var max_personn_per_stage = document.getElementById("lol20").value;
    var number_stage =  document.getElementById("lol21").value;
    var person_total = max_personn_per_stage*number_stage;
    var num_colone = number_stage/20;
    var elevator_number= person_total/1000;
    var elevator_colum= number_stage/20;
    var total_elevator=elevator_number*elevator_colum;
    var cost_installation= 9629.10;
    var cost_elevator=74070;
    var cost_total = cost_installation+cost_elevator;

    document.getElementById("a1").innerHTML="Numbers of elevator:"+cost_elevator*total_elevator;
    document.getElementById("a2").innerHTML="price for one:"+cost_total;
    document.getElementById("a3").innerHTML="price for installation"+cost_elevator*total_elevator;
    document.getElementById("a3").innerHTML="total price"+cost_elevator*total_elevator;


}
if (item3 == 3) {

    var max_personn_per_stage = document.getElementById("lol20").value;
    var number_stage =  document.getElementById("lol21").value;
    var person_total = max_personn_per_stage*number_stage;
    var num_colone = number_stage/20;
    var elevator_number= person_total/1000;
    var elevator_colum= number_stage/20;
    var total_elevator=elevator_number*elevator_colum;
    var cost_installation= 14784;
    var cost_elevator=92400;
    var cost_total = cost_installation+cost_elevator;

    document.getElementById("a1").innerHTML="Numbers of elevator:"+cost_elevator*total_elevator;
    document.getElementById("a2").innerHTML="price for one:"+cost_total;
    document.getElementById("a3").innerHTML="price for installation"+cost_elevator*total_elevator;
    document.getElementById("a3").innerHTML="total price"+cost_elevator*total_elevator;


}





}




 




