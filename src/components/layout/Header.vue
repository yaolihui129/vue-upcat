<template>
	<div class="main-header">	
		    <!-- Logo -->
		    <a href="#" class="logo">
		      <!-- mini logo for sidebar mini 50x50 pixels -->
		      <span class="logo-mini"><b>U</b>p</span>
		      <!-- logo for regular state and mobile devices -->
		      <span class="logo-lg">Upcat云测平台</span>
		    </a>
		
		    <!-- Header Navbar: style can be found in header.less -->
		    <nav class="navbar navbar-static-top">
		      <!-- Sidebar toggle button-->
		      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
		        <span class="sr-only">Toggle navigation</span>
		      </a>
		      <!-- Navbar Right Menu -->
		      <div class="navbar-custom-menu">
		        <ul class="nav navbar-nav">
		          <Message></Message>
				  <Notification></Notification>
		          <Task></Task>
		          <Useraccout></Useraccout>
		          <Settings></Settings>
		        </ul>
		      </div>
		
		    </nav>
		  </header>
	</div>
</template>

<script type="text/javascript">
	import Message from '../header/Message.vue'
	import Notification from '../header/Notification.vue'
	import Task from '../header/Task.vue'
	import Useraccout from '../header/Useraccout.vue'
	import Settings from '../header/Settings.vue'

	export default {
		components: {
			Message,
			Notification,
			Task,
			Useraccout,
			Settings
		}
	}
</script>


