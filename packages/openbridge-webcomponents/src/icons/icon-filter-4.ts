import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-filter-4')
export class ObiFilter4 extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 1H1V23H23V1ZM1 0C0.447715 0 0 0.447716 0 1V23C0 23.5523 0.447716 24 1 24H23C23.5523 24 24 23.5523 24 23V1C24 0.447715 23.5523 0 23 0H1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 8.848C9.79218 7.79936 7.68266 7.72444 5.93468 8.6514L4.4685 9.42892L3.5315 7.66199L4.99767 6.88448C7.37628 5.62309 10.2469 5.72505 12.53 7.152C14.2078 8.20064 16.3173 8.27556 18.0653 7.3486L19.5315 6.57108L20.4685 8.33801L19.0023 9.11552C16.6237 10.3769 13.7531 10.275 11.47 8.848Z" fill="currentColor"/>
<path d="M10.2937 16.2922L8.29289 18.293L9.70711 19.7072L12.1762 17.2381C14.326 18.2812 16.8631 18.2495 19.0023 17.1151L20.4685 16.3375L19.5315 14.5706L18.0653 15.3481C16.7068 16.0685 15.13 16.1838 13.7071 15.7072L15.7071 13.7072L14.2929 12.293L11.8246 14.7613C9.67455 13.7179 7.13711 13.7495 4.99767 14.884L3.53149 15.6615L4.4685 17.4284L5.93467 16.6509C7.29342 15.9304 8.87062 15.8152 10.2937 16.2922Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 1H1V23H23V1ZM1 0C0.447715 0 0 0.447716 0 1V23C0 23.5523 0.447716 24 1 24H23C23.5523 24 24 23.5523 24 23V1C24 0.447715 23.5523 0 23 0H1Z" style="fill: var(--automation-device-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 8.848C9.79218 7.79936 7.68266 7.72444 5.93468 8.6514L4.4685 9.42892L3.5315 7.66199L4.99767 6.88448C7.37628 5.62309 10.2469 5.72505 12.53 7.152C14.2078 8.20064 16.3173 8.27556 18.0653 7.3486L19.5315 6.57108L20.4685 8.33801L19.0023 9.11552C16.6237 10.3769 13.7531 10.275 11.47 8.848Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M10.2937 16.2922L8.29289 18.293L9.70711 19.7072L12.1762 17.2381C14.326 18.2812 16.8631 18.2495 19.0023 17.1151L20.4685 16.3375L19.5315 14.5706L18.0653 15.3481C16.7068 16.0685 15.13 16.1838 13.7071 15.7072L15.7071 13.7072L14.2929 12.293L11.8246 14.7613C9.67455 13.7179 7.13711 13.7495 4.99767 14.884L3.53149 15.6615L4.4685 17.4284L5.93467 16.6509C7.29342 15.9304 8.87062 15.8152 10.2937 16.2922Z" style="fill: var(--automation-device-secondary-color)"/>
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
    'obi-filter-4': ObiFilter4;
  }
}
