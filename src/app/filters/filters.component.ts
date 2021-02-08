import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.css"]
})
export class FiltersComponent implements OnInit {
  list = [];
  @Input() set filters(val: any) {
    console.log(val);
    if (val.type === "category" || val.type === "search") {
      this.list = [];
    }
    if (val.type !== "search") {
      this.list.push(val);
    }
  }
  constructor() {}

  ngOnInit() {}
}
