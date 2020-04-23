import React from 'react';
import DownloadImg from '../../../images/dl_pdf.png';
import pdf from '../../../files/sgp-life-membership-pack.pdf'

const Download = {
    
}
const imageLogo = {
    display: 'flex',
    position: 'fixed',
    right: '0',
    bottom: '30%',
    zIndex: '1'
}

function FileDownload() {
  return (
    <div style={Download}>
        <li style={{listStyleType:'none'}}><a href={pdf}><img src={DownloadImg} style={imageLogo} alt="Download PDF"/></a></li>
    </div>
  );
}

export default FileDownload;