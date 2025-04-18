import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-damper-horizontal-on-large')
export class ObiDamperHorizontalOnLarge extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M13.937 11.5H22C22.2761 11.5 22.5 11.7239 22.5 12C22.5 12.2761 22.2761 12.5 22 12.5H13.937C13.715 13.3626 12.9319 14 12 14C11.0681 14 10.285 13.3626 10.063 12.5H2C1.72386 12.5 1.5 12.2761 1.5 12C1.5 11.7239 1.72386 11.5 2 11.5H10.063C10.285 10.6374 11.0681 10 12 10C12.9319 10 13.715 10.6374 13.937 11.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 11H14.2918C13.9061 10.1172 13.0256 9.5 12 9.5C10.9744 9.5 10.0939 10.1172 9.70819 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H9.70819C10.0939 13.8828 10.9744 14.5 12 14.5C13.0256 14.5 13.9061 13.8828 14.2918 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11ZM22 11.5H13.937C13.715 10.6374 12.9319 10 12 10C11.0681 10 10.285 10.6374 10.063 11.5H2C1.72386 11.5 1.5 11.7239 1.5 12C1.5 12.2761 1.72386 12.5 2 12.5H10.063C10.285 13.3626 11.0681 14 12 14C12.9319 14 13.715 13.3626 13.937 12.5H22C22.2761 12.5 22.5 12.2761 22.5 12C22.5 11.7239 22.2761 11.5 22 11.5Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.937 11.5H22C22.2761 11.5 22.5 11.7239 22.5 12C22.5 12.2761 22.2761 12.5 22 12.5H13.937C13.715 13.3626 12.9319 14 12 14C11.0681 14 10.285 13.3626 10.063 12.5H2C1.72386 12.5 1.5 12.2761 1.5 12C1.5 11.7239 1.72386 11.5 2 11.5H10.063C10.285 10.6374 11.0681 10 12 10C12.9319 10 13.715 10.6374 13.937 11.5Z" style="fill: var(--automation-device-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 11H14.2918C13.9061 10.1172 13.0256 9.5 12 9.5C10.9744 9.5 10.0939 10.1172 9.70819 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H9.70819C10.0939 13.8828 10.9744 14.5 12 14.5C13.0256 14.5 13.9061 13.8828 14.2918 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11ZM22 11.5H13.937C13.715 10.6374 12.9319 10 12 10C11.0681 10 10.285 10.6374 10.063 11.5H2C1.72386 11.5 1.5 11.7239 1.5 12C1.5 12.2761 1.72386 12.5 2 12.5H10.063C10.285 13.3626 11.0681 14 12 14C12.9319 14 13.715 13.3626 13.937 12.5H22C22.2761 12.5 22.5 12.2761 22.5 12C22.5 11.7239 22.2761 11.5 22 11.5Z" style="fill: var(--automation-device-tertiary-color)"/>
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
    'obi-damper-horizontal-on-large': ObiDamperHorizontalOnLarge;
  }
}
