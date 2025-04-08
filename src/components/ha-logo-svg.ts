import type { TemplateResult } from "lit";
import { css, LitElement, html } from "lit";
import { customElement } from "lit/decorators";

@customElement("ha-logo-svg")
export class HaLogoSvg extends LitElement {
  protected render(): TemplateResult {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
      {/* 田地 */}
      <path fill="#88C057" d="M0 160c40-40 80-40 120 0s80 40 120 0v80H0V160z" />

      {/* 陽光 */}
      <circle cx="190" cy="50" r="25" fill="#FFD93B" />
      <path
        fill="none"
        stroke="#FFD93B"
        strokeWidth="4"
        d="M190 10V0M190 90v10M160 50h-10M220 50h10M170 20l-10-10M210 80l10 10M210 20l10-10M170 80l-10 10"
      />

      {/* 嫩芽主莖 */}
      <path
        fill="#4CAF50"
        d="M120 140c-10-30 0-50 10-50s20 20 10 50c-5 15-15 15-20 0z"
      />

      {/* 左葉 */}
      <path
        fill="#66BB6A"
        d="M115 125c-10-10-25-10-35-5 5 15 20 20 35 20v-15z"
      />

      {/* 右葉 */}
      <path
        fill="#66BB6A"
        d="M125 125c10-10 25-10 35-5-5 15-20 20-35 20v-15z"
      />
    </svg>`;
  }

  static styles = css`
    :host {
      display: var(--ha-icon-display, inline-flex);
      align-items: center;
      justify-content: center;
      position: relative;
      vertical-align: middle;
      fill: currentcolor;
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
    }
    svg {
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: block;
    }
  `;
}
declare global {
  interface HTMLElementTagNameMap {
    "ha-logo-svg": HaLogoSvg;
  }
}
