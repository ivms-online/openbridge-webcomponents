import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-measure-google')
export class ObiMeasureGoogle extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 18C3.1 18 2.75 17.85 2.45 17.55C2.15 17.25 2 16.9 2 16.5V7.5C2 7.11667 2.15 6.77083 2.45 6.4625C2.75 6.15417 3.1 6 3.5 6H20.5C20.9 6 21.25 6.15417 21.55 6.4625C21.85 6.77083 22 7.11667 22 7.5V16.5C22 16.9 21.85 17.25 21.55 17.55C21.25 17.85 20.9 18 20.5 18H3.5ZM3.5 16.5H20.5V7.5H17.25V12H15.75V7.5H12.75V12H11.25V7.5H8.25V12H6.75V7.5H3.5V16.5ZM6.75 12H8.25H6.75ZM11.25 12H12.75H11.25ZM15.75 12H17.25H15.75Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 18C3.1 18 2.75 17.85 2.45 17.55C2.15 17.25 2 16.9 2 16.5V7.5C2 7.11667 2.15 6.77083 2.45 6.4625C2.75 6.15417 3.1 6 3.5 6H20.5C20.9 6 21.25 6.15417 21.55 6.4625C21.85 6.77083 22 7.11667 22 7.5V16.5C22 16.9 21.85 17.25 21.55 17.55C21.25 17.85 20.9 18 20.5 18H3.5ZM3.5 16.5H20.5V7.5H17.25V12H15.75V7.5H12.75V12H11.25V7.5H8.25V12H6.75V7.5H3.5V16.5ZM6.75 12H8.25H6.75ZM11.25 12H12.75H11.25ZM15.75 12H17.25H15.75Z" style="fill: var(--element-active-color)"/>
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
    'obi-measure-google': ObiMeasureGoogle;
  }
}
