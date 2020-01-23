function Liste() {
    let name = window.document.getElementById("name").value;
    let text = window.document.getElementById("text").value;
    let comments = window.document.getElementById("liste").innerHTML;
    let newtext = (comments + "<div class='comment'>" + "<div class='name'><u>" + name + "</u></div>" + "<div class='text'>" + text + "</div>" + "</div>");
    changing(newtext);
    logging(name, text);
}
function changing(newtext) {
    document.getElementById("liste").innerHTML = newtext;
}
function logging(name, text) {
    console.log(name + "\r\n" + text);
}