export default class PDFTron {
  init = (source, element) => {
    new window.PDFTron.WebViewer(
      {
        path: "/WebViewer/lib",
        l:
          "demo:preethi.du1995@gmail.com:747495bd01522dbb02db06f7be22a56d85ed8cdd5a083a0c21",
        initialDoc: source
      },
      element
    );
  };
}
