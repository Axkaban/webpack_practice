// import _ from 'lodash';
import { cube } from './math';
import printMe from './print';

if (process.env.NODE_ENV !== 'production') {
    console.log('Dev Mode! Yay!')
}

function component() {
    // const element = document.createElement('div');
    // const btn = document.createElement('button');
    const element = document.createElement('pre');

    // element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.innerHTML = [
        'hello webpack',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
//    btn.innerHTML = 'Click me and check the console!';
//    btn.onclick = printMe;

//    element.appendChild(btn);



    return element;
}
document.body.appendChild(component());
// let element = component();
// document.body.appendChild(element);

// if (module.hot){
//     module.hot.accept('./print.js', function() {
//         console.log('acceptiong the updated printMe module!');
//         // printMe();
//         document.body.removeChild(element);
//         element = component(); // Re-render the "component" to update the click handler
//         document.body.appendChild(element);
//     })
// }