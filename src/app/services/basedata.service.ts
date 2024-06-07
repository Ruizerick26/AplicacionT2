import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BasedataService {

  constructor(private firestore: AngularFirestore) { } 

  agregarDoc(data: any, path: string, id: string){
    const collection = this.firestore.collection(path)
    return collection.doc(id).set(data)
  }
  
}
