<script lang="ts">
	import { page } from '$app/stores';
	let { children } = $props();
</script>

<nav class="flex h-12 w-screen flex-row justify-center bg-gray-600">
	<a
		href="/sels/profile"
		class="ml-10 mr-10 mt-3 hover:scale-125 hover:underline hover:underline-offset-2"
		class:active={$page.url.pathname === '/sels/profile'}>Profile</a
	>
	<a
		href="/sels/gacha"
		class="ml-10 mr-10 mt-3 hover:scale-125 hover:underline hover:underline-offset-2"
		class:active={$page.url.pathname === '/sels/gacha'}>Gacha</a
	>
	<a
		href={$page.url.pathname}
		class="ml-10 mr-10 mt-3 hover:scale-125 hover:underline hover:underline-offset-2"
		class:active={$page.url.pathname === '/sels/trade'}>Trade [WIP]</a
	>
	<a
		href="/sels/addcurrency"
		class="ml-10 mr-10 mt-3 animate-text bg-gradient-to-r from-indigo-500
            to-red-500 bg-clip-text
            font-bold text-transparent hover:scale-125 hover:underline hover:underline-offset-2"
		>Add Currency</a
	>
</nav>

{@render children()}

<!--<head>-->
<!--	<title>bars</title>-->
<!--	<meta charset="utf-8">-->
<!--	<meta name="viewport" content="width=device-width,initial-scale=1">-->
<!--	<meta name="robots" content="index,follow">-->
<!--	<meta name="generator" content="GrapesJS Studio">-->
<!--	<style>-->
<!--      * {-->
<!--          box-sizing: border-box;-->
<!--      }-->

<!--      body {-->
<!--          margin: 0;-->
<!--      }-->

<!--      .text-content {-->
<!--          line-height: 20px;-->
<!--      }-->

<!--      .text-main-content {-->
<!--          line-height: 30px;-->
<!--          font-size: 1.2rem;-->
<!--      }-->

<!--      #iau9 {-->
<!--          font-family: Arial, Helvetica, sans-serif;-->
<!--          background-image: linear-gradient(180deg, rgba(59, 130, 245, 0.11), white 14%);-->
<!--          background-position: 0px 0px;-->
<!--          background-size: 100% 100%;-->
<!--          background-repeat: repeat;-->
<!--          background-attachment: scroll;-->
<!--          background-origin: padding-box;-->
<!--          color: #475569;-->
<!--      }-->

<!--      .gjs-grid-column.feature-item {-->
<!--          padding-top: 15px;-->
<!--          padding-right: 15px;-->
<!--          padding-bottom: 15px;-->
<!--          padding-left: 15px;-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--          gap: 15px;-->
<!--          min-width: 30%;-->
<!--      }-->

<!--      .gjs-grid-column.testimonial-item {-->
<!--          padding-top: 15px;-->
<!--          padding-right: 15px;-->
<!--          padding-bottom: 15px;-->
<!--          padding-left: 15px;-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--          gap: 15px;-->
<!--          min-width: 45%;-->
<!--          background-color: rgba(247, 247, 247, 0.23);-->
<!--          border-top-left-radius: 5px;-->
<!--          border-top-right-radius: 5px;-->
<!--          border-bottom-right-radius: 5px;-->
<!--          border-bottom-left-radius: 5px;-->
<!--          align-items: flex-start;-->
<!--          border-top-width: 1px;-->
<!--          border-right-width: 1px;-->
<!--          border-bottom-width: 1px;-->
<!--          border-left-width: 1px;-->
<!--          border-top-style: solid;-->
<!--          border-right-style: solid;-->
<!--          border-bottom-style: solid;-->
<!--          border-left-style: solid;-->
<!--          border-top-color: rgba(0, 0, 0, 0.06);-->
<!--          border-right-color: rgba(0, 0, 0, 0.06);-->
<!--          border-bottom-color: rgba(0, 0, 0, 0.06);-->
<!--          border-left-color: rgba(0, 0, 0, 0.06);-->
<!--      }-->

