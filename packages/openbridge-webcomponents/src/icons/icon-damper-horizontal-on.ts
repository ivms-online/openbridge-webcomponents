import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-damper-horizontal-on')
export class ObiDamperHorizontalOn extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M15.874 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H15.874C15.4299 14.7252 13.8638 16 12 16C10.1362 16 8.57006 14.7252 8.12602 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H8.12602C8.57006 9.27477 10.1362 8 12 8C13.8638 8 15.4299 9.27477 15.874 11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 10H16.5836C15.8122 8.23448 14.0512 7 12 7C9.94877 7 8.18783 8.23448 7.41637 10H2C0.895431 10 0 10.8954 0 12C0 13.1046 0.895432 14 2 14H7.41637C8.18783 15.7655 9.94877 17 12 17C14.0512 17 15.8122 15.7655 16.5836 14H22C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10ZM22 11H15.874C15.4299 9.27477 13.8638 8 12 8C10.1362 8 8.57006 9.27477 8.12602 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H8.12602C8.57006 14.7252 10.1362 16 12 16C13.8638 16 15.4299 14.7252 15.874 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.874 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H15.874C15.4299 14.7252 13.8638 16 12 16C10.1362 16 8.57006 14.7252 8.12602 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H8.12602C8.57006 9.27477 10.1362 8 12 8C13.8638 8 15.4299 9.27477 15.874 11Z" style="fill: var(--automation-device-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 10H16.5836C15.8122 8.23448 14.0512 7 12 7C9.94877 7 8.18783 8.23448 7.41637 10H2C0.895431 10 0 10.8954 0 12C0 13.1046 0.895432 14 2 14H7.41637C8.18783 15.7655 9.94877 17 12 17C14.0512 17 15.8122 15.7655 16.5836 14H22C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10ZM22 11H15.874C15.4299 9.27477 13.8638 8 12 8C10.1362 8 8.57006 9.27477 8.12602 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H8.12602C8.57006 14.7252 10.1362 16 12 16C13.8638 16 15.4299 14.7252 15.874 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11Z" style="fill: var(--automation-device-tertiary-color)"/>
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
    'obi-damper-horizontal-on': ObiDamperHorizontalOn;
  }
}
