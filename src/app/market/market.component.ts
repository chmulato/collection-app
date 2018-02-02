import { Component, OnInit } from '@angular/core';

import { CollectableService } from '../shared/collectable.service';
import { Collectable } from '../shared/collectable.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styles: []
})
export class MarketComponent implements OnInit {

  collectables: Collectable[] = [];

  constructor(private collectableService : CollectableService) { }

  onAddToCollection(item: Collectable) {
    this.collectableService.addToCollection(item);
  }
  
  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

}
