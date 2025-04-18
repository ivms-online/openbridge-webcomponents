import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-buoy-barrel-east')
export class ObiBuoyBarrelEast extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M18 4H14L17 1L18 4Z" fill="currentColor"/>
<path d="M17.5 6H13.5L14.5 9L17.5 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 20H15C15 21.6569 13.6569 23 12 23C10.3431 23 9 21.6569 9 20H5V18.5H6.54404C6.19474 17.7389 6 16.8922 6 16C6 15.0034 6.24299 14.0635 6.67297 13.2364C7.67262 11.3134 9.68293 10 12 10C15.3137 10 18 12.6863 18 16C18 16.8922 17.8053 17.7389 17.456 18.5H19V20ZM9.40135 18.5C9.71124 17.9643 10.182 17.5333 10.7476 17.2731C10.3109 15.8173 9.33612 14.5942 8.05431 13.8346C7.70099 14.477 7.5 15.215 7.5 16C7.5 16.9261 7.7785 17.7849 8.25754 18.5H9.40135ZM12.2328 17.0089C13.245 17.0866 14.1165 17.6665 14.5987 18.5H15.7423C16.2214 17.7849 16.4999 16.9261 16.4999 16C16.4999 13.5147 14.4851 11.5 11.9999 11.5L11.9854 11.5C11.9557 11.5001 11.926 11.5005 11.8964 11.5012C10.7816 11.5263 9.76691 11.9569 8.99393 12.6513C10.5571 13.6366 11.7313 15.1831 12.2328 17.0089ZM13.5 20C13.5 20.8284 12.8284 21.5 12 21.5C11.1716 21.5 10.5 20.8284 10.5 20C10.5 19.1716 11.1716 18.5 12 18.5C12.8284 18.5 13.5 19.1716 13.5 20Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 4H14L17 1L18 4Z" style="fill: var(--element-active-color)"/>
<path d="M17.5 6H13.5L14.5 9L17.5 6Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 20H15C15 21.6569 13.6569 23 12 23C10.3431 23 9 21.6569 9 20H5V18.5H6.54404C6.19474 17.7389 6 16.8922 6 16C6 15.0034 6.24299 14.0635 6.67297 13.2364C7.67262 11.3134 9.68293 10 12 10C15.3137 10 18 12.6863 18 16C18 16.8922 17.8053 17.7389 17.456 18.5H19V20ZM9.40135 18.5C9.71124 17.9643 10.182 17.5333 10.7476 17.2731C10.3109 15.8173 9.33612 14.5942 8.05431 13.8346C7.70099 14.477 7.5 15.215 7.5 16C7.5 16.9261 7.7785 17.7849 8.25754 18.5H9.40135ZM12.2328 17.0089C13.245 17.0866 14.1165 17.6665 14.5987 18.5H15.7423C16.2214 17.7849 16.4999 16.9261 16.4999 16C16.4999 13.5147 14.4851 11.5 11.9999 11.5L11.9854 11.5C11.9557 11.5001 11.926 11.5005 11.8964 11.5012C10.7816 11.5263 9.76691 11.9569 8.99393 12.6513C10.5571 13.6366 11.7313 15.1831 12.2328 17.0089ZM13.5 20C13.5 20.8284 12.8284 21.5 12 21.5C11.1716 21.5 10.5 20.8284 10.5 20C10.5 19.1716 11.1716 18.5 12 18.5C12.8284 18.5 13.5 19.1716 13.5 20Z" style="fill: var(--element-active-color)"/>
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
    'obi-buoy-barrel-east': ObiBuoyBarrelEast;
  }
}
