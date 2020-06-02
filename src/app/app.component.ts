import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  fontSize = 15;
  color: any;
  text = "random text";
  name = "Angular " + VERSION.major;

  
  changeStyle(s){
    let sel = window.getSelection();
        if (sel.rangeCount) {
            const text= `<${s} style="font-size: ${this.fontSize}px; color: ${this.color}">${sel}</${s}>`;
            let range = sel.getRangeAt(0);
            const frag = range.createContextualFragment(text);
            range.deleteContents();
            range.insertNode(frag);
        }
  }
 
}
