import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { LanguageService } from '../services/language.service';

@Component({
    selector: 'app-footer',
    imports: [SocialMediaComponent],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    languageService = inject(LanguageService);
    currentYear: number = new Date().getFullYear();
}