<!--      .gjs-button {-->
<!--          vertical-align: top;-->
<!--          max-width: 100%;-->
<!--          display: inline-block;-->
<!--          text-decoration: none;-->
<!--          color: white;-->
<!--          padding-right: 15px;-->
<!--          padding-bottom: 10px;-->
<!--          padding-left: 15px;-->
<!--          background-color: rgb(36, 99, 235);-->
<!--          border-top-left-radius: 5px;-->
<!--          border-top-right-radius: 5px;-->
<!--          border-bottom-right-radius: 5px;-->
<!--          border-bottom-left-radius: 5px;-->
<!--          padding-top: 10px;-->
<!--          font-size: 1.1rem;-->
<!--          text-align: center;-->
<!--      }-->

<!--      .gjs-text-blue {-->
<!--          color: rgb(36, 99, 235);-->
<!--      }-->

<!--      .gjs-link:hover {-->
<!--          color: rgb(36, 99, 235);-->
<!--          text-decoration: underline;-->
<!--      }-->

<!--      .gjs-icon.gjs-feature-icon {-->
<!--          padding-top: 10px;-->
<!--          padding-right: 10px;-->
<!--          padding-bottom: 10px;-->
<!--          padding-left: 10px;-->
<!--          background-color: rgb(36, 99, 235);-->
<!--          color: white;-->
<!--          border-top-left-radius: 10px;-->
<!--          border-top-right-radius: 10px;-->
<!--          border-bottom-right-radius: 10px;-->
<!--          border-bottom-left-radius: 10px;-->
<!--      }-->

<!--      .gjs-image-box {-->
<!--          height: 200px;-->
<!--          width: 100%;-->
<!--      }-->

<!--      #i9bnk {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--      }-->

<!--      .navbar {-->
<!--          background-color: #222;-->
<!--          color: #ddd;-->
<!--          min-height: 50px;-->
<!--          width: 100%;-->
<!--      }-->

<!--      .navbar-container {-->
<!--          max-width: 950px;-->
<!--          margin: 0 auto;-->
<!--          width: 95%;-->
<!--      }-->

<!--      .navbar-items-c {-->
<!--          display: inline-block;-->
<!--          float: right;-->
<!--      }-->

<!--      .navbar-container::after {-->
<!--          content: "";-->
<!--          clear: both;-->
<!--          display: block;-->
<!--      }-->

<!--      .navbar-brand {-->
<!--          vertical-align: top;-->
<!--          display: inline-block;-->
<!--          padding: 5px;-->
<!--          min-height: 50px;-->
<!--          min-width: 50px;-->
<!--          color: inherit;-->
<!--          text-decoration: none;-->
<!--      }-->

<!--      .navbar-menu {-->
<!--          padding: 10px 0;-->
<!--          display: block;-->
<!--          float: right;-->
<!--          margin: 0;-->
<!--      }-->

<!--      .navbar-menu-link {-->
<!--          margin: 0;-->
<!--          color: inherit;-->
<!--          text-decoration: none;-->
<!--          display: inline-block;-->
<!--          padding: 10px 15px;-->
<!--      }-->

<!--      .navbar-burger {-->
<!--          margin: 10px 0;-->
<!--          width: 45px;-->
<!--          padding: 5px 10px;-->
<!--          display: none;-->
<!--          float: right;-->
<!--          cursor: pointer;-->
<!--      }-->

<!--      .navbar-burger-line {-->
<!--          padding: 1px;-->
<!--          background-color: white;-->
<!--          margin: 5px 0;-->
<!--      }-->

<!--      #i9v8g {-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--          width: 100%;-->
<!--      }-->

<!--      #imytl {-->
<!--          margin-right: 0px;-->
<!--          margin-left: 0px;-->
<!--          width: 100%;-->
<!--          max-width: 100%;-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--      }-->

<!--      #ii8su {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: double;-->
<!--          border-right-style: double;-->
<!--          border-bottom-style: double;-->
<!--          border-left-style: double;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          text-align: left;-->
<!--          width: 33%;-->
<!--      }-->

