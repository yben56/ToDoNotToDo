<template>
    <div class="nav container" v-if="Auth()"> 
		<div class="col-md-12 p-2 mt-3">
			<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li class="nav-item" role="presentation">
					<router-link to="/">
						<button
							class="nav-link active"
							data-bs-toggle="pill"
							type="button"
							role="tab"
							aria-controls="pills-home"
							aria-selected="true"
						>
							<i class="fa-solid fa-house"></i> {{ $t('Index') }}
						</button>
					</router-link>
				</li>
				<li class="nav-item" role="presentation">
					<router-link to="/ToDo">
						<button
							class="nav-link"
							data-bs-toggle="pill"
							type="button"
							role="tab"
							aria-controls="pills-profile"
							aria-selected="false"
						>
							<i class="fa-solid fa-list"></i> {{ $t('ToDoList') }}
						</button>
					</router-link>
				</li>
				<li class="nav-item" role="presentation">
					<router-link to="/Contact">
						<button
							class="nav-link"
							data-bs-toggle="pill"
							type="button"
							role="tab"
							aria-controls="pills-contact"
							aria-selected="false"
						>
							<i class="fa-solid fa-comment"></i> {{ $t('Contact') }}
						</button>
					</router-link>
				</li>
			</ul>
		</div> 
    </div>
</template>

<style scoped lang="scss">
.nav-item {
	margin-right: 12px;
	
	a {
		text-decoration: none;	
		.active {
			border-radius: 0 !important;
			color: #fff !important;
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
}
</style>