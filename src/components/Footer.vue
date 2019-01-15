<template>
		<div class="footer-block" :style="{color: color}">
				<div class="footer-top">
						<router-link :style="{'margin-right': '140px','a:hover': color, color: color}" to="/about">关于马桶MT</router-link>
						<router-link :style="{'a:hover': color, color: color}" to="/contact">联系我们</router-link>
				</div>
				<div class="footer-center">
						<span>深圳云歌人工智能科技有限公司 <a :style="{'a:hover': color, color: color}" href="https://www.ringle.com/">www.ringle.com</a> 2017-2018 # All Rights Reserved</span>
				</div>
				<div class="footer-bottom">
						<span @click="goRecord" >京ICP备19243858号 京公安网安备3847385783475</span>
				</div>
		</div>
</template>

<script>
	export default {
		name: 'Footer',
		props: [
			'color'
		],
		methods: {
			goRecord() {
				const w = window.open('about:blank');
				w.location.href='http://www.miitbeian.gov.cn/';
			}
		}
	}
</script>

<style scoped>
		.footer-block {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 12px;
				font-family: PingFangSC-Regular,sans-serif;
				font-weight: 400;
				line-height: 17px;
		}
		
		.footer-block .footer-top {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-bottom: 67px;
		}
		
		.footer-block .footer-center {
				margin-bottom: 20px;
		}
		
		a, a:hover {
				color: #fff;
		}
</style>
