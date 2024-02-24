import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimplicityBuilder } from '@simplicitywebtools/simplicity-builder-angular';
// @ts-expect-error shared vanilla js files for examples
import helloWorldConfig from "../assets/config/config_helloworld.js";
// @ts-expect-error shared vanilla js files for examples
import basicConfig from "../assets/config/config_basic.js";
// @ts-expect-error shared vanilla js files for examples
import template_helloworld from "../assets/templates/template_helloworld/template_helloworld.js";
// @ts-expect-error shared vanilla js files for examples
import template_basic from "../assets/templates/template_basic/template_basic.js";
const currentHost = window.location.protocol + "//" + window.location.host;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimplicityBuilder],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simplicity-builder-angular-standalone-example';
  outputText = "";
  private sbuilder: SimplicityBuilder | null = null;

  setHelloWorld = (event: Event) => {
    event.preventDefault();
    const config = JSON.stringify(helloWorldConfig);
    const re = /##BASEADDRESS##/g;
    this.sbuilder?.setConfig(JSON.parse(config.replace(re, currentHost + "/assets")));
    this.sbuilder?.setContent(template_helloworld.replace(re, currentHost + "/assets"));
  }
  setBasic = (event: Event) => {
    event.preventDefault();
    const config = JSON.stringify(basicConfig);
    const re = /##BASEADDRESS##/g;
    this.sbuilder?.setConfig(JSON.parse(config.replace(re, currentHost + "/assets")));
    this.sbuilder?.setContent(template_basic.replace(re, currentHost + "/assets"));
  }
  initBuilder = () => {
    const config = JSON.stringify(helloWorldConfig);
    const re = /##BASEADDRESS##/g;
    this.sbuilder?.setConfig(JSON.parse(config.replace(re, currentHost + "/assets")));
    this.sbuilder?.setContent(template_helloworld.replace(re, currentHost + "/assets"));
  }
  saveContent = (event: Event) => {
    const customEvent = event as CustomEvent<any>;
    this.outputText = customEvent.detail;
  }
  publishContent = (event: Event) => {
    const customEvent = event as CustomEvent<any>;
    this.outputText = customEvent.detail;
  }

  ngOnInit() {
    this.sbuilder = document.getElementById("sbuilderid") as any;
  }

}
