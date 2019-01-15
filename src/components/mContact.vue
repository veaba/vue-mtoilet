<template>
		<div class="contact-container" :style="{width: width}">
				<div class="header-wrapper">
						<div class="logo">
								<img src="../assets/img/logo.png" alt>
						</div>
						<div class="navbar">
								<router-link to="/m" class="nav-item">首页</router-link>
								<div class="divide-line"/>
								<router-link to="/m" class="nav-item">下载</router-link>
								<div class="divide-line"/>
								<router-link to="/mabout" class="nav-item">关于马桶MT</router-link>
						</div>
				</div>
				<div class="page-one contact-page" :style="{height: isIphoneX? '812px': '100%', width: width}">
						<div class="contact-block">
								<div class="contact-title">联系我们</div>
								<a class="contact-desc" href="mailto:matong@ringleai.com">邮箱：matong@ringleai.com</a>
						</div>
				</div>
				<div class="footer-block contact-footer">
						<div class="footer-top">
								<router-link style="margin-right: 40px" to="/mabout">关于马桶MT</router-link>
								<router-link to="/mcontact">联系我们</router-link>
						</div>
						<div class="footer-center">
        <span>
          深圳云歌人工智能科技有限公司
          <a href="https://www.ringle.com/">www.ringle.com</a> 2017-2018 # All Rights Reserved
        </span>
						</div>
						<div class="footer-bottom">
								<span @click="goRecord">京ICP备19243858号 京公安网安备3847385783475</span>
						</div>
				</div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				isIphoneX: false
			};
		},
		// :style="{'background-size': isIphoneX? '375px 855px': '100% 100%'}"
		created() {
			const { userAgent } = navigator;
			if (userAgent.includes("iPhone") && screen.height >= 812) {
				this.isIphoneX = true;
			}
			const width = document.documentElement.clientWidth;
			this.width = `${width}px`;
			this.height = `${(771 * width) / 375}px`;
			this.height2 = `${(433 * width) / 375}px`;
		},
		methods: {
			goRecord() {
				const w = window.open('about:blank');
				w.location.href='http://www.miitbeian.gov.cn/';
			}
		}
	};
</script>


<style scoped>
		@import "../assets/css/mobile.css";
		.contact-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 375px;
				height: 100%;
				position: relative;
		}
		
		.contact-page {
				background-size: cover;
		}
		
		.contact-block {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				position: absolute;
				top: 50%;
				left: 20%;
				transform: translate(0, -80%);
		}
		.contact-title {
				width: 120px;
				height: 42px;
				font-size: 30px;
				font-family: PingFangSC-Regular,sans-serif;
				font-weight: 600;
				color: rgba(255, 255, 255, 1);
				line-height: 42px;
				margin-bottom: 12px;
		}
		.contact-desc {
				color: #fff;
				font-size: 17px;
				font-family: PingFangSC-Regular,sans-serif;
				font-weight: 400;
				line-height: 24px;
				white-space: nowrap;
		}
		
		.contact-footer {
				position: absolute;
				bottom: 31px;
				width: 100%;
				margin-bottom: 0;
				color: #fff;
		}
		
		a,
		a:hover {
				color: #fff;
		}
</style>
