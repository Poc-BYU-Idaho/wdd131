// Select the select element from the DOM
const themeSelector = document.getElementsByTagName('select')[0];

function changeTheme() {
    // check to see what the current value of our select is.
    // The current value is conveniently found in themeSelector.value!
    let currentTheme = themeSelector.value;

    // if the value is dark then:
    if (currentTheme == 'dark') {
        // add the dark class to the body
        document.querySelector('body').classList.add('dark');
        // change the source of the logo img to point to the white logo.
        document.querySelector('img').src = 'byui-logo_white.png';
    }
    // otherwise
    else {
        // remove the dark class
        document.querySelector('body').classList.remove('dark');
        // make sure the logo src is the blue logo.
        document.querySelector('img').src = 'byui-logo_blue.webp';
    }

    }



// This function also works
// function changeTheme() {
//     // check to see what the current value of our select is.
//     // The current value is conveniently found in themeSelector.value!
//     let currentTheme = themeSelector.value;

//     // if the value is dark then:
//     if (currentTheme == 'dark') {
//         // add the dark class to the body
//         document.querySelector('body').classList.toggle('dark');
//         // change the source of the logo img to point to the white logo.
//         document.querySelector('img').src = 'byui-logo_white.png';
//     }
//     // otherwise
//     else {
//         // remove the dark class
//         document.querySelector('body').classList.toggle('dark');
//         // make sure the logo src is the blue logo.
//         document.querySelector('img').src = 'byui-logo_blue.webp';
//     }

//     }



// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);
