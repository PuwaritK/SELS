<script lang="ts">
	let { data } = $props();
	let sex: string = $state('');
	let type: string = $state('');
	const images = import.meta.glob('$lib/sprites/*.png', { eager: true });
	if (data.shownSel != null) {
		switch (data.shownSel?.sex_id) {
			case 1: {
				sex = 'm';
				break;
			}
			case 2: {
				sex = 'f';
				break;
			}
			case 3: {
				sex = 's';
				break;
			}
		}
		switch (data.shownSel.type_id) {
			case 1: {
				type = 'harper';
				break;
			}
			case 2: {
				type = 'grey';
				break;
			}
			case 3: {
				type = 'baikal';
				break;
			}
			case 4: {
				type = 'elephant';
				break;
			}
			case 5: {
				type = 'leopard';
				break;
			}
			case 6: {
				type = 'sealion';
				break;
			}
			case 7: {
				type = 'walrus';
				break;
			}
		}
	}
</script>

<p>profile</p>

<!--<div>-->
<!--	{#if data.shownSel != null}-->
<!--		<div>-->
<!--			<div>-->
<!--				{#await import(`$lib/sprites/sx-${sex}.png`) then { default: src }}-->
<!--					<img {src} alt="" class="z-1 absolute" />-->
<!--				{/await}-->
<!--			</div>-->
<!--			<div>-->
<!--				{#await import(`$lib/sprites/type-${type}.png`) then { default: src }}-->
<!--					<img {src} alt="" class="z-2 absolute" />-->
<!--				{/await}-->
<!--			</div>-->
<!--			<div>-->
<!--				{#await import(`$lib/sprites/tier-${data.shownSel.tier_id}.png`) then { default: src }}-->
<!--					<img {src} alt="" class="z-3 absolute" />-->
<!--				{/await}-->
<!--			</div>-->
<!--		</div>-->
<!--	{:else}-->
<!--		<div>-->
<!--			{#await import(`$lib/sprites/sx-s.png`) then { default: src }}-->
<!--				<img {src} alt="" class="z-3 absolute" />-->
<!--			{/await}-->
<!--		</div>-->
<!--	{/if}-->
<!--	<div></div>-->
<!--	<div></div>-->
<!--</div>-->

<!--2023-11-15 23h starts here-->
<head>
	<title>profile</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="robots" content="index,follow">
	<meta name="generator" content="GrapesJS Studio">
	<style>
      * {
          box-sizing: border-box;
      }

      body {
          margin: 0;
      }

      .text-content {
          line-height: 20px;
      }

      .text-main-content {
          line-height: 30px;
          font-size: 1.2rem;
      }

      #iau9 {
          font-family: Arial, Helvetica, sans-serif;
          background-image: linear-gradient(180deg, rgba(59, 130, 245, 0.11), white 14%);
          background-position: 0px 0px;
          background-size: 100% 100%;
          background-repeat: repeat;
          background-attachment: scroll;
          background-origin: padding-box;
          color: #475569;
      }

      .gjs-grid-column.feature-item {
          padding-top: 15px;
          padding-right: 15px;
          padding-bottom: 15px;
          padding-left: 15px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          min-width: 30%;
      }

      .gjs-grid-column.testimonial-item {
          padding-top: 15px;
          padding-right: 15px;
          padding-bottom: 15px;
          padding-left: 15px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          min-width: 45%;
          background-color: rgba(247, 247, 247, 0.23);
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          align-items: flex-start;
          border-top-width: 1px;
          border-right-width: 1px;
          border-bottom-width: 1px;
          border-left-width: 1px;
          border-top-style: solid;
          border-right-style: solid;
          border-bottom-style: solid;
          border-left-style: solid;
          border-top-color: rgba(0, 0, 0, 0.06);
          border-right-color: rgba(0, 0, 0, 0.06);
          border-bottom-color: rgba(0, 0, 0, 0.06);
          border-left-color: rgba(0, 0, 0, 0.06);
      }

      .gjs-button {
          vertical-align: top;
          max-width: 100%;
          display: inline-block;
          text-decoration: none;
          color: white;
          padding-right: 15px;
          padding-bottom: 10px;
          padding-left: 15px;
          background-color: rgb(36, 99, 235);
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          padding-top: 10px;
          font-size: 1.1rem;
          text-align: center;
      }

      .gjs-text-blue {
          color: rgb(36, 99, 235);
      }

      .gjs-link:hover {
          color: rgb(36, 99, 235);
          text-decoration: underline;
      }

      .gjs-icon.gjs-feature-icon {
          padding-top: 10px;
          padding-right: 10px;
          padding-bottom: 10px;
          padding-left: 10px;
          background-color: rgb(36, 99, 235);
          color: white;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          border-bottom-left-radius: 10px;
      }

      .gjs-image-box {
          height: 200px;
          width: 100%;
      }

      #i9bnk {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
          background-size: contain;
          background-position: center center;
          background-attachment: scroll;
          background-repeat: no-repeat;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          border-top-style: groove;
          border-right-style: groove;
          border-bottom-style: groove;
          border-left-style: groove;
      }

      .navbar {
          background-color: #222;
          color: #ddd;
          min-height: 50px;
          width: 100%;
      }

      .navbar-container {
          max-width: 950px;
          margin: 0 auto;
          width: 95%;
      }

      .navbar-items-c {
          display: inline-block;
          float: right;
      }

      .navbar-container::after {
          content: "";
          clear: both;
          display: block;
      }

      .navbar-brand {
          vertical-align: top;
          display: inline-block;
          padding: 5px;
          min-height: 50px;
          min-width: 50px;
          color: inherit;
          text-decoration: none;
      }

      .navbar-menu {
          padding: 10px 0;
          display: block;
          float: right;
          margin: 0;
      }

      .navbar-menu-link {
          margin: 0;
          color: inherit;
          text-decoration: none;
          display: inline-block;
          padding: 10px 15px;
      }

      .navbar-burger {
          margin: 10px 0;
          width: 45px;
          padding: 5px 10px;
          display: none;
          float: right;
          cursor: pointer;
      }

      .navbar-burger-line {
          padding: 1px;
          background-color: white;
          margin: 5px 0;
      }

      #i9v8g {
          background-color: rgba(190, 190, 190, 1);
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          border-top-style: groove;
          border-right-style: groove;
          border-bottom-style: groove;
          border-left-style: groove;
      }

      #imytl {
          display: flex;
      }

      #ii8su {
          width: 280px;
          color: rgba(0, 0, 0, 1);
          border-top-style: double;
          border-right-style: double;
          border-bottom-style: double;
          border-left-style: double;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          text-align: left;
      }

      #itl8d {
          width: 100%;
          flex-wrap: nowrap;
          flex-direction: row;
          display: flex;
          position: relative;
      }

      #izuli {
          width: 280px;
          color: rgba(0, 0, 0, 1);
          border-top-style: double;
          border-right-style: double;
          border-bottom-style: double;
          border-left-style: double;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          text-align: left;
      }

      #itq25 {
          width: 280px;
          color: rgba(0, 0, 0, 1);
          border-top-style: double;
          border-right-style: double;
          border-bottom-style: double;
          border-left-style: double;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          text-align: left;
      }

      #iykz8 {
          width: 280px;
          color: rgba(0, 0, 0, 1);
          border-top-style: double;
          border-right-style: double;
          border-bottom-style: double;
          border-left-style: double;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          text-align: left;
          position: relative;
      }

      #i7brx {
          width: 280px;
          color: rgba(0, 0, 0, 1);
          border-top-style: double;
          border-right-style: double;
          border-bottom-style: double;
          border-left-style: double;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          text-align: left;
      }

      #iic6w {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
          background-size: contain;
          background-position: center center;
          background-attachment: scroll;
          background-repeat: no-repeat;
          width: 200px;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          border-top-style: groove;
          border-right-style: groove;
          border-bottom-style: groove;
          border-left-style: groove;
      }

      .gjs-container {
          width: 90%;
          margin: 0 auto;
          max-width: 1200px;
      }

      .gjs-section {
          display: flex;
          padding: 50px 0;
      }

      #i4q5js {
          padding-top: 30px;
          padding-bottom: 30px;
      }

      #ivircb {
          flex: 1 1 0%;
          display: flex;
          flex-direction: column;
      }

      #ilcgqj {
          padding: 10px;
          flex-direction: row;
          flex: 1 1 0%;
          align-self: flex-start;
      }

      #iz3kji {
          padding: 10px;
          flex-direction: row;
          flex: 1 1 0%;
          align-self: flex-start;
      }

      .gjs-grid-column {
          flex: 1 1 0%;
          padding: 5px 0;
      }

      .gjs-grid-row {
          display: flex;
          justify-content: flex-start;
          align-items: stretch;
          flex-direction: row;
          min-height: auto;
          padding: 10px 0;
      }

      #i46onn {
          background-color: rgba(190, 190, 190, 1);
          padding-top: 0px;
          padding-bottom: 0px;
      }

      #ijyrjn {
          flex: 0 1 auto;
          padding-top: 5px;
          padding-right: 5px;
          padding-bottom: 5px;
          padding-left: 5px;
      }

      #ixthae {
          padding: 10px;
          flex-direction: row;
          flex: 1 1 0%;
          align-self: flex-start;
      }

      #imzuni {
          padding-top: 0px;
          padding-bottom: 0px;
          flex: 1 1 0%;
      }

      #iilzb {
          background-image: url("https://placehold.co/150/777/white.png?text=IMAGE");
          background-position: 0px 0px;
          background-size: 150px 150px;
          background-repeat: repeat;
          background-attachment: scroll;
          background-origin: padding-box;
      }

      #i8p0ce {
          flex-basis: 30%;
          flex-grow: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding-top: 0px;
          padding-right: 0px;
          padding-bottom: 0px;
          padding-left: 0px;
      }

      #ia9992 {
          min-height: 250px;
      }

      #i8o103 {
          display: flex;
          align-items: center;
          justify-content: space-around;
      }

      #ic3xtq {
          display: flex;
          align-items: center;
          justify-content: space-around;
      }

      #i9155v {
          display: flex;
          align-items: center;
          justify-content: space-around;
      }

      #idueqb {
          display: flex;
          align-items: center;
          justify-content: space-around;
      }

      #i9z21 {
          position: relative;
          left: -225px;
      }

      .gjs-link {
          vertical-align: top;
          max-width: 100%;
          display: inline-block;
          text-decoration: none;
          color: inherit;
      }

      #icomdq {
          color: rgba(0, 0, 0, 1);
          background-color: rgba(190, 190, 190, 1);
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          border-top-style: groove;
          border-right-style: groove;
          border-bottom-style: groove;
          border-left-style: groove;
          width: 275px;
          height: 175px;
          text-align: center;
          padding-top: 75px;
      }

      #imlwxq {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
          background-size: contain;
          background-position: center center;
          background-attachment: scroll;
          background-repeat: no-repeat;
          width: 200px;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          border-top-style: groove;
          border-right-style: groove;
          border-bottom-style: groove;
          border-left-style: groove;
      }

      #ipo6ij {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
          background-size: contain;
          background-position: center center;
          background-attachment: scroll;
          background-repeat: no-repeat;
          width: 200px;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          border-top-style: groove;
          border-right-style: groove;
          border-bottom-style: groove;
          border-left-style: groove;
      }

      #im274b {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
          background-size: contain;
          background-position: center center;
          background-attachment: scroll;
          background-repeat: no-repeat;
          width: 200px;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          border-top-style: groove;
          border-right-style: groove;
          border-bottom-style: groove;
          border-left-style: groove;
      }

      #i3u0u6 {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
          background-size: contain;
          background-position: center center;
          background-attachment: scroll;
          background-repeat: no-repeat;
          width: 200px;
          border-top-color: rgba(0, 0, 0, 1);
          border-right-color: rgba(0, 0, 0, 1);
          border-bottom-color: rgba(0, 0, 0, 1);
          border-left-color: rgba(0, 0, 0, 1);
          border-top-style: groove;
          border-right-style: groove;
          border-bottom-style: groove;
          border-left-style: groove;
      }

      @media (max-width: 992px) {
          .gjs-grid-row {
              flex-direction: column;
          }
      }

      @media (max-width: 768px) {
          .navbar-items-c {
              display: none;
              width: 100%;
          }

          .navbar-burger {
              display: block;
          }

          .navbar-menu {
              width: 100%;
          }

          .navbar-menu-link {
              display: block;
          }
      }
	</style>
