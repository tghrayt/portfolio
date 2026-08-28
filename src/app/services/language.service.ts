import { Injectable, Inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Lang = 'en' | 'fr';

const translations: Record<Lang, Record<string, string>> = {
    en: {
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.blogs': 'Blogs',
        'about.tagline':
            'Full-stack software engineer passionate about .NET, Angular, and software architecture — turning complex systems into simple, robust, and maintainable solutions',
        'section.whatIDo': 'What I Do',
        'section.skills': 'Skills',
        'section.experience': 'Experience',
        'section.education': 'Education',
        'section.certifications': 'Certifications',
        'section.projects': 'Projects',
        'section.blogArticles': 'Blog Articles',
        'button.viewSource': 'View Source',
        'button.viewCertificate': 'View Certificate',
        'button.readArticle': 'Read Article',
        'footer.rights': 'All rights reserved.',
        'footer.builtWith': 'Built with',
        'aria.toggleDarkMode': 'Toggle Dark Mode',
        'aria.switchToFrench': 'Switch to French',
        'aria.switchToEnglish': 'Switch to English',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.projects': 'Projets',
        'nav.blogs': 'Blog',
        'about.tagline':
            "Ingénieur logiciel full-stack passionné par .NET, Angular et l'architecture logicielle — transformer des systèmes complexes en solutions simples, robustes et maintenables",
        'section.whatIDo': 'Ce que je fais',
        'section.skills': 'Compétences',
        'section.experience': 'Expérience',
        'section.education': 'Formation',
        'section.certifications': 'Certifications',
        'section.projects': 'Projets',
        'section.blogArticles': 'Articles de Blog',
        'button.viewSource': 'Voir le code',
        'button.viewCertificate': 'Voir le certificat',
        'button.readArticle': "Lire l'article",
        'footer.rights': 'Tous droits réservés.',
        'footer.builtWith': 'Créé avec',
        'aria.toggleDarkMode': 'Activer le mode sombre',
        'aria.switchToFrench': 'Passer en français',
        'aria.switchToEnglish': 'Passer en anglais',
    },
};

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    lang = signal<Lang>('en');

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.initializeLanguage();
    }

    private initializeLanguage(): void {
        const saved = localStorage.getItem('lang');
        this.setLang(saved === 'fr' ? 'fr' : 'en');
    }

    toggleLanguage(): void {
        this.setLang(this.lang() === 'en' ? 'fr' : 'en');
    }

    t(key: string): string {
        return translations[this.lang()][key] ?? key;
    }

    private setLang(lang: Lang): void {
        this.lang.set(lang);
        this.document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }
}
