<template>
    <div class="nav container" v-if="auth"> 
		<div class="col-md-12 p-2 mt-3">
			<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li class="nav-item" role="presentation">
					<button
						class="nav-link active"
						data-bs-toggle="pill"
						type="button"
						role="tab"
						aria-controls="pills-home"
						aria-selected="true"
						@click="switchComp('index-comp')"
					>
						<i class="fa-solid fa-house"></i> {{ $t('Index') }}
					</button>
				</li>
				<li class="nav-item" role="presentation">
					<button
					class="nav-link"
						data-bs-toggle="pill"
						type="button"
						role="tab"
						aria-controls="pills-profile"
						aria-selected="false"
						@click="switchComp('todolist-comp')"
					>
						<i class="fa-solid fa-list"></i> {{ $t('ToDoList') }}
					</button>
				</li>
				<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						data-bs-toggle="pill"
						type="button"
						role="tab"
						aria-controls="pills-contact"
						aria-selected="false"
						@click="switchComp('contact-comp')"
					>
						<i class="fa-solid fa-comment"></i> {{ $t('Contact') }}
					</button>
				</li>
			</ul>
		</div> 
    </div>

	<KeepAlive>
		<component :is="comp" />
	</KeepAlive>
</template>

<script>
export default {	
	data() {
		return {
			comp: 'index-comp'
		}
	},
	methods: {
		switchComp( component ) {
			this.comp = component
		}
	},
	computed: {
        auth() {
            let auth = JSON.parse(localStorage.getItem('auth'))
            
            if ( auth ) {
                return auth
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped lang="scss">
.nav-item {
	margin-right: 12px;
	
	.active {
		border-radius: 0 !important;
		background-color: #aaa !important;
	}
	.nav-link {
		color: #333;
		border-radius: 0;
		
	}

	.nav-link:hover {
		box-shadow: none;
		border-bottom: solid 1px #666;
	}
}
</style>