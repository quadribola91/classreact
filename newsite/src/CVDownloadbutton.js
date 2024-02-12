import React from "react";

const CVDownloadButton = () => {
  const downloadCV = async () => {
    try {
      // Update the fetch path using PUBLIC_URL
      const response = await fetch(`${process.env.PUBLIC_URL}/newcv.pdf`);

      if (!response.ok) {
        console.error(
          "Failed to download CV. Server returned:",
          response.status
        );
        return;
      }

      // Create a blob from the response
      const blob = await response.blob();

      // Create a blob URL for the file
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = url;

      // Update with the desired filename without the path
      link.download = "newcv.pdf";

      // Append the link to the document and trigger a click event
      document.body.appendChild(link);
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  return (
    <button
      className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      onClick={downloadCV}
    >
      Download CV
    </button>
  );
};

export default CVDownloadButton;
