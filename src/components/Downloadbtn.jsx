import axios from 'axios';
import React, { useState ,useEffect} from 'react'
const Downloadbtn = (  ) => {
    const styledwd={
     
        backgroundColor: "#4caf50",
        border: "none",
        color: "white",
        padding: "15px , 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px ,2px",
        cursor: "pointer",
        borderRadius: "4px",
      
}
const [pdfUrl, setPdfUrl] = useState('');
const [filename, setFilename] = useState('');

useEffect(() => {
  const fetchPdfData = async () => {
    try {
      const response = await axios.get('https://elegant-respect-d8392b3457.strapiapp.com/api/brouchers?populate=*' );
        // Adjust this based on the actual structure of your API response
       // Accessing the attributes of the first item
       
      const pdfData = response.data.data[0].attributes.Broucher.data[0].attributes; // Adjust this based on your API structure
      const baseUrl =  pdfData.url; // Adjust this if your Strapi instance is hosted elsewhere
        setPdfUrl(baseUrl);
        setFilename(pdfData.name || 'downloaded-file.pdf');
      }
 
       catch (error) {
      console.error('Error fetching PDF data:', error);
    }
  };

  fetchPdfData();
}, []);

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.setAttribute('download', filename); // Force download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
    // const handleDownload = () => {
    //     // Create an anchor element
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.download = filename;
    
    //     // Append the anchor to the body
    //     document.body.appendChild(link);
    
    //     // Programmatically click the anchor
    //     link.click();
    
    //     // Remove the anchor from the body
    //     document.body.removeChild(link);
    //   };
  return (
    <>
    
          <button type="button" onClick={handleDownload} disabled={!pdfUrl} download="downloaded-file.pdf"
                            className="btn py-2 position-relative top-0 end-0 mt-2 me-2 " style={{ backgroundColor:'white',color:'#0b6ab2',borderRadius:"5px"}}> DownLoad Broucher</button>
   
    </>
  )
}

export default Downloadbtn
