function getSuggest() {
    suggestContent = "Khóa học bạn cần: ";
    // get radio value
    let radiosVDK = document.getElementsByName('VDK');
    for (let index = 0; index < radiosVDK.length; index++) {
        if (radiosVDK[index].checked) {
            suggestContent += "VDK: " + radiosVDK[index].value + " ";
            break;
        }
    }
    let radiosINP = document.getElementsByName('in_sensor');
    for (let index = 0; index < radiosVDK.length; index++) {
        if (radiosINP[index].checked) {
            suggestContent += "input: " + radiosINP[index].value + " ";
            break;
        }
    }
    let radiosOUT = document.getElementsByName('out_module');
    for (let index = 0; index < radiosVDK.length; index++) {
        if (radiosOUT[index].checked) {
            suggestContent += "output: " + radiosOUT[index].value + " ";
            break;
        }
    }
    // set content and display div suggest
    document.getElementById('suggest').innerHTML = suggestContent;
    document.getElementById('suggest').style.display = "block";

}