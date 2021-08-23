import { css } from 'styled-components'

export const Structure = css`
    .container,
    .container-fluid,
    .container-xxl,
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm {
        width: 90%;
        padding-right: var(--bs-gutter-x, 0.75rem);
        padding-left: var(--bs-gutter-x, 0.75rem);
        margin-right: auto;
        margin-left: auto;
    }
    @media (min-width: 576px) {
        .container-sm, .container {
            max-width: 540px;
        }
    }
    @media (min-width: 768px) {
        .container-md, .container-sm, .container {
            max-width: 720px;
        }
    }
    @media (min-width: 992px) {
        .container-lg, .container-md, .container-sm, .container {
            max-width: 960px;
        }
    }
    @media (min-width: 1200px) {
        .container-xl, .container-lg, .container-md, .container-sm, .container {
            max-width: 1140px;
        }
    }
    @media (min-width: 1400px) {
        .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
            max-width: 1320px;
        }
    }
    /*  */
    body::-webkit-scrollbar {
        width: 6px;
        border: none;
        outline: none;
    }
    body::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 6px #1B1B1B; */
        border: none;
        outline: none;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #EA1C1D;
        border: none;
        outline: none;
        /* outline: 1px solid slategrey; */
    }
`
