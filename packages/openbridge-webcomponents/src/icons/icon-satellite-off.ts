import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-satellite-off')
export class ObiSatelliteOff extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4148 2L15.0006 3.41421L17.1217 5.53531L15 7.65701L16.4142 9.07122L18.5359 6.94952L20.6575 9.07107L22.0717 7.65685L19.9501 5.53531L22.0711 3.41436L20.6569 2.00015L18.5359 4.12109L16.4148 2Z" fill="currentColor"/>
<path d="M16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12C5 10.1435 5.7375 8.36299 7.05025 7.05023L11.707 11.707L12.0633 11.3508C12.0224 11.2416 12 11.1234 12 11C12 10.4477 12.4477 10 13 10C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12C12.9458 12 12.8927 11.9957 12.8409 11.9874L12.4141 12.4141L16.9497 16.9497Z" fill="currentColor"/>
<path d="M2 23L5.58481 18.3122L5.63604 18.3638C7.32387 20.0516 9.61305 20.9999 12 20.9999C12.689 20.9999 13.3699 20.9208 14.0305 20.7679L16 23H2Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4148 2L15.0006 3.41421L17.1217 5.53531L15 7.65701L16.4142 9.07122L18.5359 6.94952L20.6575 9.07107L22.0717 7.65685L19.9501 5.53531L22.0711 3.41436L20.6569 2.00015L18.5359 4.12109L16.4148 2Z" style="fill: var(--element-active-color)"/>
<path d="M16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12C5 10.1435 5.7375 8.36299 7.05025 7.05023L11.707 11.707L12.0633 11.3508C12.0224 11.2416 12 11.1234 12 11C12 10.4477 12.4477 10 13 10C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12C12.9458 12 12.8927 11.9957 12.8409 11.9874L12.4141 12.4141L16.9497 16.9497Z" style="fill: var(--element-active-color)"/>
<path d="M2 23L5.58481 18.3122L5.63604 18.3638C7.32387 20.0516 9.61305 20.9999 12 20.9999C12.689 20.9999 13.3699 20.9208 14.0305 20.7679L16 23H2Z" style="fill: var(--element-active-color)"/>
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
    'obi-satellite-off': ObiSatelliteOff;
  }
}
