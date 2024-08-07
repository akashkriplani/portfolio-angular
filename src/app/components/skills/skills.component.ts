import {
  OnInit,
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  inject
} from '@angular/core';
import { RouterLink } from '@angular/router';
import Blast from 'blast-vanilla';
import { ISkills } from '../../interfaces';
import { SKILLS } from '../../constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('title') titlePieces!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;
  isMakisuOpen: boolean = true;
  startingYear: number = 2014;
  yearsOfExperience!: number;
  skills: ISkills = SKILLS;

  private renderer = inject(Renderer2);

  ngOnInit(): void {
    this.yearsOfExperience = new Date().getFullYear() - this.startingYear;
  }

  toggleExperience() {
    this.isMakisuOpen = !this.isMakisuOpen;
    if (this.isMakisuOpen) {
      this.renderer.removeClass(this.experience.nativeElement, 'fade-in');
      this.renderer.addClass(this.experience.nativeElement, 'fade-out');
    } else {
      this.renderer.addClass(this.experience.nativeElement, 'fade-in');
      this.renderer.removeClass(this.experience.nativeElement, 'fade-out');
    }
  }

  loadMakisus() {
    const $ = (window as any).jQuery;
    if ($.fn.makisu.enabled) {
      const $techSkills = $('.tech-skills');
      const $mgmtSkills = $('.mgmt-skills');
      const $softSkills = $('.soft-skills');

      // Create Makisus

      $techSkills.makisu({
        selector: 'dd',
        overlap: 0.85,
        speed: 1.7
      });

      $mgmtSkills.makisu({
        selector: 'dd',
        overlap: 0.6,
        speed: 0.85
      });

      $softSkills.makisu({
        selector: 'dd',
        overlap: 0.2,
        speed: 0.5
      });

      // Open all

      $('.list').makisu('open');

      // Toggle on click

      $('.toggle').on('click', function () {
        $('.list').makisu('toggle');
      });
    } else {
      console.error('Error loading Makisus');
    }
  }

  ngAfterViewInit() {
    this.loadMakisus();

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
      }, 2000);
    }
  }
}
