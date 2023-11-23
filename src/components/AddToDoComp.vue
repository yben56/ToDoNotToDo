<template>
  <div class="addtodo">
    <form @submit.prevent="submitForm" class="row g-3">
      <div class="col-md-12">
        <label class="form-label">{{ $t('AddToDo') }}</label>
        <input type="text" class="form-control" v-model="todo" required>
      </div>

      <div class="col-md-12">
        <i class="text-danger">* 因為無資料庫, 目前是使用ToDo.json模擬 (此表單無法POST存入資料庫)</i>
      </div>
      <div class="col-md-12">
        <button type="submit" class="btn btn-danger submit">{{ $t('Submit')}}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
		submitForm() {
			this.$axios.get('/database/AddToDo.json', {
				email: this.tod
			}).then(response => {
				console.log(response.data)
        window.location.href = '/ToDo'
			}).catch(error => {
				console.error(error)
			})
		}
	}
}
</script>
>
<style scoped lang="scss">
.addtodo {
	min-width: 300px
}
</style>