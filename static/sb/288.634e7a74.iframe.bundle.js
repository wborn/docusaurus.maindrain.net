"use strict";(self.webpackChunk_openremote_workshop=self.webpackChunk_openremote_workshop||[]).push([[288],{"../../../node_modules/@material/data-table/dist/mdc.data-table.css":module=>{module.exports='/**\n * @license\n * Copyright Google LLC All Rights Reserved.\n *\n * Use of this source code is governed by an MIT-style license that can be\n * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE\n */\n.mdc-data-table__content {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n}\n\n.mdc-data-table {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-surface, #fff);\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-shape-medium, 4px);\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n  -webkit-overflow-scrolling: touch;\n  display: inline-flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  position: relative;\n}\n.mdc-data-table .mdc-data-table__header-cell:first-child {\n  border-top-left-radius: 4px;\n  /* @alternate */\n  border-top-left-radius: var(--mdc-shape-medium, 4px);\n}\n[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child, .mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl] {\n  border-top-right-radius: 4px;\n  /* @alternate */\n  border-top-right-radius: var(--mdc-shape-medium, 4px);\n  border-top-left-radius: 0;\n}\n.mdc-data-table .mdc-data-table__header-cell:last-child {\n  border-top-right-radius: 4px;\n  /* @alternate */\n  border-top-right-radius: var(--mdc-shape-medium, 4px);\n}\n[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child, .mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl] {\n  border-top-left-radius: 4px;\n  /* @alternate */\n  border-top-left-radius: var(--mdc-shape-medium, 4px);\n  border-top-right-radius: 0;\n}\n\n.mdc-data-table__row {\n  background-color: inherit;\n}\n\n.mdc-data-table__header-cell {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-surface, #fff);\n}\n\n.mdc-data-table__row--selected {\n  background-color: rgba(98, 0, 238, 0.04);\n}\n\n.mdc-data-table__header-cell:after {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,\n.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,\n.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.mdc-data-table__row,\n.mdc-data-table__pagination {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdc-data-table__header-cell:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n\n.mdc-data-table__row,\n.mdc-data-table__pagination {\n  border-top-width: 1px;\n  border-top-style: solid;\n}\n\n.mdc-data-table__row:not(.mdc-data-table__row--selected):hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.mdc-data-table__header-cell {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mdc-data-table__pagination-total,\n.mdc-data-table__pagination-rows-per-page-label,\n.mdc-data-table__cell {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mdc-data-table__cell {\n  height: 52px;\n}\n\n.mdc-data-table__pagination {\n  min-height: 52px;\n}\n\n.mdc-data-table__header-cell {\n  height: 56px;\n}\n\n.mdc-data-table__cell,\n.mdc-data-table__header-cell {\n  padding-right: 16px;\n  padding-left: 16px;\n}\n\n.mdc-data-table__header-cell--checkbox,\n.mdc-data-table__cell--checkbox {\n  /* @noflip */\n  padding-left: 4px;\n  /* @noflip */\n  padding-right: 0;\n}\n[dir=rtl] .mdc-data-table__header-cell--checkbox, .mdc-data-table__header-cell--checkbox[dir=rtl],\n[dir=rtl] .mdc-data-table__cell--checkbox,\n.mdc-data-table__cell--checkbox[dir=rtl] {\n  /* @noflip */\n  padding-left: 0;\n  /* @noflip */\n  padding-right: 4px;\n}\n\n.mdc-data-table__sort-icon-button {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-data-table__sort-icon-button::before, .mdc-data-table__sort-icon-button::after {\n  background-color: rgba(0, 0, 0, 0.6);\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, rgba(0, 0, 0, 0.6));\n}\n.mdc-data-table__sort-icon-button:hover::before, .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused::before, .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-data-table__sort-icon-button.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n\n.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button::before, .mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button::after {\n  background-color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, rgba(0, 0, 0, 0.87));\n}\n.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover::before, .mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused::before, .mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n\n.mdc-data-table__table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  width: 100%;\n}\n\n.mdc-data-table__table {\n  min-width: 100%;\n  border: 0;\n  white-space: nowrap;\n  border-collapse: collapse;\n  /**\n   * With table-layout:fixed, table and column widths are defined by the width\n   * of the first row of cells. Cells in subsequent rows do not affect column\n   * widths. This results in a predictable table layout and may also speed up\n   * rendering.\n   */\n  table-layout: fixed;\n}\n\n.mdc-data-table__cell {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n}\n[dir=rtl] .mdc-data-table__cell, .mdc-data-table__cell[dir=rtl] {\n  /* @noflip */\n  text-align: right;\n}\n\n.mdc-data-table__cell--numeric {\n  text-align: right;\n}\n[dir=rtl] .mdc-data-table__cell--numeric, .mdc-data-table__cell--numeric[dir=rtl] {\n  /* @noflip */\n  text-align: left;\n}\n\n.mdc-data-table__cell--checkbox {\n  width: 1px;\n}\n\n.mdc-data-table__header-cell {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  outline: none;\n  /* @noflip */\n  text-align: left;\n}\n[dir=rtl] .mdc-data-table__header-cell, .mdc-data-table__header-cell[dir=rtl] {\n  /* @noflip */\n  text-align: right;\n}\n\n.mdc-data-table__header-cell--checkbox {\n  width: 1px;\n}\n\n.mdc-data-table__header-cell--numeric {\n  text-align: right;\n}\n[dir=rtl] .mdc-data-table__header-cell--numeric, .mdc-data-table__header-cell--numeric[dir=rtl] {\n  /* @noflip */\n  text-align: left;\n}\n\n.mdc-data-table__sort-icon-button {\n  width: 28px;\n  height: 28px;\n  padding: 2px;\n  -webkit-transform: rotate(0.0001deg);\n          transform: rotate(0.0001deg);\n  /* @noflip */\n  margin-left: 4px;\n  /* @noflip */\n  margin-right: 0;\n  transition: -webkit-transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n}\n[dir=rtl] .mdc-data-table__sort-icon-button, .mdc-data-table__sort-icon-button[dir=rtl] {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 4px;\n}\n.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 4px;\n}\n[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button, .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl] {\n  /* @noflip */\n  margin-left: 4px;\n  /* @noflip */\n  margin-right: 0;\n}\n.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n}\n.mdc-data-table__sort-icon-button:focus, .mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button, .mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button {\n  opacity: 1;\n}\n\n.mdc-data-table__header-cell-wrapper {\n  align-items: center;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.mdc-data-table__header-cell--with-sort {\n  cursor: pointer;\n}\n\n.mdc-data-table__sort-status-label {\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  /* added line */\n  width: 1px;\n}\n\n.mdc-data-table__progress-indicator {\n  display: none;\n  position: absolute;\n  width: 100%;\n}\n.mdc-data-table--in-progress .mdc-data-table__progress-indicator {\n  display: block;\n}\n\n.mdc-data-table__scrim {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-surface, #fff);\n  height: 100%;\n  opacity: 0.32;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.mdc-data-table--sticky-header .mdc-data-table__header-cell {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.mdc-data-table--sticky-header .mdc-data-table__header-cell:after {\n  bottom: 0;\n  content: "";\n  left: 0;\n  position: absolute;\n  width: 100%;\n}\n.mdc-data-table--sticky-header .mdc-data-table__row:first-child {\n  border-top: 0;\n}\n\n.mdc-data-table__pagination {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.mdc-data-table__pagination-trailing {\n  /* @noflip */\n  margin-left: 4px;\n  /* @noflip */\n  margin-right: 0;\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n[dir=rtl] .mdc-data-table__pagination-trailing, .mdc-data-table__pagination-trailing[dir=rtl] {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 4px;\n}\n\n.mdc-data-table__pagination-navigation {\n  align-items: center;\n  display: flex;\n}\n\n.mdc-data-table__pagination-button {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 4px;\n}\n[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon, .mdc-data-table__pagination-button .mdc-button__icon[dir=rtl] {\n  /* @noflip */\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n[dir=rtl] .mdc-data-table__pagination-button, .mdc-data-table__pagination-button[dir=rtl] {\n  /* @noflip */\n  margin-left: 4px;\n  /* @noflip */\n  margin-right: 0;\n}\n\n.mdc-data-table__pagination-total {\n  /* @noflip */\n  margin-left: 14px;\n  /* @noflip */\n  margin-right: 36px;\n  white-space: nowrap;\n}\n[dir=rtl] .mdc-data-table__pagination-total, .mdc-data-table__pagination-total[dir=rtl] {\n  /* @noflip */\n  margin-left: 36px;\n  /* @noflip */\n  margin-right: 14px;\n}\n\n.mdc-data-table__pagination-rows-per-page {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 22px;\n  align-items: center;\n  display: inline-flex;\n}\n[dir=rtl] .mdc-data-table__pagination-rows-per-page, .mdc-data-table__pagination-rows-per-page[dir=rtl] {\n  /* @noflip */\n  margin-left: 22px;\n  /* @noflip */\n  margin-right: 0;\n}\n\n.mdc-data-table__pagination-rows-per-page-label {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 12px;\n  white-space: nowrap;\n}\n[dir=rtl] .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__pagination-rows-per-page-label[dir=rtl] {\n  /* @noflip */\n  margin-left: 12px;\n  /* @noflip */\n  margin-right: 0;\n}\n\n.mdc-data-table__pagination-rows-per-page-select {\n  min-width: 80px;\n  margin: 8px 0;\n}\n.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor {\n  width: 100%;\n  min-width: 80px;\n}\n.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor {\n  height: 36px;\n}\n.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above {\n  -webkit-transform: translateY(-27.25px) scale(1);\n          transform: translateY(-27.25px) scale(1);\n}\n.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above {\n  font-size: 0.75rem;\n}\n.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  -webkit-transform: translateY(-24.75px) scale(0.75);\n          transform: translateY(-24.75px) scale(0.75);\n}\n.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake {\n  -webkit-animation: mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1;\n          animation: mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1;\n}\n@-webkit-keyframes mdc-floating-label-shake-float-above-select-outlined-36px {\n  0% {\n    -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n            transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  33% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n            animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    -webkit-transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);\n            transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  66% {\n    -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n            animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    -webkit-transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);\n            transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  100% {\n    -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n            transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n  }\n}\n@keyframes mdc-floating-label-shake-float-above-select-outlined-36px {\n  0% {\n    -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n            transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  33% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n            animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    -webkit-transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);\n            transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  66% {\n    -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n            animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    -webkit-transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);\n            transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  100% {\n    -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n            transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n  }\n}\n.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon {\n  width: 20px;\n  height: 20px;\n}\n.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {\n  max-width: calc(100% - 56px);\n}\n.mdc-data-table__pagination-rows-per-page-select .mdc-list-item {\n  height: 36px;\n}\n\n.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before, .mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,\n.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,\n.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before, .mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,\n.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,\n.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before, .mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,\n.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,\n.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,\n.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,\n.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,\n.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,\n.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,\n.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,\n.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background,\n.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background {\n  border-color: rgba(0, 0, 0, 0.54);\n  /* @alternate */\n  border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n  background-color: transparent;\n}\n.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background,\n.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled ~ .mdc-checkbox__background,\n.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background,\n.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled ~ .mdc-checkbox__background {\n  border-color: #6200ee;\n  /* @alternate */\n  border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));\n}\n@-webkit-keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE {\n  0% {\n    border-color: rgba(0, 0, 0, 0.54);\n    /* @alternate */\n    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n    background-color: transparent;\n  }\n  50% {\n    border-color: #6200ee;\n    /* @alternate */\n    border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));\n    background-color: #6200ee;\n    /* @alternate */\n    background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));\n  }\n}\n@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE {\n  0% {\n    border-color: rgba(0, 0, 0, 0.54);\n    /* @alternate */\n    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n    background-color: transparent;\n  }\n  50% {\n    border-color: #6200ee;\n    /* @alternate */\n    border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));\n    background-color: #6200ee;\n    /* @alternate */\n    background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));\n  }\n}\n@-webkit-keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE {\n  0%, 80% {\n    border-color: #6200ee;\n    /* @alternate */\n    border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));\n    background-color: #6200ee;\n    /* @alternate */\n    background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));\n  }\n  100% {\n    border-color: rgba(0, 0, 0, 0.54);\n    /* @alternate */\n    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n    background-color: transparent;\n  }\n}\n@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE {\n  0%, 80% {\n    border-color: #6200ee;\n    /* @alternate */\n    border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));\n    background-color: #6200ee;\n    /* @alternate */\n    background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));\n  }\n  100% {\n    border-color: rgba(0, 0, 0, 0.54);\n    /* @alternate */\n    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n    background-color: transparent;\n  }\n}\n.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,\n.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,\n.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  -webkit-animation-name: mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE;\n          animation-name: mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE;\n}\n.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,\n.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,\n.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  -webkit-animation-name: mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE;\n          animation-name: mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE;\n}\n\n/*# sourceMappingURL=mdc.data-table.css.map*/'}}]);