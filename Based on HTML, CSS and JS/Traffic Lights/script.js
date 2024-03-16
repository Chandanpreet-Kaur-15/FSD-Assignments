function clickHandler(color, btn) {

    // Closure and Lexical scoping
    return function () {

        // Initially turn OFF all the lights and buttons
        document.querySelectorAll('.right > div > div').forEach(function (light) {
            light.style.backgroundColor = "white";
        });

        document.querySelectorAll('.left > div').forEach(function (button) {
            button.style.backgroundColor = "gray";
        });

        // Turn ON all the lights and buttons --> When All button is pressed
        if (color === "all") {
            document.querySelectorAll('.right > div > div').forEach(function (light) {
                light.style.backgroundColor = light.id;
            });

            var buttonColors = {
                'red-btn': 'red',
                'orange-btn': 'orange',
                'green-btn': 'green',
                'all-btn': 'all'
            };
            document.querySelectorAll('.left > div').forEach(function (button) {
                var buttonId = button.id;
                button.style.backgroundColor = buttonColors[buttonId];
            });
        }

        // RESET all the lights --> When RESET button is pressed
        else if (color === "reset") {
            document.querySelectorAll('.left > div').forEach(function (button) {
                button.style.backgroundColor = "gray";
            });

            if (stopAlt) {
                stopAlt();
                stopAlternating = null;
            }
        }

        // ON all the lights alternatively for sometime continuouly --> until RESET button is pressed
        else if (color === "alt") {
            var output = document.querySelectorAll('.right > div > div');
            var output2 = document.getElementById('alt-btn');
            var index = 0;
            var index2 = 0;


            // Stop alternating lights
            stopAlt = function () {
                clearInterval(altInterval);
            };

            var altInterval = setInterval(function () {
                // Turn OFF all lights
                output.forEach(function (light) {
                    light.style.backgroundColor = "white";
                });

                output2.style.backgroundColor = "gray";


                // Turn ON the current light
                output[index].style.backgroundColor = output[index].id;
                // console.log(output[index].id);
                output2.style.backgroundColor = output[index].id;

                // Move to the next light
                index = (index + 1) % output.length;

            }, 1000);
        }

        // Turn ON the light when corresponding button is pressed
        else {
            document.getElementById(color).style.backgroundColor = `${color}`;
            document.getElementById(btn).style.backgroundColor = `${color}`;
        }

    }
}

document.getElementById('red-btn').onclick = clickHandler("red", "red-btn")
document.getElementById('orange-btn').onclick = clickHandler("orange", "orange-btn")
document.getElementById('green-btn').onclick = clickHandler("green", "green-btn")
document.getElementById('all-btn').onclick = clickHandler("all")
document.getElementById('reset-btn').onclick = clickHandler("reset")
document.getElementById('alt-btn').onclick = clickHandler("alt")