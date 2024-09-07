import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-leaflet-map",
  templateUrl: "./leaflet-map.component.html",
  styleUrls: ["./leaflet-map.component.scss"],
  standalone: true
})
export class LeafletMapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }
}
