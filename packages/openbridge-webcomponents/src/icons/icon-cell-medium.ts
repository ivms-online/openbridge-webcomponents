import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-cell-medium')
export class ObiCellMedium extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M5.8118 12.2C6.1538 13.0167 6.6498 13.75 7.2998 14.4L8.4998 13.2C7.9998 12.7 7.6248 12.1417 7.3748 11.525C7.1248 10.9083 6.9998 10.3 6.9998 9.7C6.9998 9.05 7.1248 8.41667 7.3748 7.8C7.6248 7.18333 7.9998 6.65 8.4998 6.2L7.2998 5C6.6498 5.65 6.1538 6.38333 5.8118 7.2C5.47047 8.01667 5.2998 8.85 5.2998 9.7C5.2998 10.55 5.47047 11.3833 5.8118 12.2Z" fill="currentColor"/>
<path d="M15.4998 13.2L16.6998 14.4C17.3498 13.75 17.8458 13.0167 18.1878 12.2C18.5291 11.3833 18.6998 10.55 18.6998 9.7C18.6498 8.85 18.4665 8.01667 18.1498 7.2C17.8331 6.38333 17.3498 5.65 16.6998 5L15.4998 6.2C15.9998 6.7 16.3748 7.25833 16.6248 7.875C16.8748 8.49167 16.9998 9.1 16.9998 9.7C16.9998 10.35 16.8748 10.9833 16.6248 11.6C16.3748 12.2167 15.9998 12.75 15.4998 13.2Z" fill="currentColor"/>
<path d="M15 10C15 11.3062 14.165 12.4175 13 12.8291V22H11V12.8291C9.83496 12.4175 9 11.3062 9 10C9 8.34326 10.3428 7 12 7C13.6572 7 15 8.34326 15 10Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.8118 12.2C6.1538 13.0167 6.6498 13.75 7.2998 14.4L8.4998 13.2C7.9998 12.7 7.6248 12.1417 7.3748 11.525C7.1248 10.9083 6.9998 10.3 6.9998 9.7C6.9998 9.05 7.1248 8.41667 7.3748 7.8C7.6248 7.18333 7.9998 6.65 8.4998 6.2L7.2998 5C6.6498 5.65 6.1538 6.38333 5.8118 7.2C5.47047 8.01667 5.2998 8.85 5.2998 9.7C5.2998 10.55 5.47047 11.3833 5.8118 12.2Z" style="fill: var(--element-active-color)"/>
<path d="M15.4998 13.2L16.6998 14.4C17.3498 13.75 17.8458 13.0167 18.1878 12.2C18.5291 11.3833 18.6998 10.55 18.6998 9.7C18.6498 8.85 18.4665 8.01667 18.1498 7.2C17.8331 6.38333 17.3498 5.65 16.6998 5L15.4998 6.2C15.9998 6.7 16.3748 7.25833 16.6248 7.875C16.8748 8.49167 16.9998 9.1 16.9998 9.7C16.9998 10.35 16.8748 10.9833 16.6248 11.6C16.3748 12.2167 15.9998 12.75 15.4998 13.2Z" style="fill: var(--element-active-color)"/>
<path d="M15 10C15 11.3062 14.165 12.4175 13 12.8291V22H11V12.8291C9.83496 12.4175 9 11.3062 9 10C9 8.34326 10.3428 7 12 7C13.6572 7 15 8.34326 15 10Z" style="fill: var(--element-active-color)"/>
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
    'obi-cell-medium': ObiCellMedium;
  }
}
