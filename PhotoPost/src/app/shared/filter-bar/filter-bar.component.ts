import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
    filterValue: string = ''
    
    @Input() placeholder: string = 'Filter';
    @Output() filter: EventEmitter<string> = new EventEmitter<string>();

    constructor(){}

    ngOnInit() {
    }

    search() {
        this.filter.emit(this.filterValue);
        this.filterValue = '';
    }
}