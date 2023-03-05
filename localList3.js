$(document).ready(function(){

let photoForm = document.getElementById("photoForm");
let nameForm = document.getElementById("nameForm");
let listForm = document.getElementById("listForm");

let changePhoto = document.getElementById("changePhoto");
let changeMsg = document.getElementById("changeMsg");
let changeList = document.getElementById("changeList");

let changePhotoHere = document.getElementById("changePhotoHere");
let changeMsgHere = document.getElementById("changeMsgHere");
let changeListNameHere = document.getElementById("changeListNameHere");

let listNameWarning = document.getElementById("listNameWarning");
let listWarning = document.getElementById("listWarning");
let nameWarning = document.getElementById("nameWarning");

// let optionsWhole = document.getElementById("optionsSectionsWhole");
// let optionsLeft = document.getElementById("optionsSectionLeft");
// let optionsRight = document.getElementById("optionsSectionRight");

let onOffLeft = 0;
let onOffName = 0;
let onOffListName = 0;
let onOffPhoto = 0;
let onOffClear = 0;

photoForm.style.display = "none";
nameForm.style.display = "none";
listForm.style.display = "none";



//CHECK to see if KEY="name" exists, if not, create it 
if(localStorage.getItem("name") === null) {
    localStorage.setItem("name", 'Guest');
}
// SELECT the html ID=welcomeMsg
let yourNameHere = document.getElementById("welcomeMsg");
// GET LOCALSTORAGE with KEY="name" - then add to the welcome msg
let currentName = localStorage.getItem("name");
yourNameHere.append(currentName);
//SET html title to reflect their username
document.title = currentName + "'s Custom List";

//CHECK to see if KEY="listName" exists, if not, create it 
if(localStorage.getItem("listName") === null) {
localStorage.setItem("listName", 'My List');
}
// SELECT the html ID=listName
let listName = document.getElementById("listName");
// GET LOCALSTORAGE with KEY=listName - then add to listname
let currentListName = localStorage.getItem("listName");
listName.innerHTML = currentListName;

//CHECK to see if KEY="tricks" exists, if not, create it 
if(localStorage.getItem("tricks") === null) {
let tricks = [];
localStorage.setItem("tricks", JSON.stringify(tricks));
}
let tricks = JSON.parse(localStorage.getItem("tricks"));

//CHECK to see if KEY="markedOff" exists, if not, create it 
if(localStorage.getItem("markedOff") === null) {
let markedOff = [];
localStorage.setItem("markedOff", JSON.stringify(markedOff));
}
let markedOff = JSON.parse(localStorage.getItem("markedOff"));
let markedOffLength = markedOff.length;


// SELECT the html ID="theList" to add list items to
let theShown = document.getElementById("theList");


//CHECK to see if KEY="photo" exists, if not, create it 
if(localStorage.getItem("photo") === null) {
localStorage.setItem("photo", 'https://th.bing.com/th/id/R.356f105d320c472d3773491cff1d3131?rik=IvixOit%2bMXjg3A&riu=http%3a%2f%2fgetdrawings.com%2fimg%2fblank-face-silhouette-18.png&ehk=5AjR0PshazWiefialG5tIZEUFK7P2LsIzftM9H0Tz%2fs%3d&risl=&pid=ImgRaw&r=0');
}

let currentPhoto = localStorage.getItem("photo");
let photoArea = document.getElementById("photo");
photoArea.src = currentPhoto;





function closeAllWarnings() {
    photoWarning.innerHTML = "";
    nameWarning.innerHTML = "";
    listNameWarning.innerHTML = "";
    listWarning.innerHTML = "";
}

function showActiveOption() {
    changePhoto.classList.remove("activeOption");
    changeMsg.classList.remove("activeOption");
    changeList.classList.remove("activeOption");
}




//change welcome color at top of page depending on first letter of name
let alphaArray = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h",
"I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q",
"R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"];
let nameFirstLetter = JSON.stringify(currentName)[1];

let nameInAlpha = alphaArray.indexOf(nameFirstLetter);

if(nameInAlpha >= 0 && nameInAlpha <= 17) {
    yourNameHere.parentElement.style.backgroundColor = "";
} else if(nameInAlpha >= 18 && nameInAlpha <= 35) {
    yourNameHere.parentElement.style.backgroundColor = "";
} else if(nameInAlpha >= 36 && nameInAlpha <= 52) {
    yourNameHere.parentElement.style.backgroundColor = "";
} else {
    yourNameHere.style.backgroundColor = "black";
    yourNameHere.style.color = "whitesmoke";
}






//Show options dropdown

    $("#showOptions").click(function(){
        
        closeAllWarnings();
        showActiveOption();
        if(onOffLeft === 0) {
            onOffLeft++;
            $("#options").fadeIn("slow");
            $("#showOptions").html("Options &minus;");
            $("#showOptions").attr("id", 'optionsChangeColor');
        } else if(onOffLeft === 1) {
            onOffLeft--;
            $("#options").fadeOut("slow");
            $("#optionsChangeColor").html("Options &plus;");
            $("#optionsChangeColor").attr("id", 'showOptions');
            $("#nameForm").fadeOut(600);
            $("#listForm").fadeOut(600);
            $("#photoForm").fadeOut(600);
            onOffName = 0;
            onOffListName = 0;
            onOffPhoto = 0;
        }
    });

  

//Show the changePhoto form 

    $("#changePhoto").click(function(){
        onOffListName = 0;
        onOffName = 0;
        showActiveOption();
        closeAllWarnings();
        if(onOffPhoto === 0) {
            onOffPhoto++;
            $("#photoForm").fadeIn( 1000 );    
            changePhoto.classList.add("activeOption");      
        } else if(onOffPhoto === 1) {
            onOffPhoto--;
            $("#photoForm").fadeOut("slow");
            changePhoto.classList.remove("activeOption");
        }
    });

  changePhoto = document.getElementById("changePhoto");
  changePhoto.addEventListener("click", showAndHidePhoto, false);
  function showAndHidePhoto() {
      nameForm.style.display = "none";
      listForm.style.display = "none";
      closeAllWarnings();
      changePhotoHere.focus();
  };     

  //The code for the Change Photo button, sets localstorage "photo"
//and refreshes the page to display the changes.
photoBtn = document.getElementById("photoBtn");
photoBtn.addEventListener("click", photoChanger, false);
function photoChanger() {
    
    let theNewPhoto = document.getElementById("changePhotoHere").value;
    let firstPhotoChar = theNewPhoto.charAt(0);
    let lastPhotoChar = theNewPhoto.charAt(theNewPhoto.length - 1);
    let lastFourOfPhoto = theNewPhoto.substring(theNewPhoto.length - 4, theNewPhoto.length);
    let lastFiveOfPhoto = theNewPhoto.substring(theNewPhoto.length - 5, theNewPhoto.length);
    console.log(lastFourOfPhoto);
    console.log(lastFiveOfPhoto);
    console.log(firstPhotoChar);
    console.log(lastPhotoChar);
    
    if(theNewPhoto === "") {
        photoWarning.innerHTML = "Photo URL cannot be blank";
    } else if(firstPhotoChar === "'" || firstPhotoChar === '"'){
        photoWarning.innerHTML = "URL cannot end or start with" + ' \'' + " or" + ' \"' + " characters"; 
    } else if(lastPhotoChar === "'" || lastPhotoChar === '"'){
        photoWarning.innerHTML = "URL cannot end or start with" + ' \'' + " or" + ' \"' + " characters"; 
    } else if(theNewPhoto == currentPhoto) {
        photoWarning.innerHTML = "URL is the same as current photo"; 
    } else if(theNewPhoto.includes(".jpeg") || theNewPhoto.includes(".jpg") || theNewPhoto.includes(".png") || theNewPhoto.includes(".svg")) {
        localStorage.setItem("photo", theNewPhoto);
        location.reload(true);
    } else {
        photoWarning.innerHTML = "URL is not a an accepted file (JPEG, JPG, PNG, SVG)"; 
    }
    
}
//cancel the photo change and return to normal
photoCancel = document.getElementById("photoCancel");
photoCancel.addEventListener("click", cancelPhotoFunc, false);
function cancelPhotoFunc() {
    // photoForm.style.display = "none";
    $('#photoForm').fadeOut( 800 );
    showActiveOption();
            onOffName = 0;
            onOffListName = 0;
            onOffPhoto = 0;
}

//if enter is clicked while focused on photo input - click the button
$("#changePhotoHere").keydown(function (event) { 
    if (event.which == 13) { 
        event.preventDefault();
        $('#photoBtn').click(); 
    } 
   });
 





changeName = document.getElementById("changeMsg");

    $("#changeMsg").click(function(){
        $("#photoForm").css("display", "none");
        $("#listForm").css("display", "none");
        closeAllWarnings();
        showActiveOption();
        onOffListName = 0;
        onOffPhoto = 0;
        if(onOffName === 0) {
            onOffName++;
            $("#nameForm").fadeIn( 1000 );
            changeNameHere.focus();
            changeMsg.classList.add("activeOption");

        } else if(onOffName === 1) {
            onOffName--;
            $("#nameForm").fadeOut("slow");
            changeMsg.classList.remove("activeOption");

        }
    });


//The code for the Change Name button, sets localstorage "name"
//and refreshes the page to display the changes.
nameBtn = document.getElementById("nameBtn");
nameBtn.addEventListener("click", nameChanger, false);
function nameChanger() {
    
    let theNewName = document.getElementById("changeNameHere").value;
    if(theNewName === "") {
        nameWarning.innerHTML = "Username cannot be blank";
    } else if(theNewName == currentName) {
        nameWarning.innerHTML = "Username is already " + "\'" + currentName + "\'"; 
    } else {
        localStorage.setItem("name", theNewName);
        location.reload(true);
    }
    
}
//cancel the name change and return to normal
nameCancel = document.getElementById("nameCancel");
nameCancel.addEventListener("click", cancelNameFunc, false);
function cancelNameFunc() {
    // nameForm.style.display = "none";
    $('#nameForm').fadeOut( 800 );
    showActiveOption();
            onOffName = 0;
            onOffListName = 0;
            onOffPhoto = 0;
}

//if enter is clicked while focused on name input - click the button
$("#changeNameHere").keydown(function (event) { 
    if (event.which == 13) { 
        event.preventDefault();
        $('#nameBtn').click(); 
    } 
   });





changeList = document.getElementById("changeList");
// changeList.addEventListener("click", showAndHideList, false);
// function showAndHideList() {
//     photoForm.style.display = "none";
//     nameForm.style.display = "none";
// }        

    $("#changeList").click(function(){
        $("#photoForm").css("display", "none");
        $("#nameForm").css("display", "none");
        closeAllWarnings();
        showActiveOption();
        onOffName = 0;
        onOffPhoto = 0;
        if(onOffListName === 0) {
            onOffListName++;
            $("#listForm").fadeIn( 1000 );
            changeListNameHere.focus();
            changeList.classList.add("activeOption");
        } else if(onOffListName === 1) {
            onOffListName--;
            $("#listForm").fadeOut("slow");
            changeList.classList.remove("activeOption");

        }
    });

//The code for the Change List Name button, sets local storage
// for the "listName" property
listBtn = document.getElementById("listBtn");
listBtn.addEventListener("click", listNameChanger, false);
function listNameChanger() {
    let theNewListName = document.getElementById("changeListNameHere").value;
    if(theNewListName === "") {
        listNameWarning.innerHTML = "List name cannot be blank";
    } else if(theNewListName == currentListName) {
        listNameWarning.innerHTML = "List name is already " + "\'" + currentListName + "\'"; 
    } else {
        localStorage.setItem("listName", theNewListName);
        location.reload(true);
    }
}
//cancel the list name change and return to normal
listCancel = document.getElementById("listCancel");
listCancel.addEventListener("click", cancelListFunc, false);
function cancelListFunc() {
    // listForm.style.display = "none";
    $('#listForm').fadeOut( 800 );
    showActiveOption();
        onOffName = 0;
        onOffListName = 0;
        onOffPhoto = 0;
}

//if enter is clicked while focused on listname input - click the button
$("#changeListNameHere").keydown(function (event) { 
    if (event.which == 13) { 
        event.preventDefault();
        $('#listBtn').click(); 
    } 
   });















//important code to get length of the tricks "array"
let arrayLength = JSON.parse(localStorage.getItem("tricks")).length;
    

        //show all array items in a <p> element on the html page
        for (let i = 0; i < arrayLength; i++) {
            let markedName = JSON.parse(localStorage.getItem("tricks"))[i];
            theShown.innerHTML += "<div class='listDiv'><p class='listItem'>" + JSON.parse(localStorage.getItem("tricks"))[i] + "</p> <div class='deleteItem'>&#10005;</div></div>";
            for (let j = 0; j < markedOffLength; j++) {
                if(markedOff[j] == markedName) {
                    let listItem = document.querySelectorAll(".listItem");
                    listItem[i].classList.toggle("newClass");
                };
            }
        }
    
        let emptyMsg = document.getElementById("emptyMsg");
        if(arrayLength === 0) {
            emptyMsg.innerHTML = "<p>No List Items</p>";
        }

        //to toggle class on list items - i.e. marked off
        let listItem = document.querySelectorAll(".listItem");
        listItem.forEach(item => {
            item.addEventListener("click", function addAClass(event) {
                item.classList.toggle("newClass");
                let alreadyListed = item.innerHTML;
                console.log(alreadyListed);
                console.log(markedOff.length);
                let alreadyMarkedOff = 0;
                if (markedOff.indexOf(alreadyListed) < 0) {
                    markedOff.push(alreadyListed);
                    localStorage.setItem("markedOff", JSON.stringify(markedOff));
                    // location.reload(true);
                } else {
                    markedOff.splice(markedOff.indexOf(alreadyListed), 1);
                    localStorage.setItem("markedOff", JSON.stringify(markedOff));
                }
            });
        });

        //to create delete button for list items
        let deleteItem = document.querySelectorAll(".deleteItem");
        deleteItem.forEach(deleteItem => {
            deleteItem.addEventListener("click", function deleteAnItem(event) {
                console.log("deleteItem Clicked", event);
                let parentHTML = deleteItem.parentElement.firstElementChild.innerHTML;
                console.log(parentHTML);
                tricks.splice(tricks.indexOf(parentHTML), 1);
                console.log(tricks);
                localStorage.setItem("tricks", JSON.stringify(tricks));
                if (markedOff.indexOf(parentHTML) !== -1) {
                    markedOff.splice(markedOff.indexOf(parentHTML), 1);
                    localStorage.setItem("markedOff", JSON.stringify(markedOff));
                } 
                location.reload(true);
        
            });
        });

        // listItem.addEventListener("click", addAClass, false);
        // function addAClass() {
        //     listItem.classList.toggle("newClass");
        // }   
        



//important code to get length of the tricks "array"
// console.log(JSON.parse(localStorage.getItem("tricks")).length);


//Adding an item to the list and the tricks array
itemBtn = document.getElementById("itemBtn");
itemBtn.addEventListener("click", listFunction, false);
function listFunction() {
        closeAllWarnings();
    let newItem = document.getElementById("addItem").value;
    // console.log(newItem);
    // console.log(realNewItem);
    
    //If new item does NOT equal and empty "", then push to array,
    //add to localstorage, and reload the page - which will show each
    //array item


    if(newItem != "") {
        let alreadyExists = 0;
        for(let i = 0; i < tricks.length; i++) {
            if(newItem == tricks[i]) {
                alreadyExists++;
                console.log("already exists is: " + alreadyExists);
                listWarning = document.getElementById("listWarning");
                listWarning.innerHTML = "List Item " + "\'" + newItem + "\'" +" Already Exists";
            }
        }
        if(alreadyExists > 0) {

        } else {
            tricks.push(newItem);
            localStorage.setItem("tricks", JSON.stringify(tricks));
            location.reload(true);
        }
        
    } else {
        listWarning.innerHTML = "List item cannot be blank";
    }

}


//Use this code to create a grocery list type web app.
// This code sets local storage items, turn the array into a string, and then 
//parses the code to turn it back into an array. This will show whatever list the person
//has created. 
//Let the user change name whenever they want and change list name when they want.




clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearAll, false);
function clearAll() {
    if(onOffClear == 0) {
        if(arrayLength == 0) {
            listWarning.innerHTML = "No items to clear";
        } else {
        onOffClear++;
        console.log(onOffClear);
        clearBtn.innerHTML = "Confirm?";
         }
    } else {
        onOffClear = 0;
        clearBtn.innerHTML = "Clear List";
    let tricks = [];
    localStorage.setItem("tricks", JSON.stringify(tricks));
    let markedOff = [];
    localStorage.setItem("markedOff", JSON.stringify(markedOff));
    location.reload(true);
    }
}

clearBtn.addEventListener("focusout", changeConfirm, false);
function changeConfirm() {
    onOffClear = 0;
    clearBtn.innerHTML = "Clear List";
}




//if enter is clicked while focused on name input - click the button
$("#addItem").keydown(function (event) { 
    if (event.which == 13) { 
        event.preventDefault();
        $('#itemBtn').click(); 
    } 
   });


});