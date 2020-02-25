<template>
	<div class="wrapper">
		<Header></Header>
		<div class="left">
			<Left></Left>
		</div>
		<router-view/>
		<Footer></Footer>
	</div>
</template>

<script type="text/javascript">
	import Header from '../components/layout/Header.vue'
	import Left from '../components/layout/Left.vue'
	import Footer from '../components/layout/Footer.vue'

	export default {
		components: {
			Header,
			Left,
			Footer
		}
	}
</script>
