import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

import { DataService } from '../services/data.service';
import { ExperienceItem } from '../dto/ExperienceItem';

@Component({
    selector: 'app-experience',
    imports: [CardModule, TimelineModule],
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
