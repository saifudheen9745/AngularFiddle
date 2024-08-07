interface Window {
  electron: {
    printPdf: (pdfUrl: string) => Promise<void>;
  };
}

