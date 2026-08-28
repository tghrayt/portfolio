import { Component, effect, ChangeDetectionStrategy } from '@angular/core';
import { BlogItem } from '../dto/BlogItem';
import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';

@Component({
    selector: 'app-blog',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './blog.component.html',
})
export class BlogComponent {
    blogs: BlogItem[] = [];

    constructor(
        private dataService: DataService,
        public languageService: LanguageService
    ) {
        effect(() => {
            const lang = this.languageService.lang();
            this.dataService
                .loadData<BlogItem[]>(`${lang}/blogs`)
                .subscribe((data) => {
                    this.blogs = data;
                });
        });
    }
}
