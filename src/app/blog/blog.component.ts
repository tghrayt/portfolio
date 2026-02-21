import { Component, OnInit } from '@angular/core';
import { BlogItem } from '../dto/BlogItem';
import { DataService } from '../services/data.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-blog',
    imports: [CardModule, ButtonModule],
    templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
    blogs: BlogItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService.loadData<BlogItem[]>('blogs').subscribe((data) => {
            this.blogs = data;
        });
    }
}
