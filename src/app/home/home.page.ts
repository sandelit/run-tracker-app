import { Component } from "@angular/core";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";
import { LeafletMapComponent } from "../leaflet-map/leaflet-map.component";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, LeafletMapComponent],
})
export class HomePage {
  constructor() {}
}
