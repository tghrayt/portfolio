import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

import { DataService } from '../services/data.service';
import { EducationItem } from '../dto/EducationItem';

@Component({
    selector: 'app-education',
    imports: [CardModule],
    templateUrl: './education.component.html',
})
export class EducationComponent implements OnInit {
    educationItems: EducationItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService
            .loadData<EducationItem[]>('education')
            .subscribe((data) => {
                this.educationItems = data;
            });
    }
}
