import { Component, OnInit } from '@angular/core';

import { SkillCategory } from '../dto/SkillItem';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
    skillCategories: SkillCategory[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService.loadData<SkillCategory[]>('skills').subscribe((data) => {
            this.skillCategories = data;
        });
    }
}
