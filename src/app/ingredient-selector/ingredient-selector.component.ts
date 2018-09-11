import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UnitsService } from "../services/units.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-ingredient-selector",
  templateUrl: "./ingredient-selector.component.html",
  styleUrls: ["./ingredient-selector.component.scss"]
})
export class IngredientSelectorComponent implements OnInit {
  @Output("canceled")
  ingredientCanceld: EventEmitter<boolean>;
  @Output("saved")
  ingredientSaved: EventEmitter<any>;

  ingredientSelected: boolean = false;
  units: string[];

  hasBeenSaved: boolean = false;

  form = new FormGroup({
    quantity: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[1-9]{1}[0-9]{0,3}$/)
    ]),
    unit: new FormControl("units", Validators.pattern(/^(?!.*units).*$/))
  });

  get quantity() {
    return this.form.get("quantity");
  }

  get unit() {
    return this.form.get("unit");
  }

  constructor(private unitsService: UnitsService) {
    this.ingredientCanceld = new EventEmitter();
    this.ingredientSaved = new EventEmitter();
  }

  ngOnInit() {
    this.unitsService.getUnits().subscribe(units => (this.units = units));
  }

  selectIngredient() {
    this.ingredientSelected = true;
  }

  cancelIngredient() {
    this.ingredientSelected = false;
    this.quantity.setValue("");
    this.unit.reset("units");
    this.hasBeenSaved = false;

    this.ingredientCanceld.emit();
  }

  saveQuantity(param) {
    this.ingredientSaved.emit(param);
    this.hasBeenSaved = true;
  }
}
