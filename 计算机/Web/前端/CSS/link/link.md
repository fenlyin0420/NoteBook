# float塌陷demo^e04d19
```css
<!DOCTYPE html>
<html>
<head>
<style>
	ul
	{
		width:100%;
		padding:0;
		margin:0;
		list-style-type:none;
	}
	a
	{
		width:6em;
		text-decoration:none;
		color:white;
		background-color:purple;
		padding:0.2em 2em;
		border-right:1px solid white;
	}
	div {
		background-color: red;
	}
	
	.flo {
		float: left;
		background-color: purple !important;
		width: 30px !important;
		height: 30px !important;
	}
	
	#test {
		display: inline-block;
		background-color: yellow;
		width: 50px;
		height: 50px;
		border: solid black;
	}

	li {
		display:inline;
		float: left
	}
</style>
	
</head>
<body>
	<ul>
		<li><a href="#">Link one</a></li>
		<li><a href="#">Link two</a></li>
		<li><a href="#">Link three</a></li>
		<li><a href="#">Link four</a></li>
	</ul>

	<div>
		<div id="test"></div>
		<div id="test"></div>
		<div id="test"></div>
	</div>
</body>
</html>
```