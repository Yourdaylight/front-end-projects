var total=0

function getPrice(obj) {
    var dic= {
        "Espresso": 1.23,
        "Latte": 3.21,
        "Cappuccino": 3.45,
        "Coffee": 4.55,
        "Biscotti": 3.19,
        "Scone": 2.95
    }
    var key=$(obj).attr("value")
    var price=dic[key]
    $("#order").append("You ordered "+key +":"+price+"\n")
    total+=price
}

function clear() {
    $("#order").val("")
}

function calculate() {
    $("#total").html("Total:"+total)
    total=0
    clear()
}