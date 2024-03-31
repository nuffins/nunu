import {defineConfig} from 'vitepress'
import {shared} from './shared'
import {en} from './en'
import {zh} from './zh'

export default defineConfig({
    ...shared,
    base: '/nunu/',
    locales: {
        root: {label: '简体中文', ...zh},
        en: {label: 'English', ...en},
    }
})
