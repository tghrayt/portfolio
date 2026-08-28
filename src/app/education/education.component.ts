import { Component, effect, ChangeDetectionStrategy } from '@angular/core';

import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';
import { EducationItem } from '../dto/EducationItem';

@Component({
    selector: 'app-education',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './education.component.html',
})
export class EducationComponent {
    educationItems: EducationItem[] = [];

    constructor(
        private dataService: DataService,
        public languageService: LanguageService
    ) {
        effect(() => {
            const lang = this.languageService.lang();
            this.dataService
                .loadData<EducationItem[]>(`${lang}/education`)
                .subscribe((data) => {
                    this.educationItems = data;
                });
        });
    }
}
