import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-resize-top')
export class ObiResizeTop extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6C4.55228 6 5 5.55228 5 5C5 4.44772 4.55228 4 4 4Z" fill="currentColor"/>
<path d="M8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4Z" fill="currentColor"/>
<path d="M7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9Z" fill="currentColor"/>
<path d="M4 8C3.44772 8 3 8.44772 3 9C3 9.55228 3.44772 10 4 10C4.55228 10 5 9.55228 5 9C5 8.44772 4.55228 8 4 8Z" fill="currentColor"/>
<path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5Z" fill="currentColor"/>
<path d="M12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8Z" fill="currentColor"/>
<path d="M15 5C15 4.44772 15.4477 4 16 4C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6C15.4477 6 15 5.55228 15 5Z" fill="currentColor"/>
<path d="M16 8C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8Z" fill="currentColor"/>
<path d="M19 5C19 4.44772 19.4477 4 20 4C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6C19.4477 6 19 5.55228 19 5Z" fill="currentColor"/>
<path d="M20 8C19.4477 8 19 8.44772 19 9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9C21 8.44772 20.5523 8 20 8Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6C4.55228 6 5 5.55228 5 5C5 4.44772 4.55228 4 4 4Z" style="fill: var(--element-active-color)"/>
<path d="M8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4Z" style="fill: var(--element-active-color)"/>
<path d="M7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9Z" style="fill: var(--element-active-color)"/>
<path d="M4 8C3.44772 8 3 8.44772 3 9C3 9.55228 3.44772 10 4 10C4.55228 10 5 9.55228 5 9C5 8.44772 4.55228 8 4 8Z" style="fill: var(--element-active-color)"/>
<path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5Z" style="fill: var(--element-active-color)"/>
<path d="M12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8Z" style="fill: var(--element-active-color)"/>
<path d="M15 5C15 4.44772 15.4477 4 16 4C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6C15.4477 6 15 5.55228 15 5Z" style="fill: var(--element-active-color)"/>
<path d="M16 8C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8Z" style="fill: var(--element-active-color)"/>
<path d="M19 5C19 4.44772 19.4477 4 20 4C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6C19.4477 6 19 5.55228 19 5Z" style="fill: var(--element-active-color)"/>
<path d="M20 8C19.4477 8 19 8.44772 19 9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9C21 8.44772 20.5523 8 20 8Z" style="fill: var(--element-active-color)"/>
</svg>
`;

  override render() {
    return html`
      <div class="wrapper">${this.useCssColor ? this.iconCss : this.icon}</div>
    `;
  }

  static override styles = css`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obi-resize-top': ObiResizeTop;
  }
}
