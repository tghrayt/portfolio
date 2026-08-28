import { Injectable, Inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Lang = 'en' | 'fr' | 'zgh';

const htmlLangByLang: Record<Lang, string> = {
    en: 'en',
    fr: 'fr',
    zgh: 'zgh-Tfng',
};

const translations: Record<Lang, Record<string, string>> = {
    en: {
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.blogs': 'Blogs',
        'about.tagline':
            'Full-stack software engineer passionate about .NET, Angular, and software architecture — turning complex systems into simple, robust, and maintainable solutions',
        'section.whatIDo': 'What I Do',
        'section.skills': 'Skills',
        'section.experience': 'Experiences',
        'section.education': 'Educations',
        'section.certifications': 'Certifications',
        'section.projects': 'Projects',
        'section.blogArticles': 'Blog Articles',
        'button.viewSource': 'View Source',
        'button.viewCertificate': 'View Certificate',
        'button.readArticle': 'Read Article',
        'footer.rights': 'All rights reserved.',
        'footer.builtWith': 'Built with',
        'aria.toggleDarkMode': 'Toggle Dark Mode',
        'aria.languageMenu': 'Change language',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.projects': 'Projets',
        'nav.blogs': 'Blog',
        'about.tagline':
            "Ingénieur logiciel full-stack passionné par .NET, Angular et l'architecture logicielle — transformer des systèmes complexes en solutions simples, robustes et maintenables",
        'section.whatIDo': 'Ce que je fais',
        'section.skills': 'Compétences',
        'section.experience': 'Expériences',
        'section.education': 'Formations',
        'section.certifications': 'Certifications',
        'section.projects': 'Projets',
        'section.blogArticles': 'Articles de Blog',
        'button.viewSource': 'Voir le code',
        'button.viewCertificate': 'Voir le certificat',
        'button.readArticle': "Lire l'article",
        'footer.rights': 'Tous droits réservés.',
        'footer.builtWith': 'Créé avec',
        'aria.toggleDarkMode': 'Activer le mode sombre',
        'aria.languageMenu': 'Changer de langue',
    },
    // Best-effort Standard Moroccan Tamazight (Tifinagh, IRCAM orthography).
    // Short UI labels only — has not been reviewed by a native speaker yet.
    zgh: {
        'nav.home': 'ⴰⵙⵏⵓⴱⴳ',
        'nav.projects': 'ⵉⵙⵏⴼⴰⵔⵏ',
        'nav.blogs': 'ⴱⵍⵓⴳ',
        'about.tagline':
            'ⴰⵎⵙⵙⴽⴰⵔ n ⵓⵙⵏⴼⵍ ⵉⵃⵎⵎⵍⵏ .NET, Angular d ⵜⵖⴰⵔⴰ n ⵓⵙⵏⴼⵍ',
        'section.whatIDo': 'ⵎⴰⵢⴷ ⵙⵙⴽⴰⵔⵖ',
        'section.skills': 'ⵜⵉⵣⵎⴰⵔ',
        'section.experience': 'ⵜⵉⵔⵎⵉⵢⵉⵏ',
        'section.education': 'ⵉⵙⵍⵎⴰⴷⵏ',
        'section.certifications': 'ⵙⵉⵔⵜⵉⴼⵉⴽⴰⵜ',
        'section.projects': 'ⵉⵙⵏⴼⴰⵔⵏ',
        'section.blogArticles': 'ⵉⵎⵇⵇⵉⵢⵏ n ⵓⴱⵍⵓⴳ',
        'button.viewSource': 'ⵥⵕ ⴰⴳⵎⵓⴹ',
        'button.viewCertificate': 'ⵥⵕ ⴰⵙⵉⵔⵜⵉⴼⵉⴽⴰ',
        'button.readArticle': 'ⵖⵔ ⴰⵎⵇⵇⵉ',
        'footer.rights': 'ⴰⵣⵔⴼⴰⵏ ⴰⴽⴽⵯ ⵜⵜⵡⴰⵃⴹⴰⵏ.',
        'footer.builtWith': 'ⵢⵜⵜⵡⴰⴳ ⵙ',
        'aria.toggleDarkMode': 'ⵙⵏⴼⵍ ⴰⵙⴽⴽⵉⵍ ⴰⴱⵔⴽⴰⵏ',
        'aria.languageMenu': 'ⵙⵏⴼⵍ ⵜⵓⵜⵍⴰⵢⵜ',
    },
};

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    readonly availableLangs: readonly Lang[] = ['en', 'fr', 'zgh'];
    lang = signal<Lang>('en');

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.initializeLanguage();
    }

    private initializeLanguage(): void {
        const saved = localStorage.getItem('lang');
        const lang = this.isLang(saved) ? saved : 'en';
        this.setLanguage(lang);
    }

    setLanguage(lang: Lang): void {
        this.lang.set(lang);
        this.document.documentElement.lang = htmlLangByLang[lang];
        localStorage.setItem('lang', lang);
    }

    t(key: string): string {
        return translations[this.lang()][key] ?? key;
    }

    private isLang(value: string | null): value is Lang {
        return (
            !!value && (this.availableLangs as string[]).includes(value)
        );
    }
}
