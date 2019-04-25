import React, { Component } from "react";
import "./Pdf.css";
import PDFViewer from "./components/PDFViewer/PDFViewer";
import PDFJSBackend from "./backends/pdfjs";
import WebviewerBackend from "./backends/webviewer";

class Pdf extends Component {
  render() {
    return (
      <div className="Pdf">
        <PDFViewer backend={PDFJSBackend} src="/abc.pdf" />
        {/* <PDFViewer backend={WebviewerBackend} src="/abc.pdf" /> */}
      </div>
    );
  }
}

export default Pdf;
