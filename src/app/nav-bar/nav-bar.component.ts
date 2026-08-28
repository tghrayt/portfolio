import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { NavBarItem } from '../dto/NavBarItem';
import { ThemeService } from '../services/theme.service';
import { LanguageService } from '../services/language.service';

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

    menuItems: NavBarItem[] = [
        { labelKey: 'nav.home', link: '/', exact: true },
        { labelKey: 'nav.projects', link: '/projects', exact: false },
        { labelKey: 'nav.blogs', link: '/blogs', exact: false },
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

    toggleLanguage() {
        this.languageService.toggleLanguage();
    }
}
