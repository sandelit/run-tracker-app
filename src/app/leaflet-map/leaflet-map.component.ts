import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";
import { Geolocation } from "@capacitor/geolocation";

@Component({
  selector: "app-leaflet-map",
  templateUrl: "./leaflet-map.component.html",
  styleUrls: ["./leaflet-map.component.scss"],
  standalone: true,
})
export class LeafletMapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initMap();
  }

  private async initMap(): Promise<void> {
    const position = await this.getCurrentPosition();
    const { latitude, longitude } = position.coords;
    const map = L.map("map").setView([latitude, longitude], 13);
    const marker = L.marker([latitude, longitude]).addTo(map);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }

  private getCurrentPosition = async () => {
    return await Geolocation.getCurrentPosition();
  };
}
