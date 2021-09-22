
//KiloMeter to Meter Function
function kilometerToMeter(km) {
    var result = km * 1000;
    return result;
}



//Budget Calculator 
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    if ((watch> 0 && phone > 0 && laptop > 0) && (watch % 1 == 0 && laptop % 1 == 0 && phone % 1 == 0)) {
        var total = watchPrice * watch + phonePrice * phone + laptopPrice * laptop;
        return total;
    }
    else{
      return "Pease enter the valid number"
    }
}





//======Hotel Cost Function==========
function hotelCost(night) {
    if (night < 0 || night % 1!= 0) {
        return "Please enter the valid number"
    }
    if (night <= 10) {
        return night * 100;
    }
    else if (night <= 20){
        var secondTotalNight = night - 10;
        var totalBill = 1000 + secondTotalNight * 80;
        return totalBill;
    }
    else{
        var restNights = night - 20;
        return 1800 + restNights * 50;
    }
}



//Mega friend

function megaFriend(names) {
    var megaName = names[0].length;
    var name = "";
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (megaName < element.length) {
           megaName = element.length;
            name = element;
        }
        for (let i = 0; i < name.length; i++) {
            const char = name[i];
            if (char == " " && char[i-1] == " ") {
                return "Please enter the valid input";
            }
        }
    }
    return name;
}


