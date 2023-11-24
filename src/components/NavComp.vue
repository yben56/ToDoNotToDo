<template>
    <div class="navigation container d-none d-lg-block" v-if="Auth()"> 
		<div class="form-group has-search">
			<span class="fa fa-search form-control-feedback"></span>
			<input type="text" class="form-control" placeholder="Search">
		</div>

		<br><b class="m-2 h5">MENU</b><hr>

		<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
			<li class="nav-item" role="presentation">
				<router-link to="/">
					<button
						class="nav-link"
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
			<li class="nav-item mt-4">
				<a><button class="nav-link"><i class="fa-solid fa-square text-warning"></i> {{ $t('Privacy')}}</button></a>
			</li>
			<li class="nav-item">
				<a><button class="nav-link"><i class="fa-solid fa-square text-danger"></i> {{ $t('Terms')}}</button></a>
			</li>
			<li class="nav-item">
				<a><button class="nav-link"><i class="fa-solid fa-square text-primary"></i> Cookie</button></a>
			</li>
			<li class="nav-item mt-4">
				<a><button class="nav-link"><i class="fa-solid fa-gear text-success"></i> Setting</button></a>
			</li>
		</ul>
	</div> 
</template>

<style scoped lang="scss">
.navigation {
	border-right: solid 1px #eee;
	min-height: 600px;
	
	.has-search .form-control {
		padding-left: 2.375rem;
	}
	.has-search .form-control-feedback {
		position: absolute;
		z-index: 2;
		display: block;
		width: 2.375rem;
		height: 2.375rem;
		line-height: 2.375rem;
		text-align: center;
		pointer-events: none;
		color: #aaa;
	}

	.nav-item {
		margin-right: 12px;
		margin-bottom: 5px;
		
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
			}
		}
	}
}
</style>