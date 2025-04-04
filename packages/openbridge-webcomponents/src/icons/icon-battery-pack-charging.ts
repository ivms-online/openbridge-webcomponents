import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-battery-pack-charging')
export class ObiBatteryPackCharging extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.4 6.4H10.069C10.58 6.4 11 6.82 11 7.331V18.069C11 18.58 10.58 19 10.062 19H5.931C5.42 19 5 18.58 5 18.062V7.331C5 6.82 5.42 6.4 5.931 6.4H6.6V5H9.4V6.4ZM7.53333 17V13.2385H5.931L8.46667 8V12.1615H9.8722L7.53333 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.069 6.4H17.4V5H14.6V6.4H13.931C13.42 6.4 13 6.82 13 7.331V18.062C13 18.58 13.42 19 13.931 19H18.062C18.58 19 19 18.58 19 18.069V7.331C19 6.82 18.58 6.4 18.069 6.4ZM15.5333 17V13.2385H13.931L16.4667 8V12.1615H17.8722L15.5333 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM4 3.5H20C20.2761 3.5 20.5 3.72386 20.5 4V20C20.5 20.2761 20.2761 20.5 20 20.5H4C3.72386 20.5 3.5 20.2761 3.5 20V4C3.5 3.72386 3.72386 3.5 4 3.5Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.4 6.4H10.069C10.58 6.4 11 6.82 11 7.331V18.069C11 18.58 10.58 19 10.062 19H5.931C5.42 19 5 18.58 5 18.062V7.331C5 6.82 5.42 6.4 5.931 6.4H6.6V5H9.4V6.4ZM7.53333 17V13.2385H5.931L8.46667 8V12.1615H9.8722L7.53333 17Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.069 6.4H17.4V5H14.6V6.4H13.931C13.42 6.4 13 6.82 13 7.331V18.062C13 18.58 13.42 19 13.931 19H18.062C18.58 19 19 18.58 19 18.069V7.331C19 6.82 18.58 6.4 18.069 6.4ZM15.5333 17V13.2385H13.931L16.4667 8V12.1615H17.8722L15.5333 17Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM4 3.5H20C20.2761 3.5 20.5 3.72386 20.5 4V20C20.5 20.2761 20.2761 20.5 20 20.5H4C3.72386 20.5 3.5 20.2761 3.5 20V4C3.5 3.72386 3.72386 3.5 4 3.5Z" style="fill: var(--element-active-color)"/>
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
    'obi-battery-pack-charging': ObiBatteryPackCharging;
  }
}
