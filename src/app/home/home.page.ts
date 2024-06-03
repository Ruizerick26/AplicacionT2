import { Component, NgZone } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import {BasedataService} from '../services/basedata.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude: any = 0
  longitude: any = 0

  constructor(
    private geolocation: Geolocation,
    private firestore : BasedataService
  ) {}

  options={
    timeout: 10000,
    enableHighAccuracy: true,
    maximunAge:3600
  }

  getCurrentCoordinates(){
    this.geolocation.getCurrentPosition().then((resp) =>{
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
    }).catch((error )=>{
      console.log("error gettinf location", error)
    })
  }

  crear(){
    this.firestore.agregarDoc()
  }

}
