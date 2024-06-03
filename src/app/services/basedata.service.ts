import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BasedataService {

  constructor(private firestore: AngularFirestore) { } 

  agregarDoc(){
    this.firestore.collection('Coordenadas')
  }
  
}
