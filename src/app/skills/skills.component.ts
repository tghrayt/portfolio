import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { SkillCategory } from '../dto/SkillItem';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-skills',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
    skillCategories: SkillCategory[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService
            .loadData<SkillCategory[]>('skills')
            .subscribe((data) => {
                this.skillCategories = data;
            });
    }
}
