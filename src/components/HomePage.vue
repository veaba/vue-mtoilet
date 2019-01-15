<template>
		<div class="main-container">
				<Header/>
				<!-- <div class="page-one" :style="{height: height}">
					<div class="center-block-one">
						<div class="title-main">
							<span>匿名打探秘密神器</span>
						</div>
						<img class="sub-title-main" src="../assets/img/page1t.png">
						iOS下载链接
						<a href="https://www.pgyer.com/0VfM">
							<div class="center-btn">
								<img src="../assets/img/iphone.png" >
							</div>
						</a>
						安卓下载链接
						<a href="https://mtfiles.mtoilet.com/public/apk/mtoilet.2.0.21.apk">
							<div class="center-btn">
								<img src="../assets/img/android.png" >
							</div>
						</a>
					</div>
				</div> -->
				<div class="page-one-maintain" :style="{height: height}">
						<div class="center-block-one-maintain">
								<div class="maintain-title">
										<span>尊敬的各位用户：</span>
								</div>
								<div class="maintain-desc">
										<img src="../assets/img/maintain_new.png" alt="">
								</div>
						
						</div>
						<!-- </div> -->
				</div>
				<div class="page-two" :style="{height: height2}">
						<div class="pagetwo-left-block">
								<div class="title" style="width: 6.55rem">
										<span>想知道TA的秘密</span>
										<span>但是不方便直接问？</span>
								</div>
								<img style="margin-top: 0.51rem;width: 4.16rem; height: 0.85rem" src="../assets/img/page2t.png">
						</div>
						<div class="pagetwo-img-wrapper">
								<img src="https://cdn.api.wanzi.cn/weapp/icon/page21.png" alt class="pagetwo-img">
						</div>
				</div>
				<div class="page-three" :style="{height: height2}">
						<div class="pagethree-left">
								<img src="https://cdn.api.wanzi.cn/weapp/icon/page31.png" alt>
						</div>
						<div class="pagethree-right">
								<div class="title" style="width: 6.01rem">
										<span>想要吐槽想要抱怨</span>
										<span>但是不敢说出来？</span>
								</div>
								<img style="height: 0.75rem; width: 4.48rem;margin-top: 0.45rem" src="../assets/img/page3t.png">
						</div>
				</div>
				<div class="page-four" :style="{height: height2}">
						<div class="pagefour-left">
								<div class="title" style="width: 8.66rem">
										<span>参与讨论真情回答</span>
										<span>你就可以瓜分话题红包</span>
								</div>
								<img style="width: 6.08rem;height: 0.35rem; margin-top: 0.51rem"
												src="../assets/img/page4t.png"
								>
						</div>
						<div class="pagefour-right">
								<img src="https://cdn.api.wanzi.cn/weapp/icon/page41.png">
						</div>
				</div>
				<Footer color="#919191"/>
		</div>
</template>

<script>
	import Footer from "./Footer";
	import Header from "./Header";
	
	export default {
		name: "HomePage",
		components: {
			Footer,
			Header
		},
		data() {
			return {
				height: "1080px",
				height2: "866px"
			};
		},
		created() {
			const width = document.documentElement.clientWidth;
			this.height = `${(1080 * width) / 1920}px`;
			this.height2 = `${(866 * width) / 1920}px`;
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		@import "../assets/css/pc.css";
		
		.page-one-maintain {
				background-image: url("https://cdn.api.wanzi.cn/weapp/icon/page1_maintain.png");
				background-size: 100% 100%;
				background-repeat: no-repeat;
				width: 100%;
				/* height: 1080px; */
				margin-bottom: 0.5rem;
				position: relative;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				align-items: flex-end;
		}
		
		
		.center-block-one-maintain {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
		}
		
		.maintain-title {
				height:0.89rem;
				font-size:0.89rem;
				font-family:'PangMenZhengDao';
				color:rgba(255,255,255,1);
				line-height:1.02rem;
				margin-bottom: 30px;
		}
		
		.maintain-desc {
				width: 8.88rem;
				height: auto;
		}
		
		.maintain-desc img {
				width: 100%;
				height: 100%;
		}
		.title{
				height: 1.58rem;
				font-size: .79rem;
				font-family: PangMenZhengDao;
				color: #fff;
				line-height: .9rem;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
		}
</style>