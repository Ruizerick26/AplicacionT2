import { Injectable } from '@angular/core';
import * as L from 'leaflet'

@Injectable({
  providedIn: 'root'
})
export class MapsControllerService {

  constructor() { }

  map: L.Map

  mostrarMapa(la: number, lo: number){
    this.map = L.map('mapid').setView([la,lo],6)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
    ).addTo(this.map)
    const mark = L.marker([la,lo]);
    this.map.addLayer(mark)
  }
}