<!--      #itl8d {-->
<!--          padding-top: 5px;-->
<!--          padding-right: 5px;-->
<!--          padding-bottom: 5px;-->
<!--          padding-left: 5px;-->
<!--          width: 100%;-->
<!--          display: flex;-->
<!--          justify-content: space-around;-->
<!--      }-->

<!--      #izuli {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: double;-->
<!--          border-right-style: double;-->
<!--          border-bottom-style: double;-->
<!--          border-left-style: double;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          text-align: left;-->
<!--          width: 33%;-->
<!--      }-->

<!--      #itq25 {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: double;-->
<!--          border-right-style: double;-->
<!--          border-bottom-style: double;-->
<!--          border-left-style: double;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          text-align: left;-->
<!--          width: 33%;-->
<!--      }-->

<!--      #iykz8 {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: double;-->
<!--          border-right-style: double;-->
<!--          border-bottom-style: double;-->
<!--          border-left-style: double;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          text-align: left;-->
<!--          width: 33%;-->
<!--      }-->

<!--      #i7brx {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: double;-->
<!--          border-right-style: double;-->
<!--          border-bottom-style: double;-->
<!--          border-left-style: double;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          text-align: left;-->
<!--          width: 33%;-->
<!--      }-->

<!--      #iic6w {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          width: 200px;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--      }-->

<!--      .gjs-container {-->
<!--          width: 90%;-->
<!--          margin: 0 auto;-->
<!--          max-width: 1200px;-->
<!--      }-->

<!--      .gjs-section {-->
<!--          display: flex;-->
<!--          padding: 50px 0;-->
<!--      }-->

<!--      #i4q5js {-->
<!--          padding-top: 30px;-->
<!--          padding-bottom: 30px;-->
<!--          justify-content: space-around;-->
<!--          display: block;-->
<!--      }-->

<!--      #ivircb {-->
<!--          flex: 1 1 0%;-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--      }-->

<!--      #ilcgqj {-->
<!--          padding: 10px;-->
<!--          flex: 1 1 0%;-->
<!--          align-self: flex-start;-->
<!--      }-->

<!--      #iz3kji {-->
<!--          padding: 10px;-->
<!--          flex: 1 1 0%;-->
<!--          align-self: flex-start;-->
<!--      }-->

<!--      .gjs-grid-column {-->
<!--          flex: 1 1 0%;-->
<!--          padding: 5px 0;-->
<!--      }-->

<!--      .gjs-grid-row {-->
<!--          display: flex;-->
<!--          justify-content: flex-start;-->
<!--          align-items: stretch;-->
<!--          flex-direction: row;-->
<!--          min-height: auto;-->
<!--          padding: 10px 0;-->
<!--      }-->

<!--      #i46onn {-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--          padding-top: 0px;-->
<!--          padding-bottom: 0px;-->
<!--      }-->

<!--      #ijyrjn {-->
<!--          flex: 0 1 auto;-->
<!--          padding-top: 5px;-->
<!--          padding-right: 5px;-->
<!--          padding-bottom: 5px;-->
<!--          padding-left: 5px;-->
<!--      }-->

<!--      #ixthae {-->
<!--          padding: 10px;-->
<!--          flex: 1 1 0%;-->
<!--          align-self: flex-start;-->
<!--      }-->

<!--      #imzuni {-->
<!--          padding-top: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          flex: 0 1 auto;-->
<!--      }-->

<!--      #iilzb {-->
<!--          background-image: url("https://placehold.co/150/777/white.png?text=IMAGE");-->
<!--          background-position: 0px 0px;-->
<!--          background-size: 150px 150px;-->
<!--          background-repeat: repeat;-->
<!--          background-attachment: scroll;-->
<!--          background-origin: padding-box;-->
<!--      }-->

<!--      #i8p0ce {-->
<!--          flex-basis: 30%;-->
<!--          flex-grow: 0;-->
<!--          display: flex;-->
<!--          justify-content: space-around;-->
<!--          align-items: center;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--      }-->

