import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Custom hook for handling translations in components that work with UiModel.
 * Consolidates the translation initialization pattern used across Form, Grid, and field components.
 *
 * @param {Object} model - The UiModel instance that may contain a custom tTranslate function
 * @returns {Object} Translation utilities { translate, i18n, tOpts, tTranslate }
 */
export function useModelTranslation(model) {
    const { t: translate, i18n } = useTranslation();
    const tOpts = React.useMemo(() => ({ t: translate, i18n }), [translate, i18n]);
    const tTranslate = model?.tTranslate ?? ((key) => key);

    return { translate, i18n, tOpts, tTranslate };
}
