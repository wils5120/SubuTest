import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  arrowIcon = faSortDown;

  constructor() {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }


  createFormGroup() {
    return new FormGroup({
      temp: new FormControl(''),
      tempT: new FormControl(''),
      btd: new FormControl(''),
      btdT: new FormControl(''),
      placa: new FormControl('', Validators.required),
      buy: new FormControl(''),
      work: new FormControl(''),
      siniestro: new FormControl('', [Validators.required]),
    })
  }

  contactForm: FormGroup;

  get temp() { return this.contactForm.get('temp'); }
  get tempT() { return this.contactForm.get('tempT'); }
  get placa() { return this.contactForm.get('placa'); }
  get btd() { return this.contactForm.get('btd'); }
  get btdT() { return this.contactForm.get('btdT'); }
  get siniestro() { return this.contactForm.get('siniestro'); }
  get buy() { return this.contactForm.get('buy'); }
  get work() { return this.contactForm.get('work'); }



  create() {
    if (this.contactForm.valid) {
      alert("se a creado correctamente")
      console.log(this.contactForm.value)
    } else {
      alert('por favor dijigenciar el formulario correctamente')
    }
  }

  onRestForm() {
    this.contactForm.reset();
  }

}
