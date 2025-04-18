import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-bipolar_transistor-on')
export class ObiBipolar_transistorOn extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 23C18.0751 23 23 18.0751 23 12C23 8.68675 21.5352 5.71563 19.2178 3.69895L8 10.1755V13.8247L12.375 16.3506L13.5 14.402L17.1962 20.0001L10.5 19.5982L11.625 17.6496L8 15.5567V18C8 18.5523 7.55228 19 7 19C6.44772 19 6 18.5523 6 18V12.75H1.02517C1.41067 18.4753 6.17694 23 12 23Z" fill="currentColor"/>
<path d="M12 1C14.1756 1 16.2037 1.6316 17.9109 2.72143L8 8.44348V6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6V11.25H1.02517C1.41067 5.52466 6.17694 1 12 1Z" fill="currentColor"/>
<path d="M1 12C1 11.965 1.00016 11.9301 1.00049 11.8953V12.1047C1.00016 12.0699 1 12.035 1 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM23 12C23 18.0751 18.0751 23 12 23C6.17694 23 1.41067 18.4753 1.02517 12.75H6V18C6 18.5523 6.44772 19 7 19C7.55228 19 8 18.5523 8 18V15.5567L11.625 17.6496L10.5 19.5982L17.1962 20.0001L13.5 14.402L12.375 16.3506L8 13.8247V10.1755L19.2178 3.69895C21.5352 5.71563 23 8.68675 23 12ZM17.9109 2.72143C16.2037 1.6316 14.1756 1 12 1C6.17694 1 1.41067 5.52466 1.02517 11.25H6V6C6 5.44772 6.44772 5 7 5C7.55228 5 8 5.44772 8 6V8.44348L17.9109 2.72143ZM1.00049 11.8953C1.00016 11.9301 1 11.965 1 12C1 12.035 1.00016 12.0699 1.00049 12.1047V11.8953Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 23C18.0751 23 23 18.0751 23 12C23 8.68675 21.5352 5.71563 19.2178 3.69895L8 10.1755V13.8247L12.375 16.3506L13.5 14.402L17.1962 20.0001L10.5 19.5982L11.625 17.6496L8 15.5567V18C8 18.5523 7.55228 19 7 19C6.44772 19 6 18.5523 6 18V12.75H1.02517C1.41067 18.4753 6.17694 23 12 23Z" style="fill: var(--automation-device-primary-color)"/>
<path d="M12 1C14.1756 1 16.2037 1.6316 17.9109 2.72143L8 8.44348V6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6V11.25H1.02517C1.41067 5.52466 6.17694 1 12 1Z" style="fill: var(--automation-device-primary-color)"/>
<path d="M1 12C1 11.965 1.00016 11.9301 1.00049 11.8953V12.1047C1.00016 12.0699 1 12.035 1 12Z" style="fill: var(--automation-device-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM23 12C23 18.0751 18.0751 23 12 23C6.17694 23 1.41067 18.4753 1.02517 12.75H6V18C6 18.5523 6.44772 19 7 19C7.55228 19 8 18.5523 8 18V15.5567L11.625 17.6496L10.5 19.5982L17.1962 20.0001L13.5 14.402L12.375 16.3506L8 13.8247V10.1755L19.2178 3.69895C21.5352 5.71563 23 8.68675 23 12ZM17.9109 2.72143C16.2037 1.6316 14.1756 1 12 1C6.17694 1 1.41067 5.52466 1.02517 11.25H6V6C6 5.44772 6.44772 5 7 5C7.55228 5 8 5.44772 8 6V8.44348L17.9109 2.72143ZM1.00049 11.8953C1.00016 11.9301 1 11.965 1 12C1 12.035 1.00016 12.0699 1.00049 12.1047V11.8953Z" style="fill: var(--automation-device-tertiary-color)"/>
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
    'obi-bipolar_transistor-on': ObiBipolar_transistorOn;
  }
}
