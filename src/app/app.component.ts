import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import jsPDF from 'jspdf';


interface Window {
  electron: {
    printPdf: (pdfUrl: string) => Promise<void>;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angfiddle';

  onClick(){
    var pdf = new jsPDF()
    var blobPDF = new Blob([ pdf.output('blob')], {type: 'application/pdf'})
    const pdfURL = URL.createObjectURL(blobPDF as Blob)
    window.electron.printPdf(pdfURL);
  } 
}
