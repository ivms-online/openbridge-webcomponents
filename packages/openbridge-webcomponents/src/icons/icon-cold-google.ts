import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-cold-google')
export class ObiColdGoogle extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11H17.83L21.07 7.76L19.66 6.34L15 11H13V9L17.66 4.34L16.24 2.93L13 6.17V2H11V6.17L7.76 2.93L6.34 4.34L11 9V11H9L4.34 6.34L2.93 7.76L6.17 11H2V13H6.17L2.93 16.24L4.34 17.66L9 13H11V15L6.34 19.66L7.76 21.07L11 17.83V22H13V17.83L16.24 21.07L17.66 19.66L13 15V13H15L19.66 17.66L21.07 16.24L17.83 13H22V11Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11H17.83L21.07 7.76L19.66 6.34L15 11H13V9L17.66 4.34L16.24 2.93L13 6.17V2H11V6.17L7.76 2.93L6.34 4.34L11 9V11H9L4.34 6.34L2.93 7.76L6.17 11H2V13H6.17L2.93 16.24L4.34 17.66L9 13H11V15L6.34 19.66L7.76 21.07L11 17.83V22H13V17.83L16.24 21.07L17.66 19.66L13 15V13H15L19.66 17.66L21.07 16.24L17.83 13H22V11Z" style="fill: var(--element-active-color)"/>
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
    'obi-cold-google': ObiColdGoogle;
  }
}
