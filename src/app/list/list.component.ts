import { Component, OnInit } from '@angular/core';
import { faStop, faSlidersH } from '@fortawesome/free-solid-svg-icons';


stop
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cuadroIcon = faStop;
  optionsIcon = faSlidersH;
  settings = {
    columns: {
      num:{
        title: '#',
        filter: false
      },
      proy: {
        title: 'Proyecto',
        filter: false
      },
      team: {
        title: 'Equipo',
        filter: false
      },
      cost: {
        title: 'Costo de proyecto',
        filter: false
      },
      status: {
        title: 'Estado',
        filter: false,
        class:"stats",
        id:"eeee"
      },
      buy: {
        title: 'Pago',
        filter: false
      }
    }
  };

  data = [
    {
      num: "1",
      proy: "Cracks",
      team: "233",
      cost:"$34.220 USD",
      status: "Completado",
      buy:"Pagado"

    },
    // ... other rows here
    {
      num: "2",
      proy: "FHV",
      team: "24",
      cost:"$54.220 USD",
      status: "Completado",
      buy:"Pagado"
    },
  ];

}
