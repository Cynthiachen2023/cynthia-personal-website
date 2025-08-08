import { Component, OnInit } from "@angular/core";
import { faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css", "./footer.component.responsivity.css"]
})
export class FooterComponent implements OnInit {

  faLinkedin: IconDefinition;

  year: Date;

  constructor() { }

  ngOnInit(): void {
    this.faLinkedin = faLinkedin;
    this.year = new Date();
  }

}
