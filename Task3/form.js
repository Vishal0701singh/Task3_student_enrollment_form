
let btn = document.getElementById('btn');
let opbox = document.getElementById('opbox');
let sname = document.getElementById('sname');
let semail = document.getElementById('semail');
let cnumber = document.getElementById('cnumber');
let website = document.getElementById('website');
let male = document.getElementById('male');
let female = document.getElementById('female');
let java = document.getElementById('java');
let css = document.getElementById('css');
let html = document.getElementById('html');
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const output = document.createElement("div");
    output.classList.add("Main");
    opbox.appendChild(output);

    const soutput = document.createElement("div");
    soutput.classList.add("childMain");
    output.appendChild(soutput);


    soutput.innerHTML = `<p> <h4>Description</h4></p><p> Name: ${sname.value}</p>
    <p> Email: ${semail.value}<p/>
    <p> Contact no.: ${cnumber.value}</p>
    <p> Website: <a href="${website.value}">${website.value}</a></p>`
    soutput.innerHTML.style="margin: 0px;"

    const gender = document.createElement("p");
    soutput.appendChild(gender);
    if (male.checked) {
        gender.innerHTML = " Gender: Male";

    }
    else if (female.checked) {
        gender.innerHTML = " Gender: Female";
    }
    else {
        gender.innerHTML = "Gender: ";
    } 
    
    const skill = document.createElement("p");
    skill.classList.add("skil");
    soutput.appendChild(skill);
    if (java.checked && css.checked && html.checked) {
        skill.innerHTML = "Skills: Java,CSS and HTML";
    } else if (java.checked && css.checked == false && html.checked == false) {
        skill.innerHTML = "Skills: Java";
    } else if (java.checked == false && css.checked && html.checked == false) {
        skill.innerHTML = "Skills: CSS";
    } else if (java.checked == false && css.checked == false && html.checked) {
        skill.innerHTML = "Skills: HTML";
    } else if (java.checked && css.checked == false && html.checked) {
        skill.innerHTML = "Skills: Java and HTML";
    } else if (java.checked && css.checked && html.checked == false) {
        skill.innerHTML = "Skills:Java and CSS";
    }
    else if (java.checked == false && css.checked && html.checked) {
        skill.innerHTML = "Skills: CSS and HTML";
    }
    else {
        skill.innerHTML = "Skills: ";
    }

    const simg = document.createElement("div");
    simg.classList.add("imge");
    output.appendChild(simg);
    simg.innerHTML = `<h4>image</h4><img src="${image.value}" alt="not found">`

    sname.value = " ";
    cnumber.value = " ";
    semail.value = " ";
    website.value = " ";
    image.value = " ";
    java.checked = false;
    css.checked = false;
    html.checked = false;
    male.checked = false;
    female.checked = false;

    clear.addEventListener("click", (e) => {
      
        opbox.removeChild( output);
    })
});

