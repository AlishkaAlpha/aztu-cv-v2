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
    // var text = document.createElement('')
    var rank = document.getElementById("lun_input");
    var lun_area = document.querySelector(".lun_area");
    // lun_area.appendChild(document.createTextNode(rank.value+''))
    lun_area.innerHTML += rank.value+","
}
function lun_rem(){
    var hold = document.querySelector(".lun_area");
    hold.lastChild.remove()
}
function spe(){
    var spec = document.getElementById("spec_input");
    var spec_area = document.querySelector(".spec_area");
    spec_area.innerHTML += spec.value+","
    
}

function spe_rem(){
    var hold = document.querySelector(".spe_mine");
    hold.lastChild.remove()
}