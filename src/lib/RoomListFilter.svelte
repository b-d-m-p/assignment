<script>
	import Input from './Input.svelte'
	let value = "Today";
	let inputType = "text"
	let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  let localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
  console.log(localISOTime)  // => '2015-01-26T06:40:36.181'
	let theDate = localISOTime.slice(0, 10);
	console.log(theDate);
// 	let theDate = new Date().toISOString().slice(0, 10);
	function inputTodaysDate(e) {
		inputType = "date";
		e.target.value = theDate;
	}
</script>

<input type="text" class="bg-red-300" />
<Input type={inputType} on:focus={inputTodaysDate} {value}/>
<div class="mt-8 mb-4 md:flex md:items-center md:justify-between">
	<form
		action=""
		class="flex-col md:flex-row flex-1 flex items-center min-w-0 gap-x-4 gap-y-3 flex-wrap"
	>
		<fieldset class="text-xl md:text-base font-semibold leading-7 text-gray-900 whitespace-nowrap ">
			Find a room
		</fieldset>

		<div class="bg-gray-100 rounded-2xl py-2 px-4 flex flex-row items-center gap-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="flex-shrink-0 mr-1.5 h-[32px] w-[32px] text-weworkteal-600"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
			<label for="date" class="text-md font-semibold text-gray-700">Date</label>

			<div class="relative">
				<div class="chevron-down" />
				<input
					type="text"
					id="filterDate"
					name="date"
					placeholder="Today"
					onfocus="(this.type='date')"
					class="px-3 py-1 inline-flex text-sm ml-2 leading-5 font-bold rounded-full bg-weworkteal-500 text-white hover:bg-weworkteal-600"
				/>
			</div>
			<button class="text-sm mx-4 text-gray-500">Change</button>
		</div>
		<div
			class="flex-col md:flex-row bg-gray-100 rounded-2xl py-2 px-4 flex items-center gap-1  gap-y-2"
		>
			<div class="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="flex-shrink-0 mr-1.5 h-[32px] w-[32px] text-weworkteal-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
				<label for="people-count" class="text-md font-semibold text-gray-700">People</label>
			</div>

			<div
				class="flex flex-row rounded-lg bg-weworkteal-100 text-weworkteal-600 leading-5  py-2  divide-x md:ml-2 divide-solid divide-weworkteal-400 "
			>
				<div class="people-count">1</div>
				<div class="people-count">2</div>
				<div class="people-count selected">3</div>
				<div class="people-count">4</div>
				<div class="people-count">5</div>
			</div>

			<div class="flex items-center">
				<input
					type="number"
					name="custom-people-count"
					id="custom-people-count"
					class="w-20 ml-2 pt-[4px] pb-[2px]  px-2 rounded-lg shadow-inner block inner-shadow"
					placeholder="Other"
					min="6"
				/>

				<button class="text-sm mx-4 text-gray-500">Clear</button>
			</div>
		</div>
		<button class="text-sm mx-4 text-gray-500">Reset</button>
	</form>
</div>

<style>
	.people-count {
		@apply text-center w-10 flex justify-center items-center -mr-[2px];
	}

	.people-count.selected {
		@apply bg-weworkteal-500 -my-2 z-10 rounded-xl font-bold text-white;
	}

	.people-count.selected:hover {
		@apply bg-weworkteal-600;
	}

	.people-count:hover {
		@apply bg-weworkteal-200 -my-2  z-10 rounded-xl font-bold text-white cursor-pointer;
		border: none !important;
	}

	input[type='date'] {
	}

	#filterDate:focus-visible {
		@apply outline-none;
	}
	/* input[type='date']::-webkit-inner-spin-button,
	input[type='date']::-webkit-calendar-picker-indicator {
		opacity: 0;
	} */

	#filterDate::-webkit-calendar-picker-indicator {
		display: block;
		background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3IDEwTDEyIDE1TDcgMTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
			no-repeat;
		width: 20px;
		height: 20px;
		border-width: thin;
	}

	#filterDate {
		color: #fff;
		width: 145px;
		height: 32px;
	}

	#filterDate::placeholder {
		color: #fff;
	}

	.chevron-down {
		position: absolute;
		pointer-events: none;
		background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3IDEwTDEyIDE1TDcgMTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
			no-repeat;
		width: 20px;
		height: 20px;
		right: 16px;
		top: 4px;
	}
</style>
