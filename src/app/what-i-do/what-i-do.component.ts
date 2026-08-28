import { Component, effect, ChangeDetectionStrategy } from '@angular/core';

import { WhatIDoItem } from '../dto/WhatIDoItem';
import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';

@Component({
    selector: 'app-what-i-do',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './what-i-do.component.html',
})
export class WhatIDoComponent {
    whatIDoItems: WhatIDoItem[] = [];

    constructor(
        private dataService: DataService,
        public languageService: LanguageService
    ) {
        effect(() => {
            const lang = this.languageService.lang();
            this.dataService
                .loadData<WhatIDoItem[]>(`${lang}/what-i-do`)
                .subscribe((data) => {
                    this.whatIDoItems = data;
                });
        });
    }
}
