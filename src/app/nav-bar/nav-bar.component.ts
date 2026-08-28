import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { NavBarItem } from '../dto/NavBarItem';
import { ThemeService } from '../services/theme.service';
import { LanguageService, Lang } from '../services/language.service';

interface LangOption {
    code: Lang;
    label: string;
}

@Component({
    selector: 'app-nav-bar',
    imports: [RouterLink, RouterLinkActive, SocialMediaComponent],
    templateUrl: './nav-bar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
    themeService = inject(ThemeService);
    languageService = inject(LanguageService);
    isMobileMenuOpen = false;
    isLangMenuOpen = false;

    menuItems: NavBarItem[] = [
        { labelKey: 'nav.home', link: '/', exact: true },
        { labelKey: 'nav.projects', link: '/projects', exact: false },
        { labelKey: 'nav.blogs', link: '/blogs', exact: false },
    ];

    // Tamazight listed last, as requested.
    languages: LangOption[] = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
        { code: 'zgh', label: 'ⵜⴰⵎⴰⵣⵉⵖⵜ' },
    ];

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
    }

    toggleDarkMode() {
        this.themeService.toggleTheme();
    }

    toggleLangMenu() {
        this.isLangMenuOpen = !this.isLangMenuOpen;
    }

    selectLanguage(lang: Lang) {
        this.languageService.setLanguage(lang);
        this.isLangMenuOpen = false;
    }
}
