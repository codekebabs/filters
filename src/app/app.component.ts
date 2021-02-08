import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  filters: any;
  name = "Angular " + VERSION.major;

  ngOnInit() {}
  category() {
    this.filters = { type: "category", name: "oem" };
  }
  refiner() {
    this.filters = { type: "category_refiners", name: "vgm" };
  }
}
