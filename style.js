$(function() {
    // fullScreen Button
    $('#fullScreen').on('click',function() {
        var
        el = document.documentElement
      , rfs =
             el.requestFullScreen
          || el.webkitRequestFullScreen
          || el.mozRequestFullScreen
  ;
  rfs.call(el);
    })

    

    // arrays
    var alphabetArray = ["images/A.png", "images/B.png", "images/C.png", "images/D.png", "images/E.png",
    "images/F.png", "images/G.png", "images/H.png", "images/I.png", "images/J.png", "images/K.png", 
    "images/L.png", "images/M.png", "images/N.png", "images/O.png", "images/P.png", "images/Q.png", 
    "images/R.png", "images/S.png", "images/T.png", "images/U.png", "images/V.png", "images/W.png", 
    "images/X.png", "images/Y.png", "images/Z.png"];

    var numberArray = ["images/Zero.png", "images/One.png", "images/Two.png", "images/Three.png",
    "images/Four.png", "images/Five.png", "images/Six.png", "images/Seven.png", "images/Eight.png",
    "images/Nine.png"];

    var soundArray = ["sounds/Moo.mp3", "sounds/Neigh.mp3", "sounds/Cluck.mp3", "sounds/Quack.mp3",
    "sounds/Oink.mp3", "sounds/Baa.mp3", "sounds/Bark.mp3", "sounds/Meow.mp3", "sounds/Monkey.mp3",
    "sounds/Growl.mp3", "sounds/Squawk.mp3", "sounds/Trumpet.mp3"];

    // count keyclicks
    var keyCount = 0;
    var fullScreen = false;
    var lastKey = 0;

    // function that prints alphabet to screen
    function printAlphabet() {
        for (i = 0; i < alphabetArray.length; i++) {
            if (lastKey == 65 + i) {
                var img = $('<img>');
                img.attr('src', alphabetArray[i]);
                img.appendTo('#keyboardDiv');
            }
            // keeps images from extending beyond view
            if (keyCount == 15) {
                $('#keyboardDiv').html('');
                keyCount = 0;
            }
        }
    }
    // function that prints numbers to screen
    function printNumbers() {
        for (i = 0; i < numberArray.length; i++) {
            if (lastKey == 48 + i) {
                var img = $('<img>');
                img.attr('src', numberArray[i]);
                img.appendTo('#keyboardDiv');
            }
            if (keyCount == 15) {
                $('#keyboardDiv').html('');
                keyCount = 0;
            }
        }
    }
    // function that activates sounds on F1-12
    function animalSounds(e) {
        for (i = 0; i < 12; i++) {
            if (lastKey == 112 + i) {
                var audio = $('<audio>');
                var sound = $('<source>');
                audio.attr({
                    id:"sound",
                    autoplay: true});
                sound.attr("src", soundArray[i]);
                sound.appendTo(audio);
                audio.appendTo('#keyboardDiv');
                lastKey = 0;
                return false;
            }
        }
    }
    // function that activates sounds for all other keys
    function specialKeys() {
        // BACKSPACE
        if (lastKey == 8) {
            lastKey = 0;
            return false;
        // TAB
        } else if (lastKey == 9) {
            lastKey = 0;
            return false;
        // SHIFT key
        } else if (lastKey == 16) {
            lastKey = 0;
            return false;
        // CTRL
        } else if (lastKey == 17) {
            lastKey = 0;
            return false;
        // ALT
        } else if (lastKey == 18) {
            lastKey = 0;
            return false;
        // PAUSE/BREAK
        } else if (lastKey == 19) {
            lastKey = 0;
            return false;
        // CAPS LOCK
        } else if (lastKey == 20) {
            lastKey = 0;
            return false;
        // ESC
        } else if (lastKey == 27) {
            lastKey = 0;
            return false;
        // PAGE UP
        } else if (lastKey == 33) {
            lastKey = 0;
            return false;
        // PAGE DOWN
        } else if (lastKey == 34) {
            lastKey = 0;
            return false;
        // END
        } else if (lastKey == 35) {
            lastKey = 0;
            return false;
        // HOME
        } else if (lastKey == 36) {
            lastKey = 0;
            return false;
        // INSERT
        } else if (lastKey == 45) {
            lastKey = 0;
            return false;
        // DELETE
        } else if (lastKey == 46) {
            lastKey = 0;
            return false;
        // LEFT WINDOWS KEY
        } else if (lastKey == 91) {
            lastKey = 0;
            return false;
        // RIGHT WINDOWS KEY
        } else if (lastKey == 92) {
            lastKey = 0;
            return false;
        // NUM LOCK
        } else if (lastKey == 144) {
            lastKey = 0;
            return false;
        // SCROLL LOCK
        } else if (lastKey == 145) {
            lastKey = 0;
            return false;
        // MINUS KEY
        } else if (lastKey == 189) {
            lastKey = 0;
            return false;
        // EQUALS SIGN
        } else if (lastKey == 187) {
            lastKey = 0;
            return false;
        }
    }
    // function for printing to the screen
    $(window).on("keydown", document, function(e) {
        e.preventDefault();
        keyCount++;
        lastKey = e.keyCode;

        // alphabet
        printAlphabet();
        // numbers
        printNumbers();
        // F1-F12 to ignore
        animalSounds(e);

        // Special keys to ignore
        specialKeys();
    });

    // workaround for menu button
    $(window).on("contextmenu", document, function(e){
        // SELECT MENU
        if (lastKey == 93){
            lastKey = 0;
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    })

    // disable right-click of mouse
    document.addEventListener('contextmenu', event => event.preventDefault());
})
