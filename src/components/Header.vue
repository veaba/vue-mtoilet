<template>
		<div class="header-wrapper">
				<div class="logo">
						<img src="../assets/img/logo.png" alt>
				</div>
				<div class="navbar">
						<router-link to="/" class="nav-item">首页</router-link>
						<div class="divide-line"/>
						<router-link to="/" class="nav-item">下载</router-link>
						<div class="divide-line"/>
						<router-link to="/about" class="nav-item">
								关于马桶MT
						</router-link>
				</div>
		</div>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style scoped>
		.header-wrapper {
				position: absolute;
				top: 0;
				width: 100%;
				display: flex;
				flex-direction: row;
				box-sizing: border-box;
				padding: 3% 16.7%;
				justify-content: space-between;
				align-items: center;
				z-index: 999;
		}
		
		.header-wrapper .logo {
				width: 60px;
				height: 60px;
				display: flex;
				justify-content: center;
				align-items: center;
		}
		
		.header-wrapper .navbar {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
		}
		
		.navbar .nav-item {
				font-size: 18px;
				font-family: PingFangSC-Regular,sans-serif;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 27px;
		}
		
		.divide-line {
				background-color: #fff;
				width: 2px;
				height: 30px;
				margin: 0 64px;
		}

</style>
