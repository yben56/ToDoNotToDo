<template>
    <div class="form-group">
        <select class="form-control form-select-sm" v-model="selectedLanguage" @change="SwitchLanguage">
            <option value="" disabled>{{ $t('Lang') }}</option>
            <option value="en-US">{{ $t('en-US') }}</option>
            <option value="zh-TW">{{ $t('zh-TW') }}</option>
        </select>
    </div>
</template>

<script>
import lang from '../js/lang.js'

export default {
    data() {
        return {
            selectedLanguage: lang.global.locale
        }
    },
    mounted() {
        this.selectedLanguage = lang.global.locale
    },
    methods: {
        SwitchLanguage() {
            this.$i18n.locale = this.selectedLanguage
            localStorage.setItem('selectedLanguage', this.selectedLanguage)
        }
    }
}
</script>
>
<style scoped lang="scss">
select {
    max-width: 100px;   
}
</style>