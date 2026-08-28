import { Component, effect, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';

import { ProjectItem } from '../dto/ProjectItem';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [],
})
export class ProjectComponent {
    projects: ProjectItem[] = [];

    constructor(
        private dataService: DataService,
        public languageService: LanguageService
    ) {
        effect(() => {
            const lang = this.languageService.lang();
            this.dataService
                .loadData<ProjectItem[]>(`${lang}/projects`)
                .subscribe((data) => {
                    this.projects = data;
                });
        });
    }
}
