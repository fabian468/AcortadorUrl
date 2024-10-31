import { useRef } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'react-qr-code';

function QRCodeComponent({ URI, datosUrlUnitarios }) {
    const qrRef = useRef();

    const handleDownload = () => {
        const svg = qrRef.current.querySelector('svg');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const xml = new XMLSerializer().serializeToString(svg);
        const svg64 = btoa(xml);
        const image64 = 'data:image/svg+xml;base64,' + svg64;
        const img = new Image();

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
            const pngUrl = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = pngUrl;
            downloadLink.download = 'QR_Code.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        };

        img.src = image64;
    };

    return (
        <div onClick={handleDownload} className='w-1' ref={qrRef} style={{ cursor: 'pointer' }}>
            {datosUrlUnitarios && (
                <QRCode
                    value={URI + datosUrlUnitarios}
                    size={256}
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                />
            )}
        </div>
    );
}

QRCodeComponent.propTypes = {
    URI: PropTypes.string.isRequired,
    datosUrlUnitarios: PropTypes.string,
};

export default QRCodeComponent;