</head>

<body id="iilzb">
<div id="i9bnk" class="gjs-image-box"></div>
<div id="i9v8g" class="navbar">
	<div data-gjs="navbar" id="imytl" class="navbar-container">
		<div id="i19a8" class="navbar-burger">
			<div class="navbar-burger-line"></div>
			<div class="navbar-burger-line"></div>
			<div class="navbar-burger-line"></div>
		</div>
		<div data-gjs="navbar-items" id="i9z21" class="navbar-items-c">
			<nav id="itl8d" class="navbar-menu"><a id="ii8su" title="" class="navbar-menu-link">User's SEL
				Paradise<br/></a><a id="i7brx" class="navbar-menu-link">Get SEL<br/></a><a id="izuli"
																																									 class="navbar-menu-link">Trade SEL<br/></a><a id="itq25" class="navbar-menu-link">Add SPC<br/></a><a
				id="iykz8" class="navbar-menu-link">Help</a></nav>
		</div>
	</div>
</div>
<section id="i4q5js" class="gjs-section">
	<div id="ivircb" class="gjs-container">
		<div id="i46onn" class="gjs-grid-row">
			<div id="ijyrjn" class="gjs-grid-column">
				<div id="iic6w" class="gjs-image-box"></div>
			</div>
			<div id="imzuni" class="gjs-grid-column">
				<div id="ilcgqj" >Username:</div>
				<div id="iz3kji">SEL Amount:<br/></div>
				<div id="ixthae">Highest Rarity:<br/></div>
			</div>
		</div>
	</div>
</section>
<div id="ia9992" class="gjs-grid-row">
	<div id="i8p0ce" class="gjs-grid-column"><a id="icomdq" href="./manage.html" class="gjs-link">Manage SEL!<br/></a>
	</div>
	<div id="i8o103" class="gjs-grid-column">
		<div id="imlwxq" class="gjs-image-box"></div>
	</div>
	<div id="idueqb" class="gjs-grid-column">
		<div id="ipo6ij" class="gjs-image-box"></div>
	</div>
	<div id="i9155v" class="gjs-grid-column">
		<div id="im274b" class="gjs-image-box"></div>
	</div>
	<div id="ic3xtq" class="gjs-grid-column">
		<div id="i3u0u6" class="gjs-image-box"></div>
	</div>
</div>
</body>
<!--2023-11-15 23h ends here-->