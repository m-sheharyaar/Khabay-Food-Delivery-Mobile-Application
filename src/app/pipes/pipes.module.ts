import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchfilterPipe} from '../pipes/search/searchfilter.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SearchfilterPipe],
  exports: [SearchfilterPipe]
})
export class AppPipesModule { }
