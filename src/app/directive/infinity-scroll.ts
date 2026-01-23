import { AfterViewInit, Directive, ElementRef, OnDestroy, output } from '@angular/core';

@Directive({
  selector: '[appInfinityScroll]',
})
export class InfinityScroll implements AfterViewInit, OnDestroy {
  isIntersecting = output();
  private observer: IntersectionObserver | undefined;

  constructor(private element: ElementRef) {}
  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isIntersecting.emit();
        }
      });
    }, options);
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
