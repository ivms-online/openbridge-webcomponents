import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-logo-openbridge')
export class ObiLogoOpenbridge extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M1 14.5414H5.23923V10.3021H1V14.5414ZM22 12.4146C22 7.76662 18.3492 4 13.8476 4C10.0668 4 6.87915 6.67492 5.96939 10.295H9.27051C9.65324 9.39645 10.2905 8.62948 11.1039 8.08867C11.9172 7.54786 12.871 7.25684 13.8476 7.25149C16.6171 7.25149 18.8596 9.56723 18.8596 12.4241C18.8596 15.281 16.6171 17.5944 13.8476 17.5944C12.8699 17.5882 11.9153 17.2958 11.1019 16.7532C10.2885 16.2107 9.65181 15.4417 9.27051 14.5414H5.9623C6.87206 18.1615 10.0503 20.8364 13.8406 20.8364C18.3421 20.8364 21.9929 17.0698 21.9929 12.4217L22 12.4146Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 14.5414H5.23923V10.3021H1V14.5414ZM22 12.4146C22 7.76662 18.3492 4 13.8476 4C10.0668 4 6.87915 6.67492 5.96939 10.295H9.27051C9.65324 9.39645 10.2905 8.62948 11.1039 8.08867C11.9172 7.54786 12.871 7.25684 13.8476 7.25149C16.6171 7.25149 18.8596 9.56723 18.8596 12.4241C18.8596 15.281 16.6171 17.5944 13.8476 17.5944C12.8699 17.5882 11.9153 17.2958 11.1019 16.7532C10.2885 16.2107 9.65181 15.4417 9.27051 14.5414H5.9623C6.87206 18.1615 10.0503 20.8364 13.8406 20.8364C18.3421 20.8364 21.9929 17.0698 21.9929 12.4217L22 12.4146Z" style="fill: var(--element-active-color)"/>
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
    'obi-logo-openbridge': ObiLogoOpenbridge;
  }
}
