@if(Session::has('message'))
	<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		   	<div class="alert alert-success alert-with-icon" data-notify="container">
			    <button type="button" aria-hidden="true" data-dismiss="alert" class="close">×</button>
			    <span data-notify="icon" class="pe-7s-bell"></span>
			    <span data-notify="message">
			    	<strong>* * * {{Session::get('message')}} * * *</strong>
			    </span>
			</div>
		</div>
	</div>
@endif