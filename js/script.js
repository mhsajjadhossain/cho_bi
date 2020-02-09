
 let sshot = document.querySelector('.screenshot-button');
 let img = document.querySelector('img');
 let vid = document.querySelector('#vid');
 let canva = document.querySelector('canvas');
 let gray = document.querySelector('#gray');
 let noSt = document.querySelector('#noSt');
 let cntex = document.querySelector('#cntrst');
 let bright = document.querySelector('#bright');

// if the user click the capture btn
window.onload = function(){
    navigator.mediaDevices.getUserMedia({video: true}).then(stream =>{
        vid.srcObject = stream;
    }).catch (err => {console.log(err)})
};

noSt.onclick = function(){
    vid.style.cssText = "filter: ;";
};
gray.onclick = function(){
    vid.style.cssText = "filter: grayscale(1) contrast(1.5);";
};
cntex.onclick = function(){
    vid.style.cssText = "filter: contrast(2.5);";
};
bright.onclick = function(){
    vid.style.cssText = "filter: brightness(1.5);";
};



// if i click the screenshot button
sshot.onclick = function(){
    canva.width = vid.videoWidth;
    canva.height = vid.videoHeight;
    console.log(canva);

    //chobi aka
    canva.getContext('2d').drawImage(vid, 0, 0);

    let dataUrl = canva.toDataURL('images/png');
    img.src = dataUrl;

    //for downloading the image
    let hrefelem = document.createElement('a');
    hrefelem.href = dataUrl;
    document.body.append(hrefelem);
    hrefelem.download = `screenshotelement$.png`;
    hrefelem.click();
    hrefelem.remove();
    img.remove();
};
