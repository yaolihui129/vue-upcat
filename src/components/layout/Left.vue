<template>
	<div>
		<aside class="main-sidebar">
		    <!-- sidebar: style can be found in sidebar.less -->
		    <section class="sidebar">
				<Menucard></Menucard>
				<Menusearch></Menusearch>
		      <!-- sidebar menu: : style can be found in sidebar.less -->
		      <ul class="sidebar-menu">
		        <Menulist></Menulist>
		      </ul>
		    </section>
		    <!-- /.sidebar -->
		</aside>
	</div>
	
</template>

<script>
	import Menucard from '../menu/Menucard.vue'
	import Menusearch from '../menu/Munesearch.vue'
	import Menulist from '../menu/MenuList.vue'
	export default {
		components: {
			Menucard,
			Menusearch,
			Menulist
		}
	}
</script>