<!--      #ia9992 {-->
<!--          min-height: 250px;-->
<!--      }-->

<!--      #i8o103 {-->
<!--          display: flex;-->
<!--          align-items: center;-->
<!--          justify-content: space-around;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--      }-->

<!--      #ic3xtq {-->
<!--          display: flex;-->
<!--          align-items: center;-->
<!--          justify-content: space-around;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--      }-->

<!--      #i9155v {-->
<!--          display: flex;-->
<!--          align-items: center;-->
<!--          justify-content: space-around;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--      }-->

<!--      #idueqb {-->
<!--          display: flex;-->
<!--          align-items: center;-->
<!--          justify-content: space-around;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--      }-->

<!--      #i9z21 {-->
<!--          display: flex;-->
<!--          justify-content: space-around;-->
<!--      }-->

<!--      .gjs-link {-->
<!--          vertical-align: top;-->
<!--          max-width: 100%;-->
<!--          display: inline-block;-->
<!--          text-decoration: none;-->
<!--          color: inherit;-->
<!--      }-->

<!--      #icomdq {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--          height: 66%;-->
<!--          text-align: center;-->
<!--          display: flex;-->
<!--          justify-content: space-around;-->
<!--          flex-direction: column;-->
<!--          width: 66%;-->
<!--      }-->

<!--      #imlwxq {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          width: 200px;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--      }-->

<!--      #ipo6ij {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          width: 200px;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--      }-->

<!--      #im274b {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          width: 200px;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--      }-->

<!--      #i3u0u6 {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          width: 200px;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--      }-->

<!--      #iq491 {-->
<!--          background-image: url("https://placehold.co/150/777/white.png?text=IMAGE");-->
<!--          background-position: 0px 0px;-->
<!--          background-size: 150px 150px;-->
<!--          background-repeat: repeat;-->
<!--          background-attachment: scroll;-->
<!--          background-origin: padding-box;-->
<!--      }-->

<!--      #ilw2j {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--      }-->

<!--      #is70z {-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--      }-->

<!--      #ivmp0j {-->
<!--          flex-direction: column;-->
<!--          align-items: flex-end;-->
<!--          gap: 5px;-->
<!--          display: flex;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          justify-content: space-around;-->
<!--      }-->

<!--      #i6addv {-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--          gap: 5px;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          justify-content: space-around;-->
<!--          align-items: flex-start;-->
<!--      }-->

<!--      #izkads {-->
<!--          text-align: center;-->
<!--      }-->

<!--      #iaqogc {-->
<!--          text-align: center;-->
<!--      }-->

<!--      #io9ldo {-->
<!--          display: flex;-->
<!--          justify-content: space-around;-->
<!--      }-->

<!--      #iojh5j {-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          flex: 1 1 0%;-->
<!--          align-self: flex-start;-->
<!--      }-->

<!--      #i19a8 {-->
<!--          width: 0px;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          margin-top: 0px;-->
<!--          margin-right: 0px;-->
<!--          margin-bottom: 0px;-->
<!--          margin-left: 0px;-->
<!--      }-->

<!--      #usrnme_show {-->
<!--          padding: 10px;-->
<!--      }-->

<!--      #maxrare_show {-->
<!--          padding: 10px;-->
<!--      }-->

<!--      #selamnt_show {-->
<!--          padding: 10px;-->
<!--      }-->

<!--      #itdoz2 {-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          padding-top: 0px;-->
<!--          min-height: 50px;-->
<!--      }-->

<!--      #irwezo {-->
<!--          padding: 10px;-->
<!--          text-align: center;-->
<!--      }-->

<!--      #iqdukq {-->
<!--          background-image: url("https://placehold.co/150/777/white.png?text=IMAGE");-->
<!--          background-position: 0px 0px;-->
<!--          background-size: 150px 150px;-->
<!--          background-repeat: repeat;-->
<!--          background-attachment: scroll;-->
<!--          background-origin: padding-box;-->
<!--      }-->

