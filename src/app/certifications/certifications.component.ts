import { Component, effect, ChangeDetectionStrategy } from '@angular/core';
import { CertificateItem } from '../dto/CertificateItem';
import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';

@Component({
    selector: 'app-certifications',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './certifications.component.html',
})
export class CertificationsComponent {
    certificates: CertificateItem[] = [];

    constructor(
        private dataService: DataService,
        public languageService: LanguageService
    ) {
        effect(() => {
            const lang = this.languageService.lang();
            this.dataService
                .loadData<CertificateItem[]>(`${lang}/certifications`)
                .subscribe((data) => {
                    this.certificates = data;
                });
        });
    }
}
