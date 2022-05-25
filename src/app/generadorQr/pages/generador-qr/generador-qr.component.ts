import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { GeneradorQrService } from '../../services/generador-qr.service';
@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.component.html',
  styleUrls: ['./generador-qr.component.css'],
})
export class GeneradorQrComponent implements OnInit {
  url!: string;
  img2!: any;
  ngOnInit(): void {}

  @ViewChild('asImg') image!: ElementRef;

  constructor(
    private qrService: GeneradorQrService,
    private render: Renderer2
  ) {}

  qrGenerador2() {
    this.qrService.qrGenerate2(this.url).subscribe((resp) => {
      console.log(resp);
      this.img2 = resp.result.slice(10, -4);
      console.log(this.img2);

      const asTitle = this.image.nativeElement;
      console.log(asTitle);
      this.render.setAttribute(asTitle, 'src', this.img2);
      console.log(asTitle);
    });
  }
}
