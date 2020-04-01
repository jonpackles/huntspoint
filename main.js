var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1t42k98OqixLbQGE0nLkFkMKSEGhC-RfvO0sKJ9zoXb8/edit?usp=sharing';

function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: loadContent,
        simpleSheet: true
    })
}

// function showInfo(data, tabletop) {
//   alert('Successfully processed!')
//   console.log(data);
// }

window.addEventListener('DOMContentLoaded', init)


$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
});


function loadContent(data, tabletop) {


    console.log(data);

    for (let i = 0; i < data.length; i++) {

        let childNumber = i + 1;
        let imageURL = 'url(' + data[i].imgURL + ')'

        console.log(data[0].imgURL);

        console.log(data[0].text);
      
        

        $('.section:nth-child('+ childNumber + ')').css('background-image', imageURL);

       


    }



}