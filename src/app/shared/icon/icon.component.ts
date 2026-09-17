import { Component, input } from '@angular/core';

export type IconName = 'mail' | 'linkedin' | 'github' | 'call' | 'menu';

@Component({
    selector: 'app-icon',
    template: `
    @switch (name()) {
      @case ('mail') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3.75 6.5h16.5v11a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5z" />
          <path d="m4.25 7 7.75 5.5L19.75 7" />
        </svg>
      }
      @case ('linkedin') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2.5" />
          <path d="M8 17v-6.5M8 7.75v.01" />
          <path d="M12.5 17v-4a2 2 0 0 1 4 0v4M12.5 12.5V17" />
        </svg>
      }
      @case ('github') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path
            d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48q0-.36-.01-1.32c-2.78.6-3.37-1.2-3.37-1.2-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.7-4.58 4.94.36.31.68.93.68 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
        </svg>
      }
      @case ('call') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path
            d="M4.5 4.5h3.6l1.4 3.9-2 1.6a11.2 11.2 0 0 0 5.1 5.1l1.6-2 3.9 1.4v3.6a1.5 1.5 0 0 1-1.63 1.5A16.5 16.5 0 0 1 3 6.13 1.5 1.5 0 0 1 4.5 4.5Z" />
        </svg>
      }
      @case ('menu') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <path d="M4 6.5h16M4 12h16M4 17.5h16" />
        </svg>
      }
    }
  `,
    styles: `
    :host {
      display: inline-flex;
      width: 1em;
      height: 1em;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `
})
export class IconComponent {
    name = input.required<IconName>();
}
