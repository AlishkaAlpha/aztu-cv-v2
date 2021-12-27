var text_area = 10
var area = 1
function text(){
    var text = document.createElement("div");
    var hold = document.getElementById("text-area");
    if (area<text_area){
    text.innerHTML = '<textarea class="form-control" placeholder="Your Experiences" id="floatingTextarea2" style="height: 100px"></textarea>';
    text.style.marginTop = '20px'
    hold.appendChild(text)
    area+=1
    }else{

    }
}
function text_rem(){
    var hold = document.getElementById("text-area");
    if (area>0){
        hold.lastChild.remove(1)
        area -=1
    }
}
function lun(){
    var rank = document.getElementById("lun_input").value.trim();
    var text = document.createElement('p')
    text.innerText = rank+',';
    var lun_area = document.querySelector(".lun_area");
    // lun_area.appendChild(document.createTextNode(rank.value+''))
    if (rank) {
        lun_area.append(text)
    }
}
function lun_rem(){
    var hold = document.querySelector(".lun_area");
    hold.lastChild.remove()
}
function spe(){
    var text = document.createElement('p')
    var spec = document.getElementById("spec_input").value.trim();
    text.innerText = spec+',';
    // console.log("TEXT", spec)
    var spec_area = document.querySelector(".spec_area");
    if (spec) {
        spec_area.append(text)   
    }
    
}
function spe_rem(){
    var hold = document.querySelector(".spec_area");
    hold.lastChild.remove()
}
function cer(){
    var cerf = document.getElementById("spe_input").value.trim();
    var text = document.createElement('p');
    text.innerHTML = cerf+",";
    var cerf_area = document.querySelector('.cer_area');
    if (cerf) {
        cerf_area.append(text)
    }
}

var end_date = document.getElementById("end_date").disabled = true;
function Dates(){
    var start_date = document.getElementById("start_date").value;
    console.log(start_date)
    if (start_date !== "") {
        document.getElementById("end_date").disabled = false;
    }else{
        document.getElementById("end_date").disabled = true;
    }

}
function cer_rem(){
    var hold = document.querySelector(".cer_area")
    hold.lastChild.remove()
}
$("#edu_block").hide();
function option(){
    var select = document.getElementById("edu_opt");
    document.getElementById("edu_block").style.display = "none";
    var edu = select.options[select.selectedIndex].value;
    console.log(edu)
    if (edu == "magistra") {
        document.getElementById("edu_block").style.display = "block";
        
   
    }else if(edu == "bakalavr"){
        document.getElementById("edu_block").style.display = "block";
    }else{
        

    }
}
function Submit(){
    document.querySelector(".cer").style.display = "none"
    document.querySelector(".special").style.display = "none"
    document.querySelector(".lun").style.display = "none"
    // document.querySelector(".").style.display = "none"
    document.getElementById("Name").style.background = "transparent"
    document.getElementById("Name").style.border = "none"
    document.getElementById("SurName").style.background = "transparent"
    document.getElementById("SurName").style.border = "none"
    document.getElementById("Email").style.background = "transparent"
    document.getElementById("Email").style.border = "none"
    document.getElementById("inputAddress").style.background = "transparent"
    document.getElementById("inputAddress").style.border = "none"
    document.getElementById("inputphone").style.background = "transparent"
    document.getElementById("inputphone").style.border = "none"
    document.getElementById("about me").style.background = "transparent"
    document.getElementById("about me").style.border = "none"
    document.getElementById("Work text").style.background = "transparent"
    document.getElementById("Work text").style.border = "none"
    document.getElementById("Work text").style.marginBottom = "20px"
    document.getElementById("work-icon").style.display = "none"
    document.getElementById("start_date").style.background = "transparent"
    document.getElementById("start_date").style.border = "none"
    document.getElementById("end_date").style.background = "transparent"
    document.getElementById("end_date").style.border = "none"
    document.getElementById("Education_Name").style.background = "transparent"
    document.getElementById("Education_Name").style.border = "none"
    document.getElementById("School_Name").style.background = "transparent"
    document.getElementById("School_Name").style.border = "none"
    document.getElementById("City_Name").style.background = "transparent"
    document.getElementById("City_Name").style.border = "none"
    document.getElementById("Edu_text").style.background = "transparent"
    document.getElementById("Edu_text").style.border = "none"
}
// document.getElementById("Name").required = true;