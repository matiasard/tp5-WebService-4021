import { Component, OnInit } from '@angular/core';
import { Languages } from '../../interfaces/Languages.interface';
import { TraductorService } from '../../services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css'],
})
export class TraductorComponent implements OnInit {
  source!: string;
  target!: string;
  text!: string;
  textoTraducido: string = '';

  languages: Languages[] = [
    {
      language: 'es',
      name: 'español',
      img: 'svg-country/es.svg',
    },
    {
      language: 'it',
      name: 'italiano',
      img: 'svg-country/it.svg',
    },
    {
      language: 'fr',
      name: 'francés',
      img: 'svg-country/fr.svg',
    },
    {
      language: 'en',
      name: 'inglés',
      img: 'svg-country/gb.svg',
    },
  ];

  constructor(private traductorService: TraductorService) {}

  ngOnInit(): void {}

  getClassCssSource(item: string) {
    return item == this.source ? 'btn-primary' : '';
  }
  getClassCSSTarget(item: string) {
    return item == this.target ? 'btn-primary' : '';
  }

  activeLanguageSource(selectedSource: string) {
    console.log(selectedSource);
    this.source = selectedSource;
  }

  activeLanguageTarget(selectedTarget: string) {
    console.log(selectedTarget);
    this.target = selectedTarget;
  }

  // traducirText(source: string, target: string, text: string) {
  traducirText() {
    if (this.text.length == 0) {
      return;
    }
    this.traductorService
      .traducirTexto(this.source, this.target, this.text)
      .subscribe(
        (resp) =>
          (this.textoTraducido = resp.data.translations[0].translatedText)
      );
  }
}
