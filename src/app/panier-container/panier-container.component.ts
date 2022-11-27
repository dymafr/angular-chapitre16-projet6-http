import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/interfaces/ingredient.interface';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss'],
})
export class PanierContainerComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] | null = null;
  public subscription: Subscription = new Subscription();

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    this.subscription.add(
      this.panierService.ingredients$.subscribe(
        (ingredients) => (this.ingredients = ingredients)
      )
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
