

var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 500,
	height : 500,
    colorDark : "#5090EA",
	colorLight : "#ffffff",
});

function makeCode () {		
	var elText = document.getElementById("url");

    console.log(elText.value);
	
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}
	qrcode.makeCode(elText.value);
    $("#urlGen").text(elText.value);
}

function saveImage()
{
    const randNum = Math.floor(Math.random() * 100);
    html2canvas(document.querySelector("#capture")).then(canvas => {
        saveAs(canvas.toDataURL(), 'kiuar-'+randNum+'.png');
        // document.body.appendChild(canvas)
    });
}
function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}