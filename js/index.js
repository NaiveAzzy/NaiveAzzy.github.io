

function changeWeb(){
    document.getElementById("mainInformation").style.display="none";
    document.getElementById("serverInformation").style.display="none";
    document.getElementById("videoInformation").style.display="none";
    document.getElementById("aboutInformation").style.display="none";
    document.getElementById("topMain").className="";
    document.getElementById("topServer").className="";
    document.getElementById("topVideo").className="";
    document.getElementById("topAbout").className="";

    switch (location.hash){
        case '#main': 
            document.getElementById("mainInformation").style.display="block";
            document.getElementById("topMain").className="active";
            break;
        case '#server': 
            document.getElementById("serverInformation").style.display="block";
            document.getElementById("topServer").className="active";
            break;
        case '#video': 
            document.getElementById("videoInformation").style.display="block";
            document.getElementById("topVideo").className="active";
            break;
        case '#about': 
            document.getElementById("aboutInformation").style.display="block";
            document.getElementById("topAbout").className="active";
            break;
    }
}