<!--      * {-->
<!--          box-sizing: border-box;-->
<!--      }-->

<!--      body {-->
<!--          margin: 0;-->
<!--      }-->

<!--      #ilw2j-2 {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--      }-->

<!--      #is70z-2 {-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--      }-->

<!--      #ivmp0j-2 {-->
<!--          flex-direction: column;-->
<!--          align-items: flex-end;-->
<!--          gap: 5px;-->
<!--          display: flex;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          justify-content: space-around;-->
<!--      }-->

<!--      #i6addv-2 {-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--          align-items: flex-start;-->
<!--          gap: 5px;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          justify-content: space-around;-->
<!--      }-->

<!--      #izkads-2 {-->
<!--          text-align: center;-->
<!--      }-->

<!--      #iaqogc-2 {-->
<!--          text-align: center;-->
<!--      }-->

<!--      #io9ldo-2 {-->
<!--          display: flex;-->
<!--          justify-content: space-around;-->
<!--      }-->

<!--      #itdoz2-2 {-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          padding-top: 0px;-->
<!--          min-height: 50px;-->
<!--      }-->

<!--      #irwezo-2 {-->
<!--          padding: 10px;-->
<!--          text-align: center;-->
<!--      }-->

<!--      #i5r0m {-->
<!--          background-image: url("https://placehold.co/150/777/white.png?text=IMAGE");-->
<!--          background-position: 0px 0px;-->
<!--          background-size: 150px 150px;-->
<!--          background-repeat: repeat;-->
<!--          background-attachment: scroll;-->
<!--          background-origin: padding-box;-->
<!--      }-->

<!--      #i7yb5m {-->
<!--          text-align: center;-->
<!--      }-->

<!--      #i63ytn {-->
<!--          text-align: center;-->
<!--      }-->

<!--      #igck37 {-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          min-height: 50px;-->
<!--      }-->

<!--      #ioigrj {-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--      }-->

<!--      #textoutput {-->
<!--          padding: 10px;-->
<!--          text-align: center;-->
<!--      }-->

<!--      #if6st2 {-->
<!--          padding: 10px;-->
<!--          text-align: center;-->
<!--      }-->

<!--      #ig4w4m {-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--      }-->

<!--      #ihkgv1 {-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          min-height: 50px;-->
<!--      }-->

<!--      #iujupk {-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--      }-->

<!--      #ihq9s2 {-->
<!--          padding: 10px;-->
<!--          text-align: center;-->
<!--      }-->

<!--      #i29kmi {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          width: 200px;-->
<!--      }-->

<!--      #iyx96j {-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          justify-content: space-around;-->
<!--          flex-direction: column;-->
<!--          align-items: center;-->
<!--      }-->

<!--      #i9i3qv {-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--      }-->

<!--      #im9mga {-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          display: flex;-->
<!--          justify-content: space-around;-->
<!--          align-self: stretch;-->
<!--          flex: 0 0 auto;-->
<!--      }-->

<!--      #ihu1so {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          width: 200px;-->
<!--      }-->

<!--      #ipa1om {-->
<!--          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');-->
<!--          background-size: contain;-->
<!--          background-position: center center;-->
<!--          background-attachment: scroll;-->
<!--          background-repeat: no-repeat;-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          width: 200px;-->
<!--      }-->

<!--      #iqa4ai {-->
<!--          display: flex;-->
<!--          justify-content: space-around;-->
<!--      }-->

<!--      #igdqjd {-->
<!--          width: 0px;-->
<!--          padding-top: 0px;-->
<!--          padding-right: 0px;-->
<!--          padding-bottom: 0px;-->
<!--          padding-left: 0px;-->
<!--          margin-top: 0px;-->
<!--          margin-right: 0px;-->
<!--          margin-bottom: 0px;-->
<!--          margin-left: 0px;-->
<!--      }-->

<!--      #iys6kh {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: double;-->
<!--          border-right-style: double;-->
<!--          border-bottom-style: double;-->
<!--          border-left-style: double;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          text-align: left;-->
<!--          width: 33%;-->
<!--      }-->

