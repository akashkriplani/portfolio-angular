import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChild,
  inject
} from '@angular/core';
import { DatePipe, NgFor, NgStyle } from '@angular/common';
import { take } from 'rxjs';
import Blast from 'blast-vanilla';
import { PostsService } from '../../services/posts.service';
import { IMediumBlogPostsResponse } from '../../interfaces';
import { ShortenPipe } from '../../pipes/shorten.pipe';
import { NodeToTextPipe } from '../../pipes/node-to-text.pipe';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-medium-blog',
  standalone: true,
  imports: [DatePipe, NgFor, NgStyle, ShortenPipe, NodeToTextPipe],
  templateUrl: './medium-blog.component.html',
  styleUrls: ['./medium-blog.component.scss']
})
export class MediumBlogComponent implements OnInit, AfterViewInit {
  @ViewChild('title') titlePieces!: ElementRef;
  posts: IMediumBlogPostsResponse = { items: [] };

  private postsService = inject(PostsService);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postsService
      .getPosts()
      .pipe(take(1))
      .subscribe({
        next: (data: IMediumBlogPostsResponse) => {
          this.posts = data;
        },
        error: ({ error }) => alert(error.message)
      });
  }

  ngAfterViewInit() {
    new Blast('h1', {
      returnGenerated: true,
      delimiter: 'character',
      tag: 'span',
      search: false,
      customClass: '',
      aria: true,
      debug: false,
      name: 'blast'
    });

    let elements: HTMLCollection = this.titlePieces.nativeElement.children;
    let timer = 0;
    for (const element of Array.from(elements)) {
      setTimeout(() => {
        this.renderer.addClass(element, 'animated');
        this.renderer.addClass(element, 'bounceIn');
      }, timer);

      timer += 100;

      setTimeout(() => {
        this.renderer.removeClass(element, 'animated');
        this.renderer.removeClass(element, 'bounceIn');
        this.renderer.setStyle(element, 'opacity', 1);
        element.addEventListener('mouseenter', () => {
          this.renderer.addClass(element, 'animated');
          this.renderer.addClass(element, 'rubberBand');
        });
        element.addEventListener('mouseleave', () => {
          this.renderer.removeClass(element, 'animated');
          this.renderer.removeClass(element, 'rubberBand');
        });
      }, 1500);
    }
  }
}
