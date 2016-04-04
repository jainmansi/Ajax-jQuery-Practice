
  window.onload = function() {
    document.getElementById('oneButton').onclick = addEmailIcon;
    document.getElementById('twoButton').onclick = makeTablePretty;
    document.getElementById('threeButton').onclick = fixTableTitle;
    document.getElementById('fourButton').onclick = messUpP;
    document.getElementById('fiveButton').onclick = messAllPInDiv;
    document.getElementById('sixButton').onclick = highlightFourth;
    document.getElementById('sevenButton').onclick = findAttribute;
    document.getElementById('eightButton').onclick = findPThird; };

    function addEmailIcon() {
      $('a[href^=mailto:]').addClass('email');
    }

    function makeTablePretty() {
      $('tr:nth-child(even)').addClass('tableAlt');
    }

    function fixTableTitle() {
      $('tr:nth-child(1)').addClass('tableTitle');
    }

    function messUpP() {
      $('p').eq(3).toggleClass("styleSample");
    }

    function messAllPInDiv() {
      $("div > p").toggleClass("styleSample");
    }

    function highlightFourth() {
      $('p:contains("Fourth")').css("color", "yellow");
    }

    function findAttribute() {
      $('p[align]').css("font-style", "italic");
    }

    function findPThird() {
      if($('#third').is('p')){
        alert("I found the paragraph named third");
      }
    }
