import 'server-only';
import type { Locale } from './i18n-config';

const dictionaries = {
    en: () => Promise.resolve({
        hello: 'Hello World',
        nav: {
            home: 'Home',
            projects: 'Projects',
            about: 'About',
            blog: 'Blog',
            playground: 'Playground',
            performance: 'Performance',
            lab: 'Lab'
        }
    }),
    es: () => Promise.resolve({
        hello: 'Hola Mundo',
        nav: {
            home: 'Inicio',
            projects: 'Proyectos',
            about: 'Sobre mi',
            blog: 'Blog',
            playground: 'Patio',
            performance: 'Rendimiento',
            lab: 'Laboratorio'
        }
    }),
};

export const getDictionary = async (locale: Locale) => {
    // Graceful fallback to english if locale dictionary doesn't exist
    if (!dictionaries[locale as keyof typeof dictionaries]) {
        return dictionaries.en();
    }
    return dictionaries[locale as keyof typeof dictionaries]();
};
