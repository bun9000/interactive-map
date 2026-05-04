<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style id="nuxt-ui-colors">
            @layer base {
                :root {
                    --ui-color-primary-50: var(--color-brand-50, );
                    --ui-color-primary-100: var(--color-brand-100, );
                    --ui-color-primary-200: var(--color-brand-200, );
                    --ui-color-primary-300: var(--color-brand-300, );
                    --ui-color-primary-400: var(--color-brand-400, );
                    --ui-color-primary-500: var(--color-brand-500, );
                    --ui-color-primary-600: var(--color-brand-600, );
                    --ui-color-primary-700: var(--color-brand-700, );
                    --ui-color-primary-800: var(--color-brand-800, );
                    --ui-color-primary-900: var(--color-brand-900, );
                    --ui-color-primary-950: var(--color-brand-950, );
                    --ui-color-secondary-50: var(--color-brand-secondary-50, );
                    --ui-color-secondary-100: var(--color-brand-secondary-100, );
                    --ui-color-secondary-200: var(--color-brand-secondary-200, );
                    --ui-color-secondary-300: var(--color-brand-secondary-300, );
                    --ui-color-secondary-400: var(--color-brand-secondary-400, );
                    --ui-color-secondary-500: var(--color-brand-secondary-500, );
                    --ui-color-secondary-600: var(--color-brand-secondary-600, );
                    --ui-color-secondary-700: var(--color-brand-secondary-700, );
                    --ui-color-secondary-800: var(--color-brand-secondary-800, );
                    --ui-color-secondary-900: var(--color-brand-secondary-900, );
                    --ui-color-secondary-950: var(--color-brand-secondary-950, );
                    --ui-color-success-50: var(--color-green-50, oklch(98.2% 0.018 155.826));
                    --ui-color-success-100: var(--color-green-100, oklch(96.2% 0.044 156.743));
                    --ui-color-success-200: var(--color-green-200, oklch(92.5% 0.084 155.995));
                    --ui-color-success-300: var(--color-green-300, oklch(87.1% 0.15 154.449));
                    --ui-color-success-400: var(--color-green-400, oklch(79.2% 0.209 151.711));
                    --ui-color-success-500: var(--color-green-500, oklch(72.3% 0.219 149.579));
                    --ui-color-success-600: var(--color-green-600, oklch(62.7% 0.194 149.214));
                    --ui-color-success-700: var(--color-green-700, oklch(52.7% 0.154 150.069));
                    --ui-color-success-800: var(--color-green-800, oklch(44.8% 0.119 151.328));
                    --ui-color-success-900: var(--color-green-900, oklch(39.3% 0.095 152.535));
                    --ui-color-success-950: var(--color-green-950, oklch(26.6% 0.065 152.934));
                    --ui-color-info-50: var(--color-blue-50, oklch(97% 0.014 254.604));
                    --ui-color-info-100: var(--color-blue-100, oklch(93.2% 0.032 255.585));
                    --ui-color-info-200: var(--color-blue-200, oklch(88.2% 0.059 254.128));
                    --ui-color-info-300: var(--color-blue-300, oklch(80.9% 0.105 251.813));
                    --ui-color-info-400: var(--color-blue-400, oklch(70.7% 0.165 254.624));
                    --ui-color-info-500: var(--color-blue-500, oklch(62.3% 0.214 259.815));
                    --ui-color-info-600: var(--color-blue-600, oklch(54.6% 0.245 262.881));
                    --ui-color-info-700: var(--color-blue-700, oklch(48.8% 0.243 264.376));
                    --ui-color-info-800: var(--color-blue-800, oklch(42.4% 0.199 265.638));
                    --ui-color-info-900: var(--color-blue-900, oklch(37.9% 0.146 265.522));
                    --ui-color-info-950: var(--color-blue-950, oklch(28.2% 0.091 267.935));
                    --ui-color-warning-50: var(--color-yellow-50, oklch(98.7% 0.026 102.212));
                    --ui-color-warning-100: var(--color-yellow-100, oklch(97.3% 0.071 103.193));
                    --ui-color-warning-200: var(--color-yellow-200, oklch(94.5% 0.129 101.54));
                    --ui-color-warning-300: var(--color-yellow-300, oklch(90.5% 0.182 98.111));
                    --ui-color-warning-400: var(--color-yellow-400, oklch(85.2% 0.199 91.936));
                    --ui-color-warning-500: var(--color-yellow-500, oklch(79.5% 0.184 86.047));
                    --ui-color-warning-600: var(--color-yellow-600, oklch(68.1% 0.162 75.834));
                    --ui-color-warning-700: var(--color-yellow-700, oklch(55.4% 0.135 66.442));
                    --ui-color-warning-800: var(--color-yellow-800, oklch(47.6% 0.114 61.907));
                    --ui-color-warning-900: var(--color-yellow-900, oklch(42.1% 0.095 57.708));
                    --ui-color-warning-950: var(--color-yellow-950, oklch(28.6% 0.066 53.813));
                    --ui-color-error-50: var(--color-red-50, oklch(97.1% 0.013 17.38));
                    --ui-color-error-100: var(--color-red-100, oklch(93.6% 0.032 17.717));
                    --ui-color-error-200: var(--color-red-200, oklch(88.5% 0.062 18.334));
                    --ui-color-error-300: var(--color-red-300, oklch(80.8% 0.114 19.571));
                    --ui-color-error-400: var(--color-red-400, oklch(70.4% 0.191 22.216));
                    --ui-color-error-500: var(--color-red-500, oklch(63.7% 0.237 25.331));
                    --ui-color-error-600: var(--color-red-600, oklch(57.7% 0.245 27.325));
                    --ui-color-error-700: var(--color-red-700, oklch(50.5% 0.213 27.518));
                    --ui-color-error-800: var(--color-red-800, oklch(44.4% 0.177 26.899));
                    --ui-color-error-900: var(--color-red-900, oklch(39.6% 0.141 25.723));
                    --ui-color-error-950: var(--color-red-950, oklch(25.8% 0.092 26.042));
                    --ui-color-neutral-50: var(--color-slate-50, oklch(98.4% 0.003 247.858));
                    --ui-color-neutral-100: var(--color-slate-100, oklch(96.8% 0.007 247.896));
                    --ui-color-neutral-200: var(--color-slate-200, oklch(92.9% 0.013 255.508));
                    --ui-color-neutral-300: var(--color-slate-300, oklch(86.9% 0.022 252.894));
                    --ui-color-neutral-400: var(--color-slate-400, oklch(70.4% 0.04 256.788));
                    --ui-color-neutral-500: var(--color-slate-500, oklch(55.4% 0.046 257.417));
                    --ui-color-neutral-600: var(--color-slate-600, oklch(44.6% 0.043 257.281));
                    --ui-color-neutral-700: var(--color-slate-700, oklch(37.2% 0.044 257.287));
                    --ui-color-neutral-800: var(--color-slate-800, oklch(27.9% 0.041 260.031));
                    --ui-color-neutral-900: var(--color-slate-900, oklch(20.8% 0.042 265.755));
                    --ui-color-neutral-950: var(--color-slate-950, oklch(12.9% 0.042 264.695));
                    --ui-color-discord-50: var(--color-discord-50, );
                    --ui-color-discord-100: var(--color-discord-100, );
                    --ui-color-discord-200: var(--color-discord-200, );
                    --ui-color-discord-300: var(--color-discord-300, );
                    --ui-color-discord-400: var(--color-discord-400, );
                    --ui-color-discord-500: var(--color-discord-500, );
                    --ui-color-discord-600: var(--color-discord-600, );
                    --ui-color-discord-700: var(--color-discord-700, );
                    --ui-color-discord-800: var(--color-discord-800, );
                    --ui-color-discord-900: var(--color-discord-900, );
                    --ui-color-discord-950: var(--color-discord-950, );
                }

                :root, .light {
                    --ui-primary: var(--ui-color-primary-500);
                    --ui-secondary: var(--ui-color-secondary-500);
                    --ui-success: var(--ui-color-success-500);
                    --ui-info: var(--ui-color-info-500);
                    --ui-warning: var(--ui-color-warning-500);
                    --ui-error: var(--ui-color-error-500);
                    --ui-discord: var(--ui-color-discord-500);
                }

                .dark {
                    --ui-primary: var(--ui-color-primary-400);
                    --ui-secondary: var(--ui-color-secondary-400);
                    --ui-success: var(--ui-color-success-400);
                    --ui-info: var(--ui-color-info-400);
                    --ui-warning: var(--ui-color-warning-400);
                    --ui-error: var(--ui-color-error-400);
                    --ui-discord: var(--ui-color-discord-400);
                }
            }
        </style>
        <script type="importmap">
            {
                "imports": {
                    "#entry": "/_nuxt/CFLLGU6J.js"
                }
            }</script>
        <title>Interactive Map - Chase Roleplay</title>
        <style>
            html, body {
                background-color: #0f0f1e !important;
                margin: 0;
                padding: 0;
            }
        </style>
        <style>
            main[data-v-eacd3eb1] {
                min-height: 100vh
            }
        </style>
        <style>
            @layer properties {
                @supports ((-webkit-hyphens: none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))) {
                    [data-v-a78d825b],[data-v-a78d825b]::backdrop,[data-v-a78d825b]:after,[data-v-a78d825b]:before {
                        --tw-backdrop-blur:initial;
                        --tw-backdrop-brightness: initial;
                        --tw-backdrop-contrast: initial;
                        --tw-backdrop-grayscale: initial;
                        --tw-backdrop-hue-rotate: initial;
                        --tw-backdrop-invert: initial;
                        --tw-backdrop-opacity: initial;
                        --tw-backdrop-saturate: initial;
                        --tw-backdrop-sepia: initial;
                        --tw-border-style: solid;
                        --tw-shadow: 0 0 #0000;
                        --tw-shadow-color: initial;
                        --tw-shadow-alpha: 100%;
                        --tw-inset-shadow: 0 0 #0000;
                        --tw-inset-shadow-color: initial;
                        --tw-inset-shadow-alpha: 100%;
                        --tw-ring-color: initial;
                        --tw-ring-shadow: 0 0 #0000;
                        --tw-inset-ring-color: initial;
                        --tw-inset-ring-shadow: 0 0 #0000;
                        --tw-ring-inset: initial;
                        --tw-ring-offset-width: 0px;
                        --tw-ring-offset-color: #fff;
                        --tw-ring-offset-shadow: 0 0 #0000;
                        --tw-tracking: initial;
                        --tw-font-weight: initial;
                        --tw-duration: initial;
                        --tw-scale-x: 1;
                        --tw-scale-y: 1;
                        --tw-scale-z: 1;
                        --tw-rotate-x: initial;
                        --tw-rotate-y: initial;
                        --tw-rotate-z: initial;
                        --tw-skew-x: initial;
                        --tw-skew-y: initial
                    }
                }
            }

            .chase-map[data-v-a78d825b] {
                height: 90vh;
                width: 100%
            }

            [data-v-a78d825b] .ol-control {
                -webkit-backdrop-filter: blur(10px);
                background: #0f0f1ee6!important;
                border: 1px solid #ffffff1a!important;
                border-radius: 8px!important
            }

            [data-v-a78d825b] .ol-control button {
                background-color: #ffffff1a!important;
                border-radius: 4px!important;
                color: #ffffffe6!important;
                transition: all .3s!important
            }

            :is([data-v-a78d825b] .ol-control button:hover,[data-v-a78d825b] .ol-control button:focus) {
                background-color: #a855f74d!important;
                box-shadow: 0 4px 12px #a855f74d!important;
                color: #fff!important
            }

            [data-v-a78d825b] .ol-zoom {
                left: 16px!important;
                top: 16px!important
            }

            [data-v-a78d825b] .ol-attribution {
                -webkit-backdrop-filter: blur(10px);
                background: #0f0f1eb3!important;
                border: 1px solid #ffffff1a!important;
                border-radius: 8px!important;
                bottom: 8px!important;
                color: #ffffffb3!important;
                font-size: 11px!important;
                padding: 4px 8px!important;
                right: 8px!important
            }

            [data-v-a78d825b] .ol-attribution a {
                color: #a855f7cc!important;
                text-decoration: none!important
            }

            [data-v-a78d825b] .ol-attribution a:hover {
                color: #a855f7!important
            }

            .chase-map-container[data-v-a78d825b]::-webkit-scrollbar {
                height: 8px;
                width: 8px
            }

            .chase-map-container[data-v-a78d825b]::-webkit-scrollbar-track {
                background: #ffffff0d;
                border-radius: 4px
            }

            .chase-map-container[data-v-a78d825b]::-webkit-scrollbar-thumb {
                background: #a855f780;
                border-radius: 4px
            }

            .chase-map-container[data-v-a78d825b]::-webkit-scrollbar-thumb:hover {
                background: #a855f7b3
            }

            @media (max-width: 640px) {
                .chase-map[data-v-a78d825b] {
                    height:calc(100vh - 280px);
                    min-height: 500px
                }
            }

            .zoom-level-display[data-v-a78d825b] {
                align-items: center;
                gap: calc(var(--spacing,.25rem)*2);
                left: calc(var(--spacing,.25rem)*4);
                padding-block:calc(var(--spacing,.25rem)*2);padding-inline: calc(var(--spacing,.25rem)*3);
                top: calc(var(--spacing,.25rem)*4);
                z-index: 1000;
                --tw-backdrop-blur: blur(var(--blur-md,12px));
                -webkit-backdrop-filter: var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);
                backdrop-filter: var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);
                border-radius: var(--radius-lg,.5rem);
                border-style: var(--tw-border-style);
                --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);
                background-color: #0f0f1ee6;
                border-color: #ffffff1a;
                border-width: 1px;
                box-shadow: var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);
                display: flex;
                position: absolute
            }

            .zoom-label[data-v-a78d825b] {
                font-size: var(--text-xs,.75rem);
                line-height: var(--tw-leading,var(--text-xs--line-height,1.33333));
                --tw-tracking: var(--tracking-wide,.025em);
                color: #ffffffb3;
                letter-spacing: var(--tracking-wide,.025em);
                text-transform: uppercase
            }

            .dev-panel[data-v-a78d825b] {
                right: calc(var(--spacing,.25rem)*4);
                top: calc(var(--spacing,.25rem)*4);
                z-index: 1000;
                --tw-backdrop-blur: blur(var(--blur-md,12px));
                -webkit-backdrop-filter: var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);
                backdrop-filter: var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);
                border-radius: var(--radius-xl,.75rem);
                border-style: var(--tw-border-style);
                max-width: 92vw;
                padding: calc(var(--spacing,.25rem)*4);
                --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);
                background-color: #0f0f1eeb;
                border-color: #ffffff1a;
                border-width: 1px;
                box-shadow: var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);
                position: absolute;
                width: 360px
            }

            .dev-panel--sprite-mode[data-v-a78d825b] {
                width: 720px
            }

            .dev-panel__title[data-v-a78d825b] {
                font-size: var(--text-xs,.75rem);
                line-height: var(--tw-leading,var(--text-xs--line-height,1.33333));
                --tw-tracking: var(--tracking-wide,.025em);
                color: #ffffffbf;
                letter-spacing: var(--tracking-wide,.025em);
                text-transform: uppercase
            }

            .dev-panel__modes[data-v-a78d825b],.dev-panel__title[data-v-a78d825b] {
                margin-bottom: calc(var(--spacing,.25rem)*3)
            }

            .dev-panel__modes[data-v-a78d825b] {
                display: flex;
                gap: calc(var(--spacing,.25rem)*2)
            }

            .dev-panel__modeBtn[data-v-a78d825b] {
                background-color: #ffffff0f;
                border-color: #ffffff1f;
                border-radius: var(--radius-lg,.5rem);
                border-style: var(--tw-border-style);
                border-width: 1px;
                color: #ffffffd9;
                font-size: var(--text-xs,.75rem);
                line-height: var(--tw-leading,var(--text-xs--line-height,1.33333));
                padding-block:calc(var(--spacing,.25rem)*2);padding-inline: calc(var(--spacing,.25rem)*3);
                transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
                transition-property: color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;
                transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)))
            }

            .dev-panel__modeBtn--active[data-v-a78d825b] {
                background-color: #a855f738;
                border-color: #a855f773;
                color: var(--color-white,#fff)
            }

            .dev-panel__section[data-v-a78d825b] {
                display: grid;
                gap: calc(var(--spacing,.25rem)*3)
            }

            .dev-panel__hint[data-v-a78d825b] {
                color: #ffffffa6
            }

            .dev-panel__btn[data-v-a78d825b],.dev-panel__hint[data-v-a78d825b] {
                font-size: var(--text-xs,.75rem);
                line-height: var(--tw-leading,var(--text-xs--line-height,1.33333))
            }

            .dev-panel__btn[data-v-a78d825b] {
                background-color: #ffffff14;
                border-color: #ffffff1f;
                border-radius: var(--radius-lg,.5rem);
                border-style: var(--tw-border-style);
                border-width: 1px;
                color: #ffffffe6;
                padding-block:calc(var(--spacing,.25rem)*2);padding-inline: calc(var(--spacing,.25rem)*3);
                transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
                transition-property: color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;
                transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)))
            }

            .dev-panel__btn[data-v-a78d825b]:hover:not(:disabled) {
                background-color: #a855f738;
                border-color: #a855f766
            }

            .dev-panel__btn[data-v-a78d825b]:disabled {
                cursor: not-allowed;
                opacity: .5
            }

            .dev-panel__form[data-v-a78d825b] {
                display: grid;
                gap: calc(var(--spacing,.25rem)*2)
            }

            .dev-panel__label[data-v-a78d825b] {
                color: #ffffffb3;
                display: grid;
                gap: calc(var(--spacing,.25rem)*1)
            }

            .dev-panel__input[data-v-a78d825b],.dev-panel__label[data-v-a78d825b] {
                font-size: var(--text-xs,.75rem);
                line-height: var(--tw-leading,var(--text-xs--line-height,1.33333))
            }

            .dev-panel__input[data-v-a78d825b] {
                background-color: #0f0f1ee6;
                border-color: #ffffff1f;
                border-radius: var(--radius-lg,.5rem);
                border-style: var(--tw-border-style);
                border-width: 1px;
                color: #ffffffe6;
                padding-block:calc(var(--spacing,.25rem)*2);padding-inline: calc(var(--spacing,.25rem)*3);
                width: 100%
            }

            .dev-panel__error[data-v-a78d825b] {
                color: var(--color-red-300,oklch(80.8% .114 19.571));
                font-size: var(--text-xs,.75rem);
                line-height: var(--tw-leading,var(--text-xs--line-height,1.33333))
            }

            .dev-panel__snippet[data-v-a78d825b] {
                background-color: #0000002e;
                border-color: #ffffff1f;
                border-radius: var(--radius-xl,.75rem);
                border-style: var(--tw-border-style);
                border-width: 1px;
                overflow: hidden
            }

            .dev-panel__snippetHeader[data-v-a78d825b] {
                align-items: center;
                border-bottom: 1px var(--tw-border-style);
                border-color: #ffffff1a;
                display: flex;
                gap: calc(var(--spacing,.25rem)*2);
                justify-content: space-between;
                padding-block:calc(var(--spacing,.25rem)*2);padding-inline: calc(var(--spacing,.25rem)*3)
            }

            .dev-panel__snippetTitle[data-v-a78d825b] {
                --tw-tracking: var(--tracking-wide,.025em);
                color: #ffffffbf;
                letter-spacing: var(--tracking-wide,.025em);
                text-transform: uppercase
            }

            .dev-panel__snippetBody[data-v-a78d825b],.dev-panel__snippetTitle[data-v-a78d825b] {
                font-size: var(--text-xs,.75rem);
                line-height: var(--tw-leading,var(--text-xs--line-height,1.33333))
            }

            .dev-panel__snippetBody[data-v-a78d825b] {
                color: #ffffffe6;
                font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
                padding: calc(var(--spacing,.25rem)*3);
                white-space: pre-wrap;
                word-break: break-word
            }

            .dev-panel__spriteHeader[data-v-a78d825b] {
                display: grid;
                gap: calc(var(--spacing,.25rem)*3)
            }

            .dev-panel__clearBtn[data-v-a78d825b] {
                width: 100%
            }

            .dev-panel__blipsInfo[data-v-a78d825b] {
                align-items: center;
                background-color: #a855f71a;
                border-color: #a855f733;
                border-radius: var(--radius-lg,.5rem);
                border-style: var(--tw-border-style);
                border-width: 1px;
                display: flex;
                gap: calc(var(--spacing,.25rem)*2);
                justify-content: space-between;
                padding-block:calc(var(--spacing,.25rem)*2);padding-inline: calc(var(--spacing,.25rem)*3)
            }

            .dev-panel__blipsCount[data-v-a78d825b] {
                color: #ffffffd9;
                font-size: var(--text-xs,.75rem);
                line-height: var(--tw-leading,var(--text-xs--line-height,1.33333))
            }

            .zoom-value[data-v-a78d825b] {
                font-family: var(--font-mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);
                --tw-font-weight: var(--font-weight-bold,700);
                background-color: #a855f733;
                border-radius: .25rem;
                font-weight: var(--font-weight-bold,700);
                min-width: 60px;
                padding-block:calc(var(--spacing,.25rem)*1);padding-inline: calc(var(--spacing,.25rem)*2);
                text-align: center
            }

            .dev-tool-toggle[data-v-a78d825b],.zoom-value[data-v-a78d825b] {
                color: var(--color-white,#fff);
                font-size: var(--text-sm,.875rem);
                line-height: var(--tw-leading,var(--text-sm--line-height,1.42857))
            }

            .dev-tool-toggle[data-v-a78d825b] {
                padding-block:calc(var(--spacing,.25rem)*2);padding-inline: calc(var(--spacing,.25rem)*4);
                right: calc(var(--spacing,.25rem)*4);
                top: calc(var(--spacing,.25rem)*4);
                z-index: 1000;
                --tw-backdrop-blur: blur(var(--blur-md,12px));
                -webkit-backdrop-filter: var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);
                backdrop-filter: var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);
                border-radius: var(--radius-lg,.5rem);
                border-style: var(--tw-border-style);
                --tw-font-weight: var(--font-weight-medium,500);
                font-weight: var(--font-weight-medium,500);
                transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
                transition-property: all;
                transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));
                --tw-duration: .3s;
                align-items: center;
                background-color: #0f0f1ee6;
                border-color: #ffffff1a;
                border-width: 1px;
                display: flex;
                position: absolute;
                transition-duration: .3s
            }

            @media (hover: hover) {
                .dev-tool-toggle[data-v-a78d825b]:hover {
                    background-color:#a855f733;
                    border-color: #a855f780
                }
            }

            .dev-tool-toggle[data-v-a78d825b] {
                --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)
            }

            .dev-tool-toggle[data-v-a78d825b],.dev-tool-toggle.dev-mode-active[data-v-a78d825b] {
                box-shadow: var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)
            }

            .dev-tool-toggle.dev-mode-active[data-v-a78d825b] {
                --tw-shadow: 0 0 20px var(--tw-shadow-color,#a855f766);
                background-color: #a855f74d;
                border-color: #a855f799
            }

            .dev-tool-toggle[data-v-a78d825b]:active {
                --tw-scale-x: 95%;
                --tw-scale-y: 95%;
                --tw-scale-z: 95%;
                scale: var(--tw-scale-x)var(--tw-scale-y);
                transform: var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)
            }

            .coord-overlay[data-v-a78d825b] {
                pointer-events: none
            }

            .coord-display[data-v-a78d825b] {
                align-items: center;
                gap: calc(var(--spacing,.25rem)*2);
                padding-block:calc(var(--spacing,.25rem)*2);padding-inline: calc(var(--spacing,.25rem)*3);
                --tw-backdrop-blur: blur(var(--blur-md,12px));
                -webkit-backdrop-filter: var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);
                backdrop-filter: var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);
                border-radius: var(--radius-lg,.5rem);
                border-style: var(--tw-border-style);
                --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);
                background-color: #0f0f1ef2;
                border-color: #a855f780;
                border-width: 1px;
                box-shadow: var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);
                display: flex;
                min-width: 180px
            }

            .coord-label[data-v-a78d825b] {
                font-size: var(--text-xs,.75rem);
                line-height: var(--tw-leading,var(--text-xs--line-height,1.33333));
                --tw-tracking: var(--tracking-wide,.025em);
                color: #ffffffb3;
                letter-spacing: var(--tracking-wide,.025em);
                text-transform: uppercase
            }

            .coord-value[data-v-a78d825b] {
                font-family: var(--font-mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);
                font-size: var(--text-sm,.875rem);
                line-height: var(--tw-leading,var(--text-sm--line-height,1.42857));
                --tw-font-weight: var(--font-weight-bold,700);
                background-color: #a855f733;
                border-radius: .25rem;
                color: var(--color-white,#fff);
                font-weight: var(--font-weight-bold,700);
                padding-block:calc(var(--spacing,.25rem)*1);padding-inline: calc(var(--spacing,.25rem)*2)
            }

            .coord-copy-btn[data-v-a78d825b] {
                color: #ffffffb3;
                margin-left: auto;
                padding: calc(var(--spacing,.25rem)*1.5)
            }

            @media (hover: hover) {
                .coord-copy-btn[data-v-a78d825b]:hover {
                    color:var(--color-white,#fff)
                }
            }

            .coord-copy-btn[data-v-a78d825b] {
                transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
                transition-property: color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;
                transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));
                --tw-duration: .2s;
                border-radius: .25rem;
                transition-duration: .2s
            }

            @media (hover: hover) {
                .coord-copy-btn[data-v-a78d825b]:hover {
                    background-color:#a855f733
                }
            }

            .coord-copy-btn[data-v-a78d825b] {
                pointer-events: all
            }

            .coord-copy-btn[data-v-a78d825b]:active {
                --tw-scale-x: 90%;
                --tw-scale-y: 90%;
                --tw-scale-z: 90%;
                scale: var(--tw-scale-x)var(--tw-scale-y);
                transform: var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)
            }

            .tooltip-overlay[data-v-a78d825b] {
                padding-block:calc(var(--spacing,.25rem)*2);padding-inline: calc(var(--spacing,.25rem)*3);
                --tw-backdrop-blur: blur(var(--blur-md,12px));
                -webkit-backdrop-filter: var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);
                backdrop-filter: var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);
                border-radius: var(--radius-lg,.5rem);
                border-style: var(--tw-border-style);
                --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);
                box-shadow: var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);
                font-size: var(--text-sm,.875rem);
                line-height: var(--tw-leading,var(--text-sm--line-height,1.42857));
                --tw-font-weight: var(--font-weight-medium,500);
                background-color: #0f0f1ef2;
                border-color: #a855f780;
                border-width: 1px;
                color: var(--color-white,#fff);
                font-weight: var(--font-weight-medium,500);
                pointer-events: none;
                white-space: nowrap;
                z-index: 2000
            }

            @media (max-width: 640px) {
                .zoom-level-display[data-v-a78d825b] {
                    left:calc(var(--spacing,.25rem)*2);
                    padding-block:calc(var(--spacing,.25rem)*1.5);padding-inline: calc(var(--spacing,.25rem)*2);
                    top: calc(var(--spacing,.25rem)*2)
                }

                .zoom-label[data-v-a78d825b] {
                    font-size: 10px
                }

                .zoom-value[data-v-a78d825b] {
                    min-width: 50px;
                    padding-block:calc(var(--spacing,.25rem)*.5);padding-inline: calc(var(--spacing,.25rem)*1.5)
                }

                .dev-tool-toggle[data-v-a78d825b],.zoom-value[data-v-a78d825b] {
                    font-size: var(--text-xs,.75rem);
                    line-height: var(--tw-leading,var(--text-xs--line-height,1.33333))
                }

                .dev-tool-toggle[data-v-a78d825b] {
                    padding-block:calc(var(--spacing,.25rem)*1.5);padding-inline: calc(var(--spacing,.25rem)*3);
                    right: calc(var(--spacing,.25rem)*2);
                    top: calc(var(--spacing,.25rem)*2)
                }

                .dev-tool-toggle span[data-v-a78d825b] {
                    display: none
                }
            }

            @property --tw-backdrop-blur {
                syntax: "*";
                inherits: false
            }

            @property --tw-backdrop-brightness {
                syntax: "*";
                inherits: false
            }

            @property --tw-backdrop-contrast {
                syntax: "*";
                inherits: false
            }

            @property --tw-backdrop-grayscale {
                syntax: "*";
                inherits: false
            }

            @property --tw-backdrop-hue-rotate {
                syntax: "*";
                inherits: false
            }

            @property --tw-backdrop-invert {
                syntax: "*";
                inherits: false
            }

            @property --tw-backdrop-opacity {
                syntax: "*";
                inherits: false
            }

            @property --tw-backdrop-saturate {
                syntax: "*";
                inherits: false
            }

            @property --tw-backdrop-sepia {
                syntax: "*";
                inherits: false
            }

            @property --tw-border-style {
                syntax: "*";
                inherits: false;
                initial-value: solid
            }

            @property --tw-shadow {
                syntax: "*";
                inherits: false;
                initial-value: 0 0 #0000
            }

            @property --tw-shadow-color {
                syntax: "*";
                inherits: false
            }

            @property --tw-shadow-alpha {
                syntax: "<percentage>";
                inherits: false;
                initial-value: 100%
            }

            @property --tw-inset-shadow {
                syntax: "*";
                inherits: false;
                initial-value: 0 0 #0000
            }

            @property --tw-inset-shadow-color {
                syntax: "*";
                inherits: false
            }

            @property --tw-inset-shadow-alpha {
                syntax: "<percentage>";
                inherits: false;
                initial-value: 100%
            }

            @property --tw-ring-color {
                syntax: "*";
                inherits: false
            }

            @property --tw-ring-shadow {
                syntax: "*";
                inherits: false;
                initial-value: 0 0 #0000
            }

            @property --tw-inset-ring-color {
                syntax: "*";
                inherits: false
            }

            @property --tw-inset-ring-shadow {
                syntax: "*";
                inherits: false;
                initial-value: 0 0 #0000
            }

            @property --tw-ring-inset {
                syntax: "*";
                inherits: false
            }

            @property --tw-ring-offset-width {
                syntax: "<length>";
                inherits: false;
                initial-value: 0
            }

            @property --tw-ring-offset-color {
                syntax: "*";
                inherits: false;
                initial-value: #fff
            }

            @property --tw-ring-offset-shadow {
                syntax: "*";
                inherits: false;
                initial-value: 0 0 #0000
            }

            @property --tw-tracking {
                syntax: "*";
                inherits: false
            }

            @property --tw-font-weight {
                syntax: "*";
                inherits: false
            }

            @property --tw-duration {
                syntax: "*";
                inherits: false
            }

            @property --tw-scale-x {
                syntax: "*";
                inherits: false;
                initial-value: 1
            }

            @property --tw-scale-y {
                syntax: "*";
                inherits: false;
                initial-value: 1
            }

            @property --tw-scale-z {
                syntax: "*";
                inherits: false;
                initial-value: 1
            }

            @property --tw-rotate-x {
                syntax: "*";
                inherits: false
            }

            @property --tw-rotate-y {
                syntax: "*";
                inherits: false
            }

            @property --tw-rotate-z {
                syntax: "*";
                inherits: false
            }

            @property --tw-skew-x {
                syntax: "*";
                inherits: false
            }

            @property --tw-skew-y {
                syntax: "*";
                inherits: false
            }
        </style>
        <link rel="stylesheet" href="/_nuxt/entry.BgFpe7HF.css" crossorigin>
        <style>
            @layer components {
                :where(.i-heroicons\: arrow-left) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'/%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: arrow-right-on-rectangle) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'/%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: bars-3) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: chevron-right) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m8.25 4.5l7.5 7.5l-7.5 7.5'/%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: clipboard-document-list) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48 48 0 0 0-1.123-.08m-5.801 0q-.099.316-.1.664c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75a2.3 2.3 0 0 0-.1-.664m-5.8 0A2.25 2.25 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0q-.563.035-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125zM6.75 12h.008v.008H6.75zm0 3h.008v.008H6.75zm0 3h.008v.008H6.75z'/%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: cog-6-tooth) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'%3E%3Cpath d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87q.11.06.22.127c.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a8 8 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a7 7 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a7 7 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7 7 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124q.108-.066.22-.128c.332-.183.582-.495.644-.869z'/%3E%3Cpath d='M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0'/%3E%3C/g%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: document-text) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9'/%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: home) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m2.25 12l8.955-8.955a1.124 1.124 0 0 1 1.59 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'/%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: map) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 6.75V15m6-6v8.25m.503 3.499l4.875-2.438c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934a1.12 1.12 0 0 1-1.006 0L9.503 3.252a1.13 1.13 0 0 0-1.006 0L3.622 5.689A1.13 1.13 0 0 0 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934a1.12 1.12 0 0 1 1.006 0l4.994 2.497c.317.158.69.158 1.006 0'/%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: queue-list) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75'/%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: user) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M15.75 6a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.9 17.9 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632'/%3E%3C/svg%3E")
                }

                :where(.i-heroicons\: x-mark) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 18L18 6M6 6l12 12'/%3E%3C/svg%3E")
                }

                :where(.i-ic\: baseline-discord) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='black' d='M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12'/%3E%3C/svg%3E")
                }

                :where(.i-material-symbols\: contract) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='black' d='M6 22q-1.25 0-2.125-.875T3 19v-3h3V2h15v17q0 1.25-.875 2.125T18 22zm12-2q.425 0 .713-.288T19 19V4H8v12h9v3q0 .425.288.713T18 20M9 9V7h9v2zm0 3v-2h9v2z'/%3E%3C/svg%3E")
                }

                :where(.i-material-symbols\: shopping-cart) {
                    display:inline-block;
                    width: 1em;
                    height: 1em;
                    background-color: currentColor;
                    -webkit-mask-image: var(--svg);
                    mask-image: var(--svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='black' d='M5.588 21.413Q5 20.825 5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22t-1.412-.587m10 0Q15 20.825 15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22t-1.412-.587M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25z'/%3E%3C/svg%3E")
                }
            }
        </style>
        <link rel="modulepreload" as="script" crossorigin href="/_nuxt/CFLLGU6J.js">
        <link rel="modulepreload" as="script" crossorigin href="/_nuxt/D5xIslL1.js">
        <link rel="modulepreload" as="script" crossorigin href="/_nuxt/DpYoz6y-.js">
        <link rel="modulepreload" as="script" crossorigin href="/_nuxt/C2RIuNqr.js">
        <link rel="modulepreload" as="script" crossorigin href="/_nuxt/BQosnK4h.js">
        <link rel="preload" as="fetch" fetchpriority="low" crossorigin="anonymous" href="/_nuxt/builds/meta/0f37bbbb-80e7-40b7-9c10-1a373330c955.json">
        <link rel="prefetch" as="script" crossorigin href="/_nuxt/ClSfkCz2.js">
        <link rel="prefetch" as="script" crossorigin href="/_nuxt/Ci6LExF-.js">
        <link rel="prefetch" as="script" crossorigin href="/_nuxt/DHrtAvbx.js">
        <link rel="prefetch" as="script" crossorigin href="/_nuxt/CtGgPyEp.js">
        <link rel="prefetch" as="script" crossorigin href="/_nuxt/B8lmdNpc.js">
        <link rel="prefetch" as="script" crossorigin href="/_nuxt/BzLCLO6P.js">
        <link rel="prefetch" as="script" crossorigin href="/_nuxt/DO6egWYr.js">
        <link rel="prefetch" as="script" crossorigin href="/_nuxt/DO74kO_r.js">
        <link rel="prefetch" as="script" crossorigin href="/_nuxt/DucM7CW1.js">
        <link rel="prefetch" as="script" crossorigin href="/_nuxt/DNpcmPZc.js">
        <meta name="theme-color" content="#0f0f1e">
        <meta name="msapplication-TileColor" content="#0f0f1e">
        <meta name="msapplication-config" content="/icons/browserconfig.xml">
        <meta name="format-detection" content="telephone=no">
        <meta name="google-site-verification" content="G-cQ05HbFqgW_nKYfkUzUmz_6M6xUqx45Yl-L1CCyFI">
        <meta name="keywords" content="Grand Theft Auto, Grand Theft Auto V, roleplay, top roleplay server, best roleplay server, GTA V roleplay, GTA roleplay server, GTA V RP, FiveM, FiveM server, roleplay server, Chase Roleplay, allowlist, applications, GTA roleplay community, Chase RP, ChaseRP, top GTA RP server, best GTA RP server, Chase RP applications, Chase Roleplay applications">
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico">
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg">
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon-180x180.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/favicon-152x152.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/favicon-144x144.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/favicon-120x120.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/favicon-114x114.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/favicon-76x76.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/favicon-72x72.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/favicon-60x60.png">
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/favicon-57x57.png">
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "GameServer",
                "name": "Chase Roleplay",
                "url": "https://chaseroleplay.com/",
                "description": "Join Chase Roleplay — a GTA V RP server built on creativity, fairness and immersion. Allowlist applications are open now. Let's build the best place for roleplay together.",
                "image": "https://cdn.chaserp.dev/www/chase_full.svg",
                "game": {
                    "@type": "VideoGame",
                    "name": "Grand Theft Auto V",
                    "url": "https://www.rockstargames.com/gta-v"
                },
                "sameAs": [
                    "https://discord.gg/ChaseRP"
                ],
                "potentialAction": {
                    "@type": "ApplyAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://chaseroleplay.com",
                        "actionPlatform": [
                            "Web"
                        ]
                    }
                }
            }</script>
        <script type="module" src="/_nuxt/CFLLGU6J.js" crossorigin></script>
        <script>
            "use strict";
            ( () => {
                const t = window
                  , e = document.documentElement
                  , c = ["dark", "light"]
                  , n = getStorageValue("localStorage", "nuxt-color-mode") || "dark";
                let i = n === "system" ? u() : n;
                const r = e.getAttribute("data-color-mode-forced");
                r && (i = r),
                l(i),
                t["__NUXT_COLOR_MODE__"] = {
                    preference: n,
                    value: i,
                    getColorScheme: u,
                    addColorScheme: l,
                    removeColorScheme: d
                };
                function l(o) {
                    const s = "" + o + ""
                      , a = "";
                    e.classList ? e.classList.add(s) : e.className += " " + s,
                    a && e.setAttribute("data-" + a, o)
                }
                function d(o) {
                    const s = "" + o + ""
                      , a = "";
                    e.classList ? e.classList.remove(s) : e.className = e.className.replace(new RegExp(s,"g"), ""),
                    a && e.removeAttribute("data-" + a)
                }
                function f(o) {
                    return t.matchMedia("(prefers-color-scheme" + o + ")")
                }
                function u() {
                    if (t.matchMedia && f("").media !== "not all") {
                        for (const o of c)
                            if (f(":" + o).matches)
                                return o
                    }
                    return "dark"
                }
            }
            )();
            function getStorageValue(t, e) {
                switch (t) {
                case "localStorage":
                    return window.localStorage.getItem(e);
                case "sessionStorage":
                    return window.sessionStorage.getItem(e);
                case "cookie":
                    return getCookie(e);
                default:
                    return null
                }
            }
            function getCookie(t) {
                const c = ("; " + window.document.cookie).split("; " + t + "=");
                if (c.length === 2)
                    return c.pop()?.split(";").shift()
            }
        </script>
    </head>
    <body>
        <div id="__nuxt" class="isolate">
            <main data-v-eacd3eb1>
                <!--[-->
                <aside class="cookieControl">
                    <!---->
                    <button aria-label="Cookie control" class="cookieControl__ControlButton" data-testid="nuxt-cookie-control-control-button" type="button">
                        <!--[-->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 00-57.79 57.81l-35.1 68.88a132.645 132.645 0 00-12.82 80.95l12.08 76.27a132.521 132.521 0 0037.16 72.96l54.77 54.76a132.036 132.036 0 0072.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0057.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                        </svg>
                        <!--]-->
                    </button>
                    <!---->
                </aside>
                <!--]-->
                <!--[-->
                <!--[-->
                <!--[-->
                <!--[-->
                <!--[-->
                <div class="nuxt-loading-indicator" style="position:fixed;top:0;right:0;left:0;pointer-events:none;width:auto;height:3px;opacity:0;background:repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%);background-size:0% auto;transform:scaleX(0%);transform-origin:left;transition:transform 0.1s, height 0.4s, opacity 0.4s;z-index:999999;" data-v-eacd3eb1></div>
                <div class="min-h-screen bg-slate-900">
                    <div class="fixed inset-y-0 left-0 z-50 w-64 bg-slate-950 shadow-lg transform transition-transform duration-200 ease-in-out border-r border-slate-700 -translate-x-full">
                        <div class="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-slate-700 pb-[1px]">
                            <div class="flex items-center space-x-2 min-w-0">
                                <img src="https://cdn.chaserp.dev/www/favicon.svg" alt="Chase Roleplay Logo" class="w-8 sm:w-10 h-8 sm:h-10 rounded-lg flex-shrink-0">
                                <div class="min-w-0">
                                    <h1 class="text-base sm:text-lg font-semibold text-white truncate">Chase Roleplay</h1>
                                    <p class="text-xs text-slate-400 truncate">Player Dashboard</p>
                                </div>
                            </div>
                            <!--[-->
                            <!--[-->
                            <button type="button" class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-2.5 py-1.5 text-xs gap-1.5 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent lg:hidden flex-shrink-0">
                                <!--[-->
                                <!--[-->
                                <!---->
                                <!--]-->
                                <!--[-->
                                <span class="iconify i-heroicons:x-mark w-4 h-4" aria-hidden="true" style=""></span>
                                <!--]-->
                                <!--[-->
                                <!---->
                                <!--]-->
                                <!--]-->
                            </button>
                            <!--]-->
                            <!--]-->
                        </div>
                        <nav class="mt-6 px-3">
                            <div class="space-y-1">
                                <!--[-->
                                <a href="/dashboard" class="flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out group text-slate-300 hover:bg-slate-800 hover:text-white">
                                    <span class="iconify i-heroicons:home w-5 h-5 mr-3" aria-hidden="true" style=""></span>
                                    <div class="flex-1">
                                        <div class="font-medium">Dashboard</div>
                                        <div class="text-xs opacity-75">Your overview</div>
                                    </div>
                                </a>
                                <a href="/dashboard/profile" class="flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out group text-slate-300 hover:bg-slate-800 hover:text-white">
                                    <span class="iconify i-heroicons:user w-5 h-5 mr-3" aria-hidden="true" style=""></span>
                                    <div class="flex-1">
                                        <div class="font-medium">Profile</div>
                                        <div class="text-xs opacity-75">Manage your profile</div>
                                    </div>
                                </a>
                                <a href="/dashboard/apps" class="flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out group text-slate-300 hover:bg-slate-800 hover:text-white">
                                    <span class="iconify i-heroicons:document-text w-5 h-5 mr-3" aria-hidden="true" style=""></span>
                                    <div class="flex-1">
                                        <div class="font-medium">Applications</div>
                                        <div class="text-xs opacity-75">Your applications</div>
                                    </div>
                                </a>
                                <a aria-current="page" href="/dashboard/map" class="router-link-active router-link-exact-active flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out group bg-blue-900 text-blue-100">
                                    <span class="iconify i-heroicons:map w-5 h-5 mr-3" aria-hidden="true" style=""></span>
                                    <div class="flex-1">
                                        <div class="font-medium">Map</div>
                                        <div class="text-xs opacity-75">Interactive map</div>
                                    </div>
                                </a>
                                <a href="/dashboard/settings" class="flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out group text-slate-300 hover:bg-slate-800 hover:text-white">
                                    <span class="iconify i-heroicons:cog-6-tooth w-5 h-5 mr-3" aria-hidden="true" style=""></span>
                                    <div class="flex-1">
                                        <div class="font-medium">Settings</div>
                                        <div class="text-xs opacity-75">Account settings</div>
                                    </div>
                                </a>
                                <a href="/dashboard/queue" class="flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out group text-slate-300 hover:bg-slate-800 hover:text-white">
                                    <span class="iconify i-heroicons:queue-list w-5 h-5 mr-3" aria-hidden="true" style=""></span>
                                    <div class="flex-1">
                                        <div class="font-medium">Queue</div>
                                        <div class="text-xs opacity-75">Join the queue</div>
                                    </div>
                                </a>
                                <a href="/dashboard/tickets" class="flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out group text-slate-300 hover:bg-slate-800 hover:text-white">
                                    <span class="iconify i-heroicons:clipboard-document-list w-5 h-5 mr-3" aria-hidden="true" style=""></span>
                                    <div class="flex-1">
                                        <div class="font-medium">Tickets</div>
                                        <div class="text-xs opacity-75">Manage support tickets</div>
                                    </div>
                                </a>
                                <!--]-->
                            </div>
                        </nav>
                        <div class="mt-8 px-3">
                            <div class="px-3 mb-2">
                                <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Quick Actions </h3>
                            </div>
                            <div class="space-y-1">
                                <a href="https://discord.gg/ChaseRP" rel="noopener noreferrer" target="_blank" class="flex items-center px-3 py-2 text-sm font-medium text-slate-300 rounded-lg hover:bg-slate-700 transition-colors duration-150">
                                    <span class="iconify i-ic:baseline-discord w-4 h-4 mr-3" aria-hidden="true" style=""></span>
                                    Join the Discord
                                </a>
                                <a href="https://tebex.chaseroleplay.com/" rel="noopener noreferrer" target="_blank" class="flex items-center px-3 py-2 text-sm font-medium text-slate-300 rounded-lg hover:bg-slate-700 transition-colors duration-150">
                                    <span class="iconify i-material-symbols:shopping-cart w-4 h-4 mr-3" aria-hidden="true" style=""></span>
                                    Tebex Store <span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary text-inverted ml-2">
                                    <!--[-->
                                    <!---->
                                    <!--]-->
                                    <!--[-->
                                    LIVE!
                                    <!--]-->
                                    <!--[-->
                                    <!---->
                                    <!--]-->
                                    </span>
                                </a>
                                <a href="/dashboard/rules" class="flex items-center px-3 py-2 text-sm font-medium text-slate-300 rounded-lg hover:bg-slate-700 transition-colors duration-150">
                                    <span class="iconify i-material-symbols:contract w-4 h-4 mr-3" aria-hidden="true" style=""></span>
                                    Server Rules
                                </a>
                            </div>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
                            <button type="button" class="w-full flex items-center px-3 py-2 text-sm font-medium text-slate-300 rounded-lg hover:bg-slate-700 transition-colors duration-150 mb-2">
                                <span class="iconify i-heroicons:arrow-right-on-rectangle w-4 h-4 mr-2" aria-hidden="true" style=""></span>
                                Logout
                            </button>
                            <a href="/" class="flex items-center px-3 py-2 text-sm font-medium text-slate-300 rounded-lg hover:bg-slate-700 transition-colors duration-150">
                                <span class="iconify i-heroicons:arrow-left w-4 h-4 mr-2" aria-hidden="true" style=""></span>
                                Back to Landing Page
                            </a>
                            <p class="text-xs mt-4 text-slate-400 md:hidden">Chase Roleplay is not affiliated, sponsored, or endorsed by Rockstar Games. </p>
                        </div>
                    </div>
                    <div class="transition-all duration-200 ease-in-out lg:pl-0">
                        <header class="bg-slate-950 border-b border-slate-700 fixed top-0 right-0 z-40 h-16 transition-all duration-200 ease-in-out lg:left-0 left-0">
                            <div class="flex items-center justify-between h-16 px-4 sm:px-6">
                                <div class="flex items-center space-x-2 sm:space-x-4">
                                    <!--[-->
                                    <!--[-->
                                    <button type="button" class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-2.5 py-1.5 text-xs gap-1.5 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent lg:hidden">
                                        <!--[-->
                                        <!--[-->
                                        <!---->
                                        <!--]-->
                                        <!--[-->
                                        <span class="iconify i-heroicons:bars-3 w-5 h-5" aria-hidden="true" style=""></span>
                                        <!--]-->
                                        <!--[-->
                                        <!---->
                                        <!--]-->
                                        <!--]-->
                                    </button>
                                    <!--]-->
                                    <!--]-->
                                    <!--[-->
                                    <!--[-->
                                    <button type="button" class="rounded-md font-medium items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-2.5 py-1.5 text-xs gap-1.5 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent hidden lg:flex">
                                        <!--[-->
                                        <!--[-->
                                        <!---->
                                        <!--]-->
                                        <!--[-->
                                        <span class="iconify i-heroicons:chevron-right w-4 h-4" aria-hidden="true" style=""></span>
                                        <!--]-->
                                        <!--[-->
                                        <!---->
                                        <!--]-->
                                        <!--]-->
                                    </button>
                                    <!--]-->
                                    <!--]-->
                                </div>
                                <div class="flex items-center space-x-2 sm:space-x-4">
                                    <div class="flex items-center space-x-2 sm:space-x-3">
                                        <img src="https://cdn.discordapp.com/avatars/159851104627064832/a_70c21d1a52afefe7225b56f29c9fc07e.gif" alt="bun9000" class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex-shrink-0">
                                        <div class="hidden sm:block min-w-0">
                                            <div class="font-bold text-lg text-white truncate">Bun/Bits | Roxy &amp;Donna Diamond</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <main class="w-full h-full">
                            <!--[-->
                            <div class="chase-map-container" data-v-a78d825b>
                                <div class="chase-map" data-v-a78d825b></div>
                                <!---->
                                <!---->
                                <!---->
                                <div class="tooltip-overlay" data-v-a78d825b></div>
                            </div>
                            <!--]-->
                        </main>
                    </div>
                    <footer class="fixed bottom-0 left-0 right-0 z-40 bg-slate-950 border-t border-slate-700 transition-all duration-200 ease-in-out hidden md:block lg:left-0">
                        <div class="flex items-center justify-between h-16 px-4 sm:px-6">
                            <div class="flex flex-col text-xs text-slate-400">
                                <p class="hidden sm:block">Chase Roleplay is not affiliated, sponsored, or endorsed by Rockstar Games. </p>
                                <p class="">© 2026 Chase Roleplay</p>
                            </div>
                            <div class="flex items-center space-x-4">
                                <a href="/legal/terms-of-service" rel="noopener noreferrer" target="_blank" class="text-slate-400 hover:text-white transition-colors text-xs">Terms of Service </a>
                            </div>
                        </div>
                    </footer>
                    <!---->
                </div>
                <!--]-->
                <!--]-->
                <!--[-->
                <!--]-->
                <!--v-if-->
                <!--]-->
                <!--[-->
                <!--]-->
                <!--]-->
                <!--]-->
            </main>
        </div>
        <div id="teleports"></div>
        <script type="application/json" data-nuxt-data="nuxt-app" data-ssr="true" id="__NUXT_DATA__">
            [
                [
                    "ShallowReactive",
                    1
                ],
                {
                    "data": 2,
                    "state": 4,
                    "once": 45,
                    "_errors": 46,
                    "serverRendered": 26,
                    "path": 48,
                    "pinia": 49
                },
                [
                    "ShallowReactive",
                    3
                ],
                {
                },
                [
                    "Reactive",
                    5
                ],
                {
                    "$ssupabase_session": 6,
                    "$ssupabase_user": 12,
                    "$scolor-mode": 42,
                    "$stoasts": 44
                },
                {
                    "access_token": 7,
                    "token_type": 8,
                    "expires_in": 9,
                    "expires_at": 10,
                    "refresh_token": 11
                },
                "eyJhbGciOiJIUzI1NiIsImtpZCI6IjFhRDJHN1BzeGx4WXZ3b0UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FqeG9jYWp5c3N6dnpobHZ6dWR2LnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIxMjQ0MjM0OC0xMTM1LTQwOTktOGQ1ZC1kNzhkYzQyNmViOTgiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzc3NTc3MzM5LCJpYXQiOjE3Nzc1NzM3MzksImVtYWlsIjoia3Jpc3N5aGVpc2htYW5AZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJkaXNjb3JkIiwicHJvdmlkZXJzIjpbImRpc2NvcmQiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F2YXRhcnMvMTU5ODUxMTA0NjI3MDY0ODMyL2FfNzBjMjFkMWE1MmFmZWZlNzIyNWI1NmYyOWM5ZmMwN2UuZ2lmIiwiY3VzdG9tX2NsYWltcyI6eyJnbG9iYWxfbmFtZSI6IkJ1bi9CaXRzIHwgUm94eSBcdTAwMjYgRG9ubmEgRGlhbW9uZCJ9LCJlbWFpbCI6ImtyaXNzeWhlaXNobWFuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJidW45MDAwIiwiaXNzIjoiaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkiLCJuYW1lIjoiYnVuOTAwMCMwIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwaWN0dXJlIjoiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXZhdGFycy8xNTk4NTExMDQ2MjcwNjQ4MzIvYV83MGMyMWQxYTUyYWZlZmU3MjI1YjU2ZjI5YzlmYzA3ZS5naWYiLCJwcm92aWRlcl9pZCI6IjE1OTg1MTEwNDYyNzA2NDgzMiIsInN1YiI6IjE1OTg1MTEwNDYyNzA2NDgzMiJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im9hdXRoIiwidGltZXN0YW1wIjoxNzcxMDE0MDEyfV0sInNlc3Npb25faWQiOiIwNDc2YjQzZC05YTkxLTQ1ODUtYWE5ZS00ZDcwMjE4Mzk4YTAiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.PUtNuEPhciau-yykNqBeLkPwVYuRF0ahYGehhiTfK4U",
                "bearer",
                3600,
                1777577339,
                "uddwcty36yi5",
                {
                    "id": 13,
                    "aud": 14,
                    "role": 14,
                    "email": 15,
                    "email_confirmed_at": 16,
                    "phone": 17,
                    "confirmed_at": 16,
                    "last_sign_in_at": 18,
                    "app_metadata": 19,
                    "user_metadata": 22,
                    "identities": 32,
                    "created_at": 40,
                    "updated_at": 41,
                    "is_anonymous": 30
                },
                "12442348-1135-4099-8d5d-d78dc426eb98",
                "authenticated",
                "krissyheishman@gmail.com",
                "2026-02-03T15:48:17.39802Z",
                "",
                "2026-03-12T21:07:01.433207Z",
                {
                    "provider": 20,
                    "providers": 21
                },
                "discord",
                [
                    20
                ],
                {
                    "avatar_url": 23,
                    "custom_claims": 24,
                    "email": 15,
                    "email_verified": 26,
                    "full_name": 27,
                    "iss": 28,
                    "name": 29,
                    "phone_verified": 30,
                    "picture": 23,
                    "provider_id": 31,
                    "sub": 31
                },
                "https://cdn.discordapp.com/avatars/159851104627064832/a_70c21d1a52afefe7225b56f29c9fc07e.gif",
                {
                    "global_name": 25
                },
                "Bun/Bits | Roxy & Donna Diamond",
                true,
                "bun9000",
                "https://discord.com/api",
                "bun9000#0",
                false,
                "159851104627064832",
                [
                    33
                ],
                {
                    "identity_id": 34,
                    "id": 31,
                    "user_id": 13,
                    "identity_data": 35,
                    "provider": 20,
                    "last_sign_in_at": 37,
                    "created_at": 38,
                    "updated_at": 39,
                    "email": 15
                },
                "c495dbea-e1e0-49d4-88d3-7ec9e6d1425a",
                {
                    "avatar_url": 23,
                    "custom_claims": 36,
                    "email": 15,
                    "email_verified": 26,
                    "full_name": 27,
                    "iss": 28,
                    "name": 29,
                    "phone_verified": 30,
                    "picture": 23,
                    "provider_id": 31,
                    "sub": 31
                },
                {
                    "global_name": 25
                },
                "2026-02-03T15:48:17.392502Z",
                "2026-02-03T15:48:17.392564Z",
                "2026-03-12T21:07:00.735992Z",
                "2026-02-03T15:48:17.389441Z",
                "2026-04-30T18:28:59.569723Z",
                {
                    "preference": 43,
                    "value": 43,
                    "unknown": 26,
                    "forced": 30
                },
                "dark",
                [
                ],
                [
                    "Set"
                ],
                [
                    "ShallowReactive",
                    47
                ],
                {
                },
                "/dashboard/map",
                {
                    "user": 50,
                    "discord": 76
                },
                {
                    "profile": 51,
                    "loading": 30,
                    "error": 62,
                    "devApplications": 63,
                    "allowApplications": 64,
                    "devApplication": 62,
                    "allowApplication": 62,
                    "devNotes": 65,
                    "allowlistNotes": 66,
                    "audioSamples": 67,
                    "isSavingAudio": 30,
                    "audioSaveError": 62,
                    "audioSaveSuccess": 30
                },
                {
                    "user_id": 13,
                    "username": 52,
                    "display_name": 53,
                    "avatar_url": 54,
                    "bio": 17,
                    "discord_id": 31,
                    "discord_username": 27,
                    "discord_discriminator": 55,
                    "created_at": 56,
                    "updated_at": 57,
                    "role": 58,
                    "account_standing": 59,
                    "allowlisted": 26,
                    "steam_id": 60,
                    "steam_persona": 27,
                    "steam_avatar_url": 61,
                    "gta_ownership": 30,
                    "prio": 62,
                    "gta_ownership_status": 62
                },
                "bun9000_0",
                "Bun",
                "https://cdn.discordapp.com/avatars/159851104627064832/70c21d1a52afefe7225b56f29c9fc07e.png",
                "0",
                "2026-02-03T15:48:18.309996+00:00",
                "2026-02-13T23:25:21.820637+00:00",
                2,
                1,
                "76561197977403228",
                "https://avatars.steamstatic.com/d1d47661db8859300e427b3729884f8936dca741_full.jpg",
                null,
                [
                ],
                [
                ],
                [
                ],
                [
                ],
                [
                    68,
                    72
                ],
                {
                    "id": 69,
                    "created_at": 70,
                    "asset_id": 71
                },
                "e57099f7-a956-4ef7-87c9-4caa1fb1aa0f",
                "2026-02-04T18:05:21.869546+00:00",
                "12442348-1135-4099-8d5d-d78dc426eb98/689ad810-08cf-4c9c-9264-4f2da9fb68b9.wav",
                {
                    "id": 73,
                    "created_at": 74,
                    "asset_id": 75
                },
                "c90e6bac-3489-47df-b740-bce3667c4f2a",
                "2026-02-04T17:57:27.874907+00:00",
                "12442348-1135-4099-8d5d-d78dc426eb98/67b72a83-8c4d-4b27-8030-601cb61b13c4.wav",
                {
                    "discordRoles": 77,
                    "loading": 30,
                    "error": 62
                },
                {
                    "member": 78,
                    "roles": 81,
                    "roleCount": 113
                },
                {
                    "discordId": 31,
                    "username": 27,
                    "displayName": 79,
                    "nickname": 80
                },
                "BitsAndBawks",
                "Sloan | Lenore | Diamond",
                [
                    82,
                    88,
                    94,
                    99,
                    103,
                    107
                ],
                {
                    "id": 83,
                    "name": 84,
                    "color": 85,
                    "colorHex": 86,
                    "position": 87
                },
                "1407839819283038268",
                "Allowlisted",
                4286945,
                "#4169e1",
                33,
                {
                    "id": 89,
                    "name": 90,
                    "color": 91,
                    "colorHex": 92,
                    "position": 93
                },
                "1407986921057030244",
                "Arrival",
                12255184,
                "#baffd0",
                30,
                {
                    "id": 95,
                    "name": 96,
                    "color": 97,
                    "colorHex": 62,
                    "position": 98
                },
                "1435015676484911187",
                "Live apps",
                0,
                22,
                {
                    "id": 100,
                    "name": 101,
                    "color": 97,
                    "colorHex": 62,
                    "position": 102
                },
                "1447064417408647269",
                "Government",
                21,
                {
                    "id": 104,
                    "name": 105,
                    "color": 97,
                    "colorHex": 62,
                    "position": 106
                },
                "1457502164170834098",
                "Changelogs",
                13,
                {
                    "id": 108,
                    "name": 109,
                    "color": 110,
                    "colorHex": 111,
                    "position": 112
                },
                "1465863454379348120",
                "EMS",
                15277667,
                "#e91e63",
                10,
                6
            ]</script>
        <script>
            window.__NUXT__ = {};
            window.__NUXT__.config = {
                public: {
                    supabaseCallback: "https://chaseroleplay.com/callback",
                    tebexToken: "ygmw-7b69361b9b647602f1f6083583a046f15db2e00c",
                    queueApiUrl: "https://galactus.chaserp.gg",
                    fivemServerEndpoint: "fivem://connect/play.chaserp.gg:30120?streamerMode=1&pure_1",
                    trailerYouTubeId: "",
                    trailerPosterUrl: "",
                    queueAllowedRoleIds: "",
                    supabase: {
                        url: "https://ajxocajysszvzhlvzudv.supabase.co",
                        key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqeG9jYWp5c3N6dnpobHZ6dWR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxNjI5NzksImV4cCI6MjA3MTczODk3OX0.T599kSfdIEgrXaBTCtKfr_7bH0T6Scvf1gz0caR50hs",
                        redirect: false,
                        redirectOptions: {
                            login: "/login",
                            callback: "/confirm",
                            exclude: [],
                            cookieRedirect: false,
                            saveRedirectToCookie: false
                        },
                        cookieName: "sb",
                        cookiePrefix: "sb-ajxocajysszvzhlvzudv-auth-token",
                        useSsrCookies: true,
                        cookieOptions: {
                            maxAge: 28800,
                            sameSite: "lax",
                            secure: true
                        },
                        clientOptions: {}
                    },
                    piniaPluginPersistedstate: {},
                    gtag: {
                        enabled: true,
                        initMode: "manual",
                        id: "G-ZL3HRQZF93",
                        initCommands: [],
                        config: {},
                        tags: [],
                        loadingStrategy: "defer",
                        url: "https://www.googletagmanager.com/gtag/js"
                    },
                    cookieControl: {
                        _isPrerendered: false,
                        barPosition: "bottom-full",
                        closeModalOnClickOutside: true,
                        colors: {
                            barBackground: "rgba(15, 15, 30, 0.95)",
                            barButtonBackground: "oklch(0.644 0.245 6.12)",
                            barButtonColor: "#ffffff",
                            barButtonHoverBackground: "oklch(0.562 0.218 6.16)",
                            barButtonHoverColor: "#ffffff",
                            barTextColor: "#ffffff",
                            checkboxActiveBackground: "oklch(0.644 0.245 6.12)",
                            checkboxActiveCircleBackground: "#ffffff",
                            checkboxDisabledBackground: "rgba(255, 255, 255, 0.1)",
                            checkboxDisabledCircleBackground: "rgba(255, 255, 255, 0.3)",
                            checkboxInactiveBackground: "rgba(255, 255, 255, 0.1)",
                            checkboxInactiveCircleBackground: "rgba(255, 255, 255, 0.5)",
                            controlButtonBackground: "rgba(255, 255, 255, 0.1)",
                            controlButtonHoverBackground: "rgba(255, 255, 255, 0.2)",
                            controlButtonIconColor: "#ffffff",
                            controlButtonIconHoverColor: "#ffffff",
                            focusRingColor: "oklch(0.644 0.245 6.12)",
                            modalBackground: "rgba(15, 15, 30, 0.98)",
                            modalButtonBackground: "oklch(0.644 0.245 6.12)",
                            modalButtonColor: "#ffffff",
                            modalButtonHoverBackground: "oklch(0.562 0.218 6.16)",
                            modalButtonHoverColor: "#ffffff",
                            modalOverlay: "#000000",
                            modalOverlayOpacity: .8,
                            modalTextColor: "#ffffff",
                            modalUnsavedColor: "oklch(0.663 0.199 38.62)"
                        },
                        cookies: {
                            necessary: [],
                            optional: [{
                                name: {
                                    en: "Google Analytics"
                                },
                                description: {
                                    en: "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic."
                                },
                                id: "google-analytics",
                                targetCookieIds: ["_ga", "_gid", "_gat"],
                                isPreselected: false
                            }]
                        },
                        cookieExpiryOffsetMs: 31536000000,
                        cookieNameIsConsentGiven: "ncc_c",
                        cookieNameCookiesEnabledIds: "ncc_e",
                        cookieOptions: {
                            path: "/",
                            sameSite: "strict",
                            secure: true
                        },
                        isAcceptNecessaryButtonEnabled: true,
                        isControlButtonEnabled: true,
                        isCookieIdVisible: false,
                        isCssEnabled: true,
                        isCssPonyfillEnabled: false,
                        isDashInDescriptionEnabled: true,
                        isIframeBlocked: false,
                        isModalForced: false,
                        declineAllAcceptsNecessary: false,
                        locales: ["en"],
                        localeTexts: {
                            en: {
                                accept: "Accept",
                                acceptAll: "Accept all",
                                bannerDescription: "We use our own cookies and third-party cookies so that we can display this website correctly and better understand how this website is used, with a view to improving the services we offer. A decision on cookie usage permissions can be changed anytime using the cookie button that will appear after a selection has been made on this banner.",
                                bannerTitle: "Cookies",
                                close: "Close",
                                cookiesFunctional: "Functional cookies",
                                cookiesNecessary: "Necessary cookies",
                                cookiesOptional: "Optional cookies",
                                decline: "Decline",
                                declineAll: "Decline all",
                                here: "here",
                                iframeBlocked: "To see this, please enable functional cookies",
                                manageCookies: "Learn more and customize",
                                save: "Save",
                                settingsUnsaved: "You have unsaved settings"
                            }
                        }
                    }
                },
                app: {
                    baseURL: "/",
                    buildId: "0f37bbbb-80e7-40b7-9c10-1a373330c955",
                    buildAssetsDir: "/_nuxt/",
                    cdnURL: ""
                }
            }
        </script>
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"1c15a86af1954de69500a1ab6ad07117","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
    </body>
</html>
