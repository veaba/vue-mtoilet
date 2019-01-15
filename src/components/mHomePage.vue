<template>
		<div class="mobile-container">
				<div class="mask" :style="{display: showMask? 'block': 'none'}" @click="closeMask">
						<img src="../assets/img/arrow.png" alt="" class="img" />
						<span class="info">点击这里选择在浏览器中打开</span>
				</div>
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
				<!-- <div class="page-one" :style="{height: height, width: width}">
					<div class="title-block">
						<div class="title">匿名打探秘密神器</div>
						<img src="../assets/img/page1t.png" alt="" class="page1t">
					</div>
					<div class="btn-block">
						iOS下载链接
						<a @click="goToGuide" class="center-btn">
							<img src="../assets/img/iphone.png" >
						</a>
						安卓下载链接
						<a @click="downloadApk" class="center-btn">
							<img src="../assets/img/android.png" >
						</a>
					</div>
					<img src="https://cdn.api.wanzi.cn/weapp/icon/mobile/page11.png" alt="" class="page-pic">
				</div> -->
				<div class="page-one-maintain" :style="{height: height, width: width}">
						<div class="center-block-maintain">
        <span class="maintain-title">
          尊敬的各位用户：
        </span>
								<div class="maintain-sub">
        <span>
          由于1月14日晚到现在，下载体验马桶MT的用户超过了我们服务器的负载能力，导致各位用户短信验证码获取不到，无法正常的使用产品。为此我们向您说声对不起！我们团队正在扩容服务器，优化服务，恢复服务后，我们将第一时间在官网跟微博同步信息。
          <br/>
          <br/>
          谢谢你对马桶MT的支持！
        </span>
								</div>
						</div>
				</div>
				<div class="page-two" :style="{height: height2}">
						<div class="title-block-two">
								<div class="title-two">
										<span>想知道TA的秘密</span>
										<span>但是不方便直接问？</span>
								</div>
								<img src="../assets/img/page2t.png" alt="" class="page2-pic">
						</div>
				</div>
				<div class="page-three" :style="{height: height2}">
						<div class="title-block-two">
								<div class="title-two">
										<span>想要吐槽想要抱怨</span>
										<span>但是不敢说出来？</span>
								</div>
								<img src="../assets/img/page3t.png" alt="" class="page3-pic">
						</div>
				</div>
				<div class="page-four" :style="{height: height2}">
						<div class="title-block-two">
								<div class="title-four">
										<span>参与讨论真情回答</span>
										<span>你就可以瓜分话题红包</span>
								</div>
								<img src="../assets/img/page4t.png" alt="" class="page4-pic">
						</div>
				</div>
				<div class="footer-block">
						<div class="footer-top">
								<router-link style="margin-right: 40px" to="/mabout">关于马桶MT</router-link>
								<router-link to="/mcontact">联系我们</router-link>
						</div>
						<div class="footer-center">
								<span>深圳云歌人工智能科技有限公司 <a href="https://www.ringle.com/">www.ringle.com</a> 2017-2018 # All Rights Reserved</span>
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
				showMask: false
			}
		},
		created() {
			const width = document.documentElement.clientWidth;
			this.width = width;
			this.height = `${771*width/375}px`;
			this.height2 = `${433*width/375}px`;
		},
		methods: {
			goRecord() {
				const w = window.open('about:blank');
				w.location.href='http://www.miitbeian.gov.cn/';
			},
			
			downloadApk() {
				const userAgent = navigator.userAgent.toLowerCase();
				const isWeixin = (ua) => {
					return ua.includes('micromessenger');
				}
				if(isWeixin(userAgent)) {
					this.showMask = true
					return
				}
				window.open('https://mtfiles.mtoilet.com/public/apk/mtoilet.2.0.21.apk');
			},
			
			closeMask() {
				this.showMask = false
			},
			
			goToGuide() {
				this.$router.push('/mguide')
			}
		}
	};
</script>


<style scoped>
		@import "../assets/css/mobile.css";
		
		.mask {
				display: none;
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: rgba(0,0,0,0.6);
				height: 100%;
				width: 100%;
				z-index: 9999;
		}
		
		.mask .img {
				width: 69px;
				height: 98px;
				position: absolute;
				top: 15px;
				right: 15px;
		}
		
		.mask .info{
				position: absolute;
				top: 100px;
				left: 45%;
				transform: translateX(-50%);
				font-size: 18px;
				color: #ffffff;
				white-space: nowrap;
		}
		
		.page-one-maintain {
				background-image: url("https://cdn.api.wanzi.cn/weapp/icon/mobile/page1_maintain.png");
				background-size: 100% 100%;
				background-repeat: no-repeat;
				width: 100%;
				height: 775px;
				position: relative;
		}
		
		.center-block-maintain {
				position: absolute;
				/* margin: 0 20px; */
				padding: 0 25px;
				top: 20%;
				left: 50%;
				height: auto;
				transform: translate(-50%, 0);
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
		}
		
		.maintain-title {
				/* width:332px; */
				height:44px;
				font-size:45px;
				font-family:PangMenZhengDao;
				color:rgba(255,255,255,1);
				line-height:50px;
				white-space: nowrap;
				margin-bottom: 30px;
		}
		
		.maintain-sub {
				height:198px;
				font-size:16px;
				font-weight:500;
				color:rgba(255,255,255,1);
				line-height:22px;
				white-space: normal;
		}

</style>
