
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    const source = $("#apartments-template").html()
    let template = Handlebars.compile(source)
    
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    //Your code goes here.
        
        let newApartment = template({apartments:apartments})
        $("#results").append(newApartment)
    
}

renderApts(apartments) //renders apartments when page loads