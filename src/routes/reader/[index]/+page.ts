import type { PageLoad } from './$types';

export const ssr = false;
export const load: PageLoad = ({ params }) => {
    return {
        index: parseInt(params.index),
    };
};