/* WHILE USING THE DROP-DOWN.JS SCRIPT. ALWAYS REMEMBER THAT THE DROP DOWN CONTAINER 
IS IDNETIFIES BY IT'S LABEL WHICH SHOULD BE INSIDE THE <P> TAG. AND THE CLASSES OF CONTAINER
AND OPTIONS SHOULD BE .option-name AND .options RESPECTIVELY*/


const containerLabel = document.querySelectorAll('.drop-down p'); //container is identifying with its child p
const containerArray = Array.from(containerLabel);  //converting cotainer elements into an array

const dropDown = document.querySelectorAll('.drop-down');
const dropDownArray = Array.from(dropDown);

let options; 

document.addEventListener('click', (element) => {
    //finding the respective options of the selected container
    
    //checking whether the clicked element is a drop-down list or not
    for(let i = 0; i < containerArray.length; i++){

        //selecting the options of the selected container
        let containerId = containerArray[i].getAttribute('id');
        options = document.querySelector(`#${containerId} + .options`);
        if(element.target == containerArray[i]){
            window.getComputedStyle(options).display == 'none'? display('block'): display('none')
        }
        else{
            display('none');
        }
    
    }
})

//hover properties
// document.addEventListener('mouseover', (element) => {
//     //finding the respective options of the selected container
    
//     //checking whether the clicked element is a drop-down list or not
//     for(let i = 0; i < dropDownArray.length; i++){

//         //selecting the options of the selected container
//         let dropDownId = dropDownArray[i].getAttribute('id');
//         let containerId = containerArray[i].getAttribute('id');
//         options = document.querySelector(`#${dropDownId} .options`);
        
//         let optionChildren = options.children;
//         if(element.target == dropDownArray[i] || element.target == containerArray[i] || element.target in optionChildren || element.target == options.parentElement || element.target == options.parentElement.pare){
//             try{
//                 display('block');
//             }catch{}
//         }
//         else {
//             console.log(options);
//             console.log(element.target);
//             // try{
//             //     options.style.display = 'none';
//             // }catch{}
//         }
    
//     }
// })

function display(value){
    options.style.display = value;
}
