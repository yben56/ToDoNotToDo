import { createI18n } from 'vue-i18n';

const messages = {
    'en-US': require('@/lang/en-US.json'),
    'zh-TW': require('@/lang/zh-TW.json')
}

const lang = createI18n({
    locale: localStorage.getItem('selectedLanguage') || 'zh-TW',
    messages
})

export default lang