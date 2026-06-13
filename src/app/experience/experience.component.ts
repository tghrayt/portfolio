import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { DataService } from '../services/data.service';
import { ExperienceItem } from '../dto/ExperienceItem';

@Component({
    selector: 'app-experience',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './experience.component.html',
})
export class ExperienceComponent implements OnInit {
    experienceItems: ExperienceItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService
            .loadData<ExperienceItem[]>('experience')
            .subscribe((data) => {
                this.experienceItems = data;
            });
    }
}