<!--      #ixe2na {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: double;-->
<!--          border-right-style: double;-->
<!--          border-bottom-style: double;-->
<!--          border-left-style: double;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          text-align: left;-->
<!--          width: 33%;-->
<!--      }-->

<!--      #ifv9cc {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: double;-->
<!--          border-right-style: double;-->
<!--          border-bottom-style: double;-->
<!--          border-left-style: double;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          text-align: left;-->
<!--          width: 33%;-->
<!--      }-->

<!--      #irwas8 {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: double;-->
<!--          border-right-style: double;-->
<!--          border-bottom-style: double;-->
<!--          border-left-style: double;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          text-align: left;-->
<!--          width: 33%;-->
<!--      }-->

<!--      #im1tn6 {-->
<!--          color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: double;-->
<!--          border-right-style: double;-->
<!--          border-bottom-style: double;-->
<!--          border-left-style: double;-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          text-align: left;-->
<!--          width: 33%;-->
<!--      }-->

<!--      #ie39ur {-->
<!--          padding-top: 5px;-->
<!--          padding-right: 5px;-->
<!--          padding-bottom: 5px;-->
<!--          padding-left: 5px;-->
<!--          width: 100%;-->
<!--          display: flex;-->
<!--          justify-content: space-around;-->
<!--      }-->

<!--      #iob4zo {-->
<!--          display: flex;-->
<!--          justify-content: space-around;-->
<!--      }-->

<!--      #igevrg {-->
<!--          margin-right: 0px;-->
<!--          margin-left: 0px;-->
<!--          width: 100%;-->
<!--          max-width: 100%;-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--      }-->

<!--      #io9be4 {-->
<!--          background-color: rgba(190, 190, 190, 1);-->
<!--          border-top-color: rgba(0, 0, 0, 1);-->
<!--          border-right-color: rgba(0, 0, 0, 1);-->
<!--          border-bottom-color: rgba(0, 0, 0, 1);-->
<!--          border-left-color: rgba(0, 0, 0, 1);-->
<!--          border-top-style: groove;-->
<!--          border-right-style: groove;-->
<!--          border-bottom-style: groove;-->
<!--          border-left-style: groove;-->
<!--          width: 100%;-->
<!--      }-->

<!--      @media (max-width: 992px) {-->
<!--          .gjs-grid-row {-->
<!--              flex-direction: column;-->
<!--          }-->
<!--      }-->

<!--      @media (max-width: 768px) {-->
<!--          .navbar-items-c {-->
<!--              display: none;-->
<!--              width: 100%;-->
<!--          }-->

<!--          .navbar-burger {-->
<!--              display: block;-->
<!--          }-->

<!--          .navbar-menu {-->
<!--              width: 100%;-->
<!--          }-->

<!--          .navbar-menu-link {-->
<!--              display: block;-->
<!--          }-->
<!--      }-->
<!--	</style>-->
<!--</head>-->

<!--<body id="isqhop">-->
<!--<div class="navbar" id="io9be4">-->
<!--	<div data-gjs="navbar" class="navbar-container" id="igevrg">-->
<!--		<div id="igdqjd" class="navbar-burger"></div>-->
<!--		<div data-gjs="navbar-items" class="navbar-items-c" id="iob4zo">-->
<!--			<nav class="navbar-menu" id="ie39ur"><a title="" class="navbar-menu-link" id="iys6kh">SEL-->
<!--				Paradise<br/></a><a class="navbar-menu-link" id="ixe2na">Get SEL<br/></a><a class="navbar-menu-link"-->
<!--																																										id="ifv9cc">Trade SEL<br/></a><a class="navbar-menu-link" id="irwas8">Add SPC<br/></a><a-->
<!--				class="navbar-menu-link" id="im1tn6">Help</a></nav>-->
<!--		</div>-->
<!--	</div>-->
<!--</div>-->
<!--</body>-->

<style>
	.active {
		color: greenyellow;
		transition: all;
	}
</style>
