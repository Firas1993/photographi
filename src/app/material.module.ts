import { NgModule } from '@angular/core';
import { MatTabsModule, MatListModule, MatSidenavModule, MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';



@NgModule({
  imports: [MatTabsModule, MatListModule, MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule],
  exports: [MatTabsModule, MatListModule, MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule]
})
export class MaterialModule {}
