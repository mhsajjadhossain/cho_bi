 let capvidbtn = document.querySelector('.capture-button');
 let sshot = document.querySelector('.screenshot-button');
 let img = document.querySelector('img');
 let vid = document.querySelector('#vid');
 let canva = document.querySelector('canvas');


// if the user click the capture btn
capvidbtn.onclick = function(){
    navigator.mediaDevices.getUserMedia({video: true}).then(stream =>{
        vid.srcObject = stream;
    }).catch (err => {console.log(err)})
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
};
