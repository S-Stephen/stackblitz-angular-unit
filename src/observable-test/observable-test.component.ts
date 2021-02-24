import { Component, OnInit } from "@angular/core";
import { ObserverService } from "../observer.service";

@Component({
  selector: "app-observable-test",
  templateUrl: "./observable-test.component.html",
  styleUrls: ["./observable-test.component.css"]
})
export class ObservableTestComponent implements OnInit {
  variable = "test";

  componentObs$ = this.myObserverService.myObs$;

  constructor(private myObserverService: ObserverService) {}

  ngOnInit() {}
}
