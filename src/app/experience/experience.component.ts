import { Component, effect, ChangeDetectionStrategy } from '@angular/core';

import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';
import { ExperienceItem } from '../dto/ExperienceItem';

@Component({
    selector: 'app-experience',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './experience.component.html',
})
export class ExperienceComponent {
    experienceItems: ExperienceItem[] = [];

    constructor(
        private dataService: DataService,
        public languageService: LanguageService
    ) {
        effect(() => {
            const lang = this.languageService.lang();
            this.dataService
                .loadData<ExperienceItem[]>(`${lang}/experience`)
                .subscribe((data) => {
                    this.experienceItems = data;
                });
        });
    }
}
