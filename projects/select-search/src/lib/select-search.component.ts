import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-select-search',
  template: `
    <form>
    <div class="multiselect">
      <div class="selectBox" (click)="showCheckboxes()">
        <select>
          <option>Select an option</option>
        </select>
        <div class="overSelect"></div>
      </div>
      <div id="checkboxes">
        <label for="one">
          <input type="checkbox" id="one" />First checkbox</label>
        <label for="two">
          <input type="checkbox" id="two" />Second checkbox</label>
        <label for="three">
          <input type="checkbox" id="three" />Third checkbox</label>
      </div>
    </div>
  </form>
  `,
  styles: [`
  .multiselect {
    width: 200px;
  }
  
  .selectBox {
    position: relative;
  }
  
  .selectBox select {
    width: 100%;
    font-weight: bold;
  }
  
  .overSelect {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  
  #checkboxes {
    display: none;
    border: 1px #dadada solid;
  }
  
  #checkboxes label {
    display: block;
  }
  
  #checkboxes label:hover {
    background-color: #1e90ff;
  }
  `]
})
export class SelectSearchComponent implements OnInit {

  expanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  showCheckboxes() {

    let checkboxes = document.getElementById("checkboxes");
  
    if (!this.expanded) {
        checkboxes!.style.display = "block";
        this.expanded = true;
    } else {
       checkboxes!.style.display = "none";
       this.expanded = false;
    }
  }

}
