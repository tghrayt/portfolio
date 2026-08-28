import { Component, effect, ChangeDetectionStrategy } from '@angular/core';

import { SkillCategory } from '../dto/SkillItem';
import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';

@Component({
    selector: 'app-skills',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './skills.component.html',
})
export class SkillsComponent {
    skillCategories: SkillCategory[] = [];

    constructor(
        private dataService: DataService,
        public languageService: LanguageService
    ) {
        effect(() => {
            const lang = this.languageService.lang();
            this.dataService
                .loadData<SkillCategory[]>(`${lang}/skills`)
                .subscribe((data) => {
                    this.skillCategories = data;
                });
        });
    }
}
