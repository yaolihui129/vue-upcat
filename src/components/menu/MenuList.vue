<template>
	<!-- sidebar menu: : style can be found in sidebar.less -->
	<ul class="sidebar-menu">
		<li class="header">导航栏</li>
		<li class="active treeview">
			<a href="#">
				<i class="fa fa-dashboard"></i> 
				<span>仪表盘</span>
			  <span class="pull-right-container">
					<i class="fa fa-angle-left pull-right"></i>
			  </span>
			</a>
			<ul class="treeview-menu">
				<li>
					<a href="#">
						<i class="fa fa-circle-o"> 仪表盘v1</i>
					</a>
				</li>
				<li class="active">
					<a href="#">
						<i class="fa fa-circle-o"> 仪表盘v2</i>
					</a>
				</li>
			</ul>
		</li>
					
		<li class="treeview">
			<a href="#">
				<i class="fa fa-pie-chart"></i>
				<span>数据大屏</span>
				<span class="pull-right-container">
					<i class="fa fa-angle-left pull-right"></i>
				</span>
			</a>
			<ul class="treeview-menu">
				<li>
					<a href="pages/charts/chartjs.html">
						<i class="fa fa-circle-o"> ChartJS</i>
					</a>
				</li>
				<li>
					<a href="pages/charts/morris.html">
						<i class="fa fa-circle-o"> Morris</i>
					</a>
				</li>
				<li>
					<a href="pages/charts/flot.html">
						<i class="fa fa-circle-o"> Flot</i>
					</a>
				</li>
				<li>
					<a href="pages/charts/inline.html">
						<i class="fa fa-circle-o"> Inline charts</i>
					</a>
				</li>
			</ul>
		</li>
					
					
		<li class="treeview">
			<a href="#">
				<i class="fa fa-files-o"></i>
				<span>Layout Options</span>
				<span class="pull-right-container">
					<span class="label label-primary pull-right">4</span>
				</span>
			</a>
			<ul class="treeview-menu">
				<li>
					<a href="#">
						<i class="fa fa-circle-o">Top Navigation</i> 
					</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-circle-o">Boxed</i> 
					</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-circle-o">Fixed</i> 
					</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-circle-o">Collapsed Sidebar</i> 
					</a>
				</li>
			</ul>
		</li>
		
		
		<li>
			<a href="pages/widgets.html">
				<i class="fa fa-th"></i> 
				<span>Widgets</span>
				<span class="pull-right-container">
					<small class="label pull-right bg-green">new</small>
				</span>
			</a>
		</li>
					
	
		<li class="treeview">
			<a href="#">
				<i class="fa fa-laptop"></i>
				<span>UI Elements</span>
				<span class="pull-right-container">
					<i class="fa fa-angle-left pull-right"></i>
				</span>
			</a>
			<ul class="treeview-menu">
				<li><a href="pages/UI/general.html"><i class="fa fa-circle-o"></i> General</a></li>
				<li><a href="pages/UI/icons.html"><i class="fa fa-circle-o"></i> Icons</a></li>
				<li><a href="pages/UI/buttons.html"><i class="fa fa-circle-o"></i> Buttons</a></li>
				<li><a href="pages/UI/sliders.html"><i class="fa fa-circle-o"></i> Sliders</a></li>
				<li><a href="pages/UI/timeline.html"><i class="fa fa-circle-o"></i> Timeline</a></li>
				<li><a href="pages/UI/modals.html"><i class="fa fa-circle-o"></i> Modals</a></li>
			</ul>
		</li>
					
		<li class="treeview">
			<a href="#">
				<i class="fa fa-edit"></i> <span>Forms</span>
				<span class="pull-right-container">
					<i class="fa fa-angle-left pull-right"></i>
				</span>
			</a>
			<ul class="treeview-menu">
				<li><a href="pages/forms/general.html"><i class="fa fa-circle-o"></i> General Elements</a></li>
				<li><a href="pages/forms/advanced.html"><i class="fa fa-circle-o"></i> Advanced Elements</a></li>
				<li><a href="pages/forms/editors.html"><i class="fa fa-circle-o"></i> Editors</a></li>
			</ul>
		</li>
					
		<li class="treeview">
			<a href="#">
				<i class="fa fa-table"></i> <span>Tables</span>
				<span class="pull-right-container">
					<i class="fa fa-angle-left pull-right"></i>
				</span>
			</a>
			<ul class="treeview-menu">
				<li><a href="pages/tables/simple.html"><i class="fa fa-circle-o"></i> Simple tables</a></li>
				<li><a href="pages/tables/data.html"><i class="fa fa-circle-o"></i> Data tables</a></li>
			</ul>
		</li>
		
		
		<li>
			<a href="pages/calendar.html">
				<i class="fa fa-calendar"></i> <span>Calendar</span>
				<span class="pull-right-container">
					<small class="label pull-right bg-red">3</small>
					<small class="label pull-right bg-blue">17</small>
				</span>
			</a>
		</li>
		
		
		<li>
			<a href="pages/mailbox/mailbox.html">
				<i class="fa fa-envelope"></i> 
				<span>Mailbox</span>
				<span class="pull-right-container">
					<small class="label pull-right bg-yellow">12</small>
					<small class="label pull-right bg-green">16</small>
					<small class="label pull-right bg-red">5</small>
				</span>
			</a>
		</li>
					
					
		<li class="treeview">
			<a href="#">
				<i class="fa fa-folder"></i> 
				<span>Examples</span>
				<span class="pull-right-container">
					<i class="fa fa-angle-left pull-right"></i>
				</span>
			</a>
			<ul class="treeview-menu">
				<li><a href="pages/examples/invoice.html"><i class="fa fa-circle-o"></i> Invoice</a></li>
				<li><a href="pages/examples/profile.html"><i class="fa fa-circle-o"></i> Profile</a></li>
				<li><a href="pages/examples/login.html"><i class="fa fa-circle-o"></i> Login</a></li>
				<li><a href="pages/examples/register.html"><i class="fa fa-circle-o"></i> Register</a></li>
				<li><a href="pages/examples/lockscreen.html"><i class="fa fa-circle-o"></i> Lockscreen</a></li>
				<li><a href="pages/examples/404.html"><i class="fa fa-circle-o"></i> 404 Error</a></li>
				<li><a href="pages/examples/500.html"><i class="fa fa-circle-o"></i> 500 Error</a></li>
				<li><a href="pages/examples/blank.html"><i class="fa fa-circle-o"></i> Blank Page</a></li>
				<li><a href="pages/examples/pace.html"><i class="fa fa-circle-o"></i> Pace Page</a></li>
			</ul>
		</li>
					
		<li class="treeview">
			<a href="#">
				<i class="fa fa-share"></i> 
				<span>Multilevel</span>
				<span class="pull-right-container">
					<i class="fa fa-angle-left pull-right"></i>
				</span>
			</a>
			<ul class="treeview-menu">
				<li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
				<li>
					<a href="#"><i class="fa fa-circle-o"></i> Level One
					  <span class="pull-right-container">
						<i class="fa fa-angle-left pull-right"></i>
					  </span>
					</a>
					<ul class="treeview-menu">
						<li>
							<a href="#">
								<i class="fa fa-circle-o"> Level Two</i>
							</a>
						</li>
						<li>
							<a href="#"><i class="fa fa-circle-o">Level Two</i> 
								<span class="pull-right-container">
									<i class="fa fa-angle-left pull-right"></i>
								</span>
							</a>
							<ul class="treeview-menu">
								<li><a href="#"><i class="fa fa-circle-o">Level Three</i> </a></li>
								<li><a href="#"><i class="fa fa-circle-o">Level Three</i> </a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
			</ul>
		</li>
					
		<li>
			<a href="documentation/index.html">
				<i class="fa fa-book"></i> 
				<span>Documentation</span>
			</a>
		</li>
		
		<li class="header">标签</li>
		<li>
			<a href="#">
				<i class="fa fa-circle-o text-red"></i> 
				<span> 紧急</span>
			</a>
		</li>
		<li>
			<a href="#">
				<i class="fa fa-circle-o text-yellow"></i> 
				<span> 重要</span>
			</a>
		</li>
		<li>
			<a href="#">
				<i class="fa fa-circle-o text-aqua"></i> 
				<span> 一般</span>
			</a>
		</li>
		
	</ul>
</template>