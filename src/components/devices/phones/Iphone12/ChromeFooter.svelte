<script lang ts>
  export let colorMode
</script>

<svg
  class="footer"
  width="375"
  height="40"
  viewBox="0 0 375 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="375" height="0.33" class={`${colorMode} divider`} />
  <g clip-path="url(#clip0_460_444)">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M329 22C329 23.6569 327.657 25 326 25C324.343 25 323 23.6569 323 22C323 20.3431 324.343 19 326 19C327.657 19 329 20.3431 329 22ZM339 22C339 23.6569 337.657 25 336 25C334.343 25 333 23.6569 333 22C333 20.3431 334.343 19 336 19C337.657 19 339 20.3431 339 22ZM346 25C347.657 25 349 23.6569 349 22C349 20.3431 347.657 19 346 19C344.343 19 343 20.3431 343 22C343 23.6569 344.343 25 346 25Z"
      class={`${colorMode} primary`}
    />
  </g>
  <rect
    x="254"
    y="11"
    width="22"
    height="22"
    rx="4"
    class={`${colorMode} primary-stroke`}
    stroke-width="2.5"
  />
  <path
    d="M264.803 27H266.72V17.8403H264.81L262.442 19.4844V21.2109L264.689 19.6494H264.803V27Z"
    class={`${colorMode} primary`}
  />
  <g clip-path="url(#clip1_460_444)">
    <circle cx="188" cy="22" r="18" class={`${colorMode} circle`} />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M189.375 11C189.375 10.2406 188.759 9.625 188 9.625C187.241 9.625 186.625 10.2406 186.625 11V20.625H177C176.241 20.625 175.625 21.2406 175.625 22C175.625 22.7594 176.241 23.375 177 23.375H186.625V33C186.625 33.7594 187.241 34.375 188 34.375C188.759 34.375 189.375 33.7594 189.375 33V23.375H199.5C200.259 23.375 200.875 22.7594 200.875 22C200.875 21.2406 200.259 20.625 199.5 20.625H189.375V11Z"
      class={`${colorMode} primary`}
    />
  </g>
  <g clip-path="url(#clip2_460_444)">
    <path
      d="M110 10L107.885 12.115L116.255 20.5H98V23.5H116.255L107.885 31.885L110 34L122 22L110 10Z"
      class={`${colorMode} secondary`}
    />
  </g>
  <g clip-path="url(#clip3_460_444)">
    <path
      d="M32 10L34.115 12.115L25.745 20.5H44V23.5H25.745L34.115 31.885L32 34L20 22L32 10Z"
      class={`${colorMode} primary`}
    />
  </g>
  <defs>
    <clipPath id="clip0_460_444">
      <rect width="26" height="6" fill="white" transform="translate(323 19)" />
    </clipPath>
    <clipPath id="clip1_460_444">
      <rect width="36" height="36" fill="white" transform="translate(170 4)" />
    </clipPath>
    <clipPath id="clip2_460_444">
      <rect width="36" height="36" fill="white" transform="translate(92 4)" />
    </clipPath>
    <clipPath id="clip3_460_444">
      <rect
        width="36"
        height="36"
        fill="white"
        transform="matrix(-1 0 0 1 50 4)"
      />
    </clipPath>
  </defs>
</svg>

<style lang="scss">
  $fill-color-1-light-mode: #ccc;
  $fill-color-2-light-mode: #80858a;
  $fill-color-3-light-mode: #d4d4d4;
  $fill-color-circle-light-mode: #e8eaed;
  $stroke-color-1-light-mode: #80858a;
  $fill-color-1-dark-mode: #36373b;
  $fill-color-2-dark-mode: #e8e9ed;
  $fill-color-3-dark-mode: #868789;
  $fill-color-circle-dark-mode: #5e6267;
  $stroke-color-1-dark-mode: #e8e9ed;

  .footer {
    position: absolute;
    bottom: 56px;
    left: 25px;
    width: 390px;
  }
  .lightMode {
    &.divider {
      fill: $fill-color-1-light-mode;
    }
    &.primary {
      fill: $fill-color-2-light-mode;
    }
    &.circle {
      fill: $fill-color-circle-light-mode;
    }
    &.primary-stroke {
      stroke: $stroke-color-1-light-mode;
    }
    &.secondary {
      fill: $fill-color-3-light-mode;
    }
  }
  .darkMode {
    &.divider {
      fill: $fill-color-1-dark-mode;
    }
    &.primary {
      fill: $fill-color-2-dark-mode;
    }
    &.circle {
      fill: $fill-color-circle-dark-mode;
    }
    &.primary-stroke {
      stroke: $stroke-color-1-dark-mode;
    }
    &.secondary {
      fill: $fill-color-3-dark-mode;
    }
  }
</style>
