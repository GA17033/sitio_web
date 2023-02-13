<template>
  <div class="container">
    <div class="botones">
      <router-link to="/" class="btn"><i class="fa-solid fa-arrow-left"></i> Atras </router-link>
      <button class="button"><i class="fa-regular fa-file-pdf"></i> Descargar Pdf</button>
    </div>
    <div class="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-7xl">
      <div
        class="
          w-full
          mx-auto
          block
          shadow-md
          rounded
          object-cover object-left-top
          overflow-hidden
          select-none
        "
        style="margin-bottom: 1.25rem"
      >
        <div style="position: relative">
          <canvas
            style="
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
            "
          ></canvas>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 595.28 841.89"
            style="direction: ltr"
            class="document-preview"
          >
            <rect fill="white" height="100%" width="100%"></rect>
            <path
              fill="#333333"
              d="M 0,0 L 200,0 C 200,0,200,0,200,0 L 200,841.89 C 200,841.89,200,841.89,200,841.89 L 0,841.89 C 0,841.89,0,841.89,0,841.89 L 0,0 C 0,0,0,0,0,0 Z"
            ></path>
            <path
              fill="white"
              d="M 30,30 L 565.28,30 C 565.28,30,565.28,30,565.28,30 L 565.28,235.525 C 565.28,235.525,565.28,235.525,565.28,235.525 L 30,235.525 C 30,235.525,30,235.525,30,235.525 L 30,30 C 30,30,30,30,30,30 Z"
            ></path>
            <path
              fill="#2f71a1"
              d="M 40,40 L 555.28,40 C 555.28,40,555.28,40,555.28,40 L 555.28,225.525 C 555.28,225.525,555.28,225.525,555.28,225.525 L 40,225.525 C 40,225.525,40,225.525,40,225.525 L 40,40 C 40,40,40,40,40,40 Z"
            ></path>
            <path
              fill="white"
              d="M 120,57 L 120,57 C 149.256,57,173,80.744,173,110 L 173,110 C 173,139.256,149.256,163,120,163 L 120,163 C 90.744,163,67,139.256,67,110 L 67,110 C 67,80.744,90.744,57,120,57 Z"
            ></path>
            <clipPath id="16e4fb89-c247-4c12-8bd4-e8a7ae52be9a">
              <path
                d="M 120,60 L 120,60 C 147.6,60,170,82.4,170,110 L 170,110 C 170,137.6,147.6,160,120,160 L 120,160 C 92.4,160,70,137.6,70,110 L 70,110 C 70,82.4,92.4,60,120,60 Z"
              ></path>
            </clipPath>
            <image
              clip-path="url(#16e4fb89-c247-4c12-8bd4-e8a7ae52be9a)"
              image-rendering="optimizeSpeed"
              href="data:image/jpeg;base64,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"
              height="100"
              width="100"
              y="60"
              x="70"
              preserveAspectRatio="xMidYMid slice"
            ></image>
            <text
              fill="white"
              style="
                font: bold 18px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="77.235"
              x="220"
            >
              CRISTIAN
            </text>
            <text
              fill="white"
              style="
                font: bold 18px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="77.235"
              x="306.022"
            >
              ALEXIS
            </text>
            <text
              fill="white"
              style="
                font: bold 18px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="77.235"
              x="368.176"
            >
              GARCIA
            </text>
            <text
              fill="white"
              style="
                font: bold 18px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="77.235"
              x="441.904"
            >
              ASCENCIO
            </text>
            <image
              image-rendering="optimizeSpeed"
              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik01MDIuMyAxOTAuOGMzLjktMy4xIDkuNy0uMiA5LjcgNC43VjQwMGMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTk1LjZjMC01IDUuNy03LjggOS43LTQuNyAyMi40IDE3LjQgNTIuMSAzOS41IDE1NC4xIDExMy42IDIxLjEgMTUuNCA1Ni43IDQ3LjggOTIuMiA0Ny42IDM1LjcuMyA3Mi0zMi44IDkyLjMtNDcuNiAxMDItNzQuMSAxMzEuNi05Ni4zIDE1NC0xMTMuN3pNMjU2IDMyMGMyMy4yLjQgNTYuNi0yOS4yIDczLjQtNDEuNCAxMzIuNy05Ni4zIDE0Mi44LTEwNC43IDE3My40LTEyOC43IDUuOC00LjUgOS4yLTExLjUgOS4yLTE4Ljl2LTE5YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjE5YzAgNy40IDMuNCAxNC4zIDkuMiAxOC45IDMwLjYgMjMuOSA0MC43IDMyLjQgMTczLjQgMTI4LjcgMTYuOCAxMi4yIDUwLjIgNDEuOCA3My40IDQxLjR6Ij48L3BhdGg+PC9zdmc+"
              height="9"
              width="9"
              y="111.65"
              x="220"
            ></image>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="119.075"
              x="235"
            >
              alexis
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="119.075"
              x="260.101"
            >
              .
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="119.075"
              x="261.991"
            >
              garcia170698
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="119.075"
              x="321.787"
            >
              @
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="119.075"
              x="330.904"
            >
              gmail
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="119.075"
              x="356.77"
            >
              .
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="119.075"
              x="358.65999999999997"
            >
              com
            </text>
            <image
              image-rendering="optimizeSpeed"
              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik00OTMuNCAyNC42bC0xMDQtMjRjLTExLjMtMi42LTIyLjkgMy4zLTI3LjUgMTMuOWwtNDggMTEyYy00LjIgOS44LTEuNCAyMS4zIDYuOSAyOGw2MC42IDQ5LjZjLTM2IDc2LjctOTguOSAxNDAuNS0xNzcuMiAxNzcuMmwtNDkuNi02MC42Yy02LjgtOC4zLTE4LjItMTEuMS0yOC02LjlsLTExMiA0OEMzLjkgMzY2LjUtMiAzNzguMS42IDM4OS40bDI0IDEwNEMyNy4xIDUwNC4yIDM2LjcgNTEyIDQ4IDUxMmMyNTYuMSAwIDQ2NC0yMDcuNSA0NjQtNDY0IDAtMTEuMi03LjctMjAuOS0xOC42LTIzLjR6Ij48L3BhdGg+PC9zdmc+"
              height="9"
              width="9"
              y="125.4"
              x="220"
            ></image>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="132.82500000000002"
              x="235"
            >
              73455844
            </text>
            <image
              image-rendering="optimizeSpeed"
              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgd2lkdGg9IjU3NiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0yODAuMzcgMTQ4LjI2TDk2IDMwMC4xMVY0NjRhMTYgMTYgMCAwIDAgMTYgMTZsMTEyLjA2LS4yOWExNiAxNiAwIDAgMCAxNS45Mi0xNlYzNjhhMTYgMTYgMCAwIDEgMTYtMTZoNjRhMTYgMTYgMCAwIDEgMTYgMTZ2OTUuNjRhMTYgMTYgMCAwIDAgMTYgMTYuMDVMNDY0IDQ4MGExNiAxNiAwIDAgMCAxNi0xNlYzMDBMMjk1LjY3IDE0OC4yNmExMi4xOSAxMi4xOSAwIDAgMC0xNS4zIDB6TTU3MS42IDI1MS40N0w0ODggMTgyLjU2VjQ0LjA1YTEyIDEyIDAgMCAwLTEyLTEyaC01NmExMiAxMiAwIDAgMC0xMiAxMnY3Mi42MUwzMTguNDcgNDNhNDggNDggMCAwIDAtNjEgMEw0LjM0IDI1MS40N2ExMiAxMiAwIDAgMC0xLjYgMTYuOWwyNS41IDMxQTEyIDEyIDAgMCAwIDQ1LjE1IDMwMWwyMzUuMjItMTkzLjc0YTEyLjE5IDEyLjE5IDAgMCAxIDE1LjMgMEw1MzAuOSAzMDFhMTIgMTIgMCAwIDAgMTYuOS0xLjZsMjUuNS0zMWExMiAxMiAwIDAgMC0xLjctMTYuOTN6Ij48L3BhdGg+PC9zdmc+"
              height="9"
              width="10.125"
              y="139.15"
              x="219.4375"
            ></image>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="146.57500000000002"
              x="235"
            >
              Ahuachapan
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="146.57500000000002"
              x="293.905"
            >
              ,
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="146.57500000000002"
              x="298.09"
            >
              Tacuba
            </text>
            <image
              image-rendering="optimizeSpeed"
              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiIgd2lkdGg9IjQ0OCIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0wIDQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTkySDB2Mjcyem0zMjAtMTk2YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEydi00MHptMCAxMjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwek0xOTIgMjY4YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEydi00MHptMCAxMjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwek02NCAyNjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6bTAgMTI4YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEySDc2Yy02LjYgMC0xMi01LjQtMTItMTJ2LTQwek00MDAgNjRoLTQ4VjE2YzAtOC44LTcuMi0xNi0xNi0xNmgtMzJjLTguOCAwLTE2IDcuMi0xNiAxNnY0OEgxNjBWMTZjMC04LjgtNy4yLTE2LTE2LTE2aC0zMmMtOC44IDAtMTYgNy4yLTE2IDE2djQ4SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjQ4aDQ0OHYtNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6Ij48L3BhdGg+PC9zdmc+"
              height="9"
              width="7.875"
              y="152.9"
              x="220.5625"
            ></image>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="160.32500000000002"
              x="235"
            >
              17
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="160.32500000000002"
              x="245.197"
            >
              de
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="160.32500000000002"
              x="259.264"
            >
              junio
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="160.32500000000002"
              x="283.393"
            >
              de
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="160.32500000000002"
              x="297.46"
            >
              1998
            </text>
            <image
              image-rendering="optimizeSpeed"
              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNDk2IDUxMiIgd2lkdGg9IjQ5NiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0zMzYuNSAxNjBDMzIyIDcwLjcgMjg3LjggOCAyNDggOHMtNzQgNjIuNy04OC41IDE1MmgxNzd6TTE1MiAyNTZjMCAyMi4yIDEuMiA0My41IDMuMyA2NGgxODUuM2MyLjEtMjAuNSAzLjMtNDEuOCAzLjMtNjRzLTEuMi00My41LTMuMy02NEgxNTUuM2MtMi4xIDIwLjUtMy4zIDQxLjgtMy4zIDY0em0zMjQuNy05NmMtMjguNi02Ny45LTg2LjUtMTIwLjQtMTU4LTE0MS42IDI0LjQgMzMuOCA0MS4yIDg0LjcgNTAgMTQxLjZoMTA4ek0xNzcuMiAxOC40QzEwNS44IDM5LjYgNDcuOCA5Mi4xIDE5LjMgMTYwaDEwOGM4LjctNTYuOSAyNS41LTEwNy44IDQ5LjktMTQxLjZ6TTQ4Ny40IDE5MkgzNzIuN2MyLjEgMjEgMy4zIDQyLjUgMy4zIDY0cy0xLjIgNDMtMy4zIDY0aDExNC42YzUuNS0yMC41IDguNi00MS44IDguNi02NHMtMy4xLTQzLjUtOC41LTY0ek0xMjAgMjU2YzAtMjEuNSAxLjItNDMgMy4zLTY0SDguNkMzLjIgMjEyLjUgMCAyMzMuOCAwIDI1NnMzLjIgNDMuNSA4LjYgNjRoMTE0LjZjLTItMjEtMy4yLTQyLjUtMy4yLTY0em0zOS41IDk2YzE0LjUgODkuMyA0OC43IDE1MiA4OC41IDE1MnM3NC02Mi43IDg4LjUtMTUyaC0xNzd6bTE1OS4zIDE0MS42YzcxLjQtMjEuMiAxMjkuNC03My43IDE1OC0xNDEuNmgtMTA4Yy04LjggNTYuOS0yNS42IDEwNy44LTUwIDE0MS42ek0xOS4zIDM1MmMyOC42IDY3LjkgODYuNSAxMjAuNCAxNTggMTQxLjYtMjQuNC0zMy44LTQxLjItODQuNy01MC0xNDEuNmgtMTA4eiI+PC9wYXRoPjwvc3ZnPg=="
              height="9"
              width="8.71875"
              y="166.65"
              x="220.140625"
            ></image>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="174.07500000000002"
              x="235"
            >
              blogalexis
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="174.07500000000002"
              x="280.243"
            >
              .
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="174.07500000000002"
              x="282.133"
            >
              netlify
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="174.07500000000002"
              x="309.205"
            >
              .
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="174.07500000000002"
              x="311.095"
            >
              app
            </text>
            <image
              image-rendering="optimizeSpeed"
              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNDk2IDUxMiIgd2lkdGg9IjQ5NiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0xNjUuOSAzOTcuNGMwIDItMi4zIDMuNi01LjIgMy42LTMuMy4zLTUuNi0xLjMtNS42LTMuNiAwLTIgMi4zLTMuNiA1LjItMy42IDMtLjMgNS42IDEuMyA1LjYgMy42em0tMzEuMS00LjVjLS43IDIgMS4zIDQuMyA0LjMgNC45IDIuNiAxIDUuNiAwIDYuMi0ycy0xLjMtNC4zLTQuMy01LjJjLTIuNi0uNy01LjUuMy02LjIgMi4zem00NC4yLTEuN2MtMi45LjctNC45IDIuNi00LjYgNC45LjMgMiAyLjkgMy4zIDUuOSAyLjYgMi45LS43IDQuOS0yLjYgNC42LTQuNi0uMy0xLjktMy0zLjItNS45LTIuOXpNMjQ0LjggOEMxMDYuMSA4IDAgMTEzLjMgMCAyNTJjMCAxMTAuOSA2OS44IDIwNS44IDE2OS41IDIzOS4yIDEyLjggMi4zIDE3LjMtNS42IDE3LjMtMTIuMSAwLTYuMi0uMy00MC40LS4zLTYxLjQgMCAwLTcwIDE1LTg0LjctMjkuOCAwIDAtMTEuNC0yOS4xLTI3LjgtMzYuNiAwIDAtMjIuOS0xNS43IDEuNi0xNS40IDAgMCAyNC45IDIgMzguNiAyNS44IDIxLjkgMzguNiA1OC42IDI3LjUgNzIuOSAyMC45IDIuMy0xNiA4LjgtMjcuMSAxNi0zMy43LTU1LjktNi4yLTExMi4zLTE0LjMtMTEyLjMtMTEwLjUgMC0yNy41IDcuNi00MS4zIDIzLjYtNTguOS0yLjYtNi41LTExLjEtMzMuMyAyLjYtNjcuOSAyMC45LTYuNSA2OSAyNyA2OSAyNyAyMC01LjYgNDEuNS04LjUgNjIuOC04LjVzNDIuOCAyLjkgNjIuOCA4LjVjMCAwIDQ4LjEtMzMuNiA2OS0yNyAxMy43IDM0LjcgNS4yIDYxLjQgMi42IDY3LjkgMTYgMTcuNyAyNS44IDMxLjUgMjUuOCA1OC45IDAgOTYuNS01OC45IDEwNC4yLTExNC44IDExMC41IDkuMiA3LjkgMTcgMjIuOSAxNyA0Ni40IDAgMzMuNy0uMyA3NS40LS4zIDgzLjYgMCA2LjUgNC42IDE0LjQgMTcuMyAxMi4xQzQyOC4yIDQ1Ny44IDQ5NiAzNjIuOSA0OTYgMjUyIDQ5NiAxMTMuMyAzODMuNSA4IDI0NC44IDh6TTk3LjIgMzUyLjljLTEuMyAxLTEgMy4zLjcgNS4yIDEuNiAxLjYgMy45IDIuMyA1LjIgMSAxLjMtMSAxLTMuMy0uNy01LjItMS42LTEuNi0zLjktMi4zLTUuMi0xem0tMTAuOC04LjFjLS43IDEuMy4zIDIuOSAyLjMgMy45IDEuNiAxIDMuNi43IDQuMy0uNy43LTEuMy0uMy0yLjktMi4zLTMuOS0yLS42LTMuNi0uMy00LjMuN3ptMzIuNCAzNS42Yy0xLjYgMS4zLTEgNC4zIDEuMyA2LjIgMi4zIDIuMyA1LjIgMi42IDYuNSAxIDEuMy0xLjMuNy00LjMtMS4zLTYuMi0yLjItMi4zLTUuMi0yLjYtNi41LTF6bS0xMS40LTE0LjdjLTEuNiAxLTEuNiAzLjYgMCA1LjkgMS42IDIuMyA0LjMgMy4zIDUuNiAyLjMgMS42LTEuMyAxLjYtMy45IDAtNi4yLTEuNC0yLjMtNC0zLjMtNS42LTJ6Ij48L3BhdGg+PC9zdmc+"
              height="9"
              width="8.71875"
              y="180.4"
              x="220.140625"
            ></image>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="187.82500000000002"
              x="235"
            >
              github
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="187.82500000000002"
              x="264.178"
            >
              .
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="187.82500000000002"
              x="266.068"
            >
              com/GA17033
            </text>
            <image
              image-rendering="optimizeSpeed"
              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik01MDQgMjU2QzUwNCAxMTkgMzkzIDggMjU2IDhTOCAxMTkgOCAyNTZjMCAxMjMuNzggOTAuNjkgMjI2LjM4IDIwOS4yNSAyNDVWMzI3LjY5aC02M1YyNTZoNjN2LTU0LjY0YzAtNjIuMTUgMzctOTYuNDggOTMuNjctOTYuNDggMjcuMTQgMCA1NS41MiA0Ljg0IDU1LjUyIDQuODR2NjFoLTMxLjI4Yy0zMC44IDAtNDAuNDEgMTkuMTItNDAuNDEgMzguNzNWMjU2aDY4Ljc4bC0xMSA3MS42OWgtNTcuNzhWNTAxQzQxMy4zMSA0ODIuMzggNTA0IDM3OS43OCA1MDQgMjU2eiI+PC9wYXRoPjwvc3ZnPg=="
              height="9"
              width="9"
              y="194.15"
              x="220"
            ></image>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="201.57500000000002"
              x="235"
            >
              Alexis
            </text>
            <text
              fill="white"
              style="
                font: normal 9px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="201.57500000000002"
              x="262.486"
            >
              Garcia
            </text>
            <text
              fill="#999999"
              style="
                font: normal 12px Poppins;
                white-space: pre;
                letter-spacing: 1px;
              "
              y="267.675"
              x="40"
            >
              COMPETENCIAS
            </text>
            <text
              fill="#999999"
              style="
                font: normal 12px Poppins;
                white-space: pre;
                letter-spacing: 1px;
              "
              y="284.17499999999995"
              x="40"
            >
              TECNICAS
            </text>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="308.65"
              x="40"
            >
              PHP
            </text>
            <rect
              fill="#999999"
              height="4"
              width="112"
              y="317.15"
              x="40"
            ></rect>
            <rect
              fill="white"
              height="4"
              width="27.999999999999993"
              y="317.15"
              x="152"
            ></rect>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="346.15"
              x="40"
            >
              JAVASCRIPT
            </text>
            <rect fill="#999999" height="4" width="84" y="354.65" x="40"></rect>
            <rect fill="white" height="4" width="56" y="354.65" x="124"></rect>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="383.65"
              x="40"
            >
              C#
            </text>
            <rect fill="#999999" height="4" width="84" y="392.15" x="40"></rect>
            <rect fill="white" height="4" width="56" y="392.15" x="124"></rect>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="421.15"
              x="40"
            >
              JAVA
            </text>
            <rect fill="#999999" height="4" width="56" y="429.65" x="40"></rect>
            <rect fill="white" height="4" width="84" y="429.65" x="96"></rect>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="458.65"
              x="40"
            >
              PYTHON
            </text>
            <rect fill="#999999" height="4" width="56" y="467.15" x="40"></rect>
            <rect fill="white" height="4" width="84" y="467.15" x="96"></rect>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="496.15"
              x="40"
            >
              NODE
            </text>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="496.15"
              x="69.75999999999999"
            >
              JS
            </text>
            <rect fill="#999999" height="4" width="56" y="504.65" x="40"></rect>
            <rect fill="white" height="4" width="84" y="504.65" x="96"></rect>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="533.65"
              x="40"
            >
              MySQL
            </text>
            <rect fill="#999999" height="4" width="84" y="542.15" x="40"></rect>
            <rect fill="white" height="4" width="56" y="542.15" x="124"></rect>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="571.15"
              x="40"
            >
              HTML
            </text>
            <rect fill="#999999" height="4" width="84" y="579.65" x="40"></rect>
            <rect fill="white" height="4" width="56" y="579.65" x="124"></rect>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="608.65"
              x="40"
            >
              CSS
            </text>
            <rect fill="#999999" height="4" width="84" y="617.15" x="40"></rect>
            <rect fill="white" height="4" width="56" y="617.15" x="124"></rect>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="646.15"
              x="40"
            >
              GIT
            </text>
            <rect
              fill="#999999"
              height="4"
              width="112"
              y="654.65"
              x="40"
            ></rect>
            <rect
              fill="white"
              height="4"
              width="27.999999999999993"
              y="654.65"
              x="152"
            ></rect>
            <text
              fill="#999999"
              style="
                font: normal 12px Poppins;
                white-space: pre;
                letter-spacing: 1px;
              "
              y="695.675"
              x="40"
            >
              IDIOMAS
            </text>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="720.15"
              x="40"
            >
              Español
            </text>
            <rect
              fill="#999999"
              height="4"
              width="140"
              y="728.65"
              x="40"
            ></rect>
            <text
              fill="white"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="757.65"
              x="40"
            >
              Ingles
            </text>
            <rect fill="#999999" height="4" width="56" y="766.15" x="40"></rect>
            <rect fill="white" height="4" width="84" y="766.15" x="96"></rect>
            <rect
              fill="#2f71a1"
              height="16.5"
              width="49.584"
              y="255.525"
              x="220"
            ></rect>
            <text
              fill="white"
              style="
                font: normal 12px Poppins;
                white-space: pre;
                letter-spacing: 1px;
              "
              y="267.675"
              x="224"
            >
              PERFIL
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="220"
            >
              Desde
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="254.12"
            >
              el
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="265.45"
            >
              inicio
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="294.37"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="310"
            >
              mi
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="325.43"
            >
              carrera
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="365.08000000000004"
            >
              como
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="396.92"
            >
              estudiante
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="453.27"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="468.9"
            >
              Ingenieria
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="292.15"
              x="521.4"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="305.9"
              x="220"
            >
              sistemas
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="305.9"
              x="267.69"
            >
              informaticos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="305.9"
              x="333.49"
            >
              ,
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="305.9"
              x="338.14"
            >
              me
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="305.9"
              x="357.31"
            >
              han
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="305.9"
              x="379.53999999999996"
            >
              convertido
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="305.9"
              x="435.88"
            >
              en
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="305.9"
              x="451.15"
            >
              una
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="305.9"
              x="473.38"
            >
              persona
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="305.9"
              x="517.52"
            >
              con
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="220"
            >
              metas
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="254.79"
            >
              claras
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="285.78999999999996"
            >
              ,
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="290.44"
            >
              cada
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="319.46000000000004"
            >
              dia
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="338.11"
            >
              me
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="357.28000000000003"
            >
              levanto
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="397.42"
            >
              con
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="418.96000000000004"
            >
              las
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="436.07"
            >
              ganas
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="470.64"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="319.65"
              x="486.27"
            >
              aprender
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="220"
            >
              nuevos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="258.9"
            >
              temas
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="293.69"
            >
              esto
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="317.82"
            >
              hace
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="345.91999999999996"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="361.54999999999995"
            >
              mi
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="376.98"
            >
              una
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="399.21"
            >
              persona
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="443.34999999999997"
            >
              constante
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="494.08"
            >
              ,
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="498.72999999999996"
            >
              curioso
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="333.4"
              x="538.0799999999999"
            >
              y
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="347.15"
              x="220"
            >
              sin
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="347.15"
              x="236.75"
            >
              miedos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="347.15"
              x="276.76"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="347.15"
              x="292.39"
            >
              enfrentarme
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="347.15"
              x="357.90999999999997"
            >
              a
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="347.15"
              x="367.34"
            >
              nuevos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="347.15"
              x="406.24"
            >
              retos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="347.15"
              x="431.42999999999995"
            >
              .
            </text>
            <rect
              fill="#2f71a1"
              height="16.5"
              width="89.27999999999999"
              y="370.775"
              x="220"
            ></rect>
            <text
              fill="white"
              style="
                font: normal 12px Poppins;
                white-space: pre;
                letter-spacing: 1px;
              "
              y="382.92499999999995"
              x="224"
            >
              FORMACIÓN
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="407.4"
              x="220"
            >
              Estudiante
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="407.4"
              x="275.97"
            >
              4
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="407.4"
              x="284.51"
            >
              año
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="407.4"
              x="510.92999999999995"
            >
              presente
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="421.15"
              x="220"
            >
              Ingenieria
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="421.15"
              x="272.5"
            >
              De
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="421.15"
              x="288.44"
            >
              Sistemas
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="421.15"
              x="336.78"
            >
              Informaticos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="434.9"
              x="220"
            >
              Universidad
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="434.9"
              x="281.78"
            >
              De
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="434.9"
              x="297.72"
            >
              El
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="434.9"
              x="307.98"
            >
              Salvador
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="458.65"
              x="220"
            >
              Certificado
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="458.65"
              x="278.6"
            >
              Bootcamp
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="458.65"
              x="333.93"
            >
              Conexión
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="458.65"
              x="381.20000000000005"
            >
              -
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="472.4"
              x="220"
            >
              Ticongle
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="472.4"
              x="265.34000000000003"
            >
              Academy
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="472.4"
              x="316.85"
            >
              Especialización
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="472.4"
              x="396.68"
            >
              De
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="486.15"
              x="220"
            >
              Desarrollo
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="486.15"
              x="273.7"
            >
              Backend
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="458.65"
              x="531.75"
            >
              2022
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="509.9"
              x="220"
            >
              Bachillerato
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="509.9"
              x="282.98"
            >
              Técnico
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="509.9"
              x="324.9"
            >
              vocacional
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="523.65"
              x="220"
            >
              Administrativo
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="523.65"
              x="296.69"
            >
              Contable
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="509.9"
              x="501.3299999999999"
            >
              2014
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="509.9"
              x="525.52"
            >
              -
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="509.9"
              x="533.6999999999999"
            >
              2016
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="537.4"
              x="220"
            >
              Instituto
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="537.4"
              x="262.93"
            >
              Nacional
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="537.4"
              x="309.94"
            >
              Lic
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="537.4"
              x="322.78999999999996"
            >
              :
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="537.4"
              x="327.59"
            >
              "
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="537.4"
              x="330.51"
            >
              Rene
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="537.4"
              x="358.06"
            >
              Porfirio
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="537.4"
              x="394.99"
            >
              Osorio
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="537.4"
              x="427.06"
            >
              "
            </text>
            <rect
              fill="#2f71a1"
              height="16.5"
              width="167.904"
              y="561.025"
              x="220"
            ></rect>
            <text
              fill="white"
              style="
                font: normal 12px Poppins;
                white-space: pre;
                letter-spacing: 1px;
              "
              y="573.175"
              x="224"
            >
              EXPERICIENCIA
            </text>
            <text
              fill="white"
              style="
                font: normal 12px Poppins;
                white-space: pre;
                letter-spacing: 1px;
              "
              y="573.175"
              x="325.27599999999995"
            >
              LABORAL
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="597.65"
              x="220"
            >
              Desarrollador
            </text>
            <text
              fill="black"
              style="
                font: bold 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="597.65"
              x="291.1"
            >
              Backend
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="597.65"
              x="454.04999999999995"
            >
              may
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="597.65"
              x="479.40999999999997"
            >
              2022
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="597.65"
              x="505.60999999999996"
            >
              -
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="597.65"
              x="513.79"
            >
              dic
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="597.65"
              x="531.75"
            >
              2022
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="611.4"
              x="220"
            >
              Asociación
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="611.4"
              x="277.65"
            >
              Conexión
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="611.4"
              x="327.09000000000003"
            >
              Al
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="611.4"
              x="338.96000000000004"
            >
              Desarrollo
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="611.4"
              x="392.06"
            >
              de
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="611.4"
              x="407.69"
            >
              El
            </text>
            <text
              fill="#666666"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="611.4"
              x="417.95"
            >
              Salvador
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="625.15"
              x="240"
            >
              Servicios
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="625.15"
              x="286.69"
            >
              rest
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="625.15"
              x="308.15"
            >
              -
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="625.15"
              x="316.33000000000004"
            >
              Desarrollo
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="625.15"
              x="369.43"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="625.15"
              x="385.06"
            >
              APIS
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="625.15"
              x="408.59000000000003"
            >
              /
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="625.15"
              x="416.02"
            >
              Web
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="625.15"
              x="441.41"
            >
              services
            </text>
            <circle fill="black" r="2" cy="623.15" cx="230"></circle>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="638.9"
              x="240"
            >
              Cooperar
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="638.9"
              x="290.37"
            >
              con
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="638.9"
              x="311.90999999999997"
            >
              los
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="638.9"
              x="328.65999999999997"
            >
              desarrolladores
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="638.9"
              x="410.12"
            >
              front
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="638.9"
              x="433.58000000000004"
            >
              -
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="638.9"
              x="439.09000000000003"
            >
              end
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="638.9"
              x="461.12"
            >
              para
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="638.9"
              x="487.8"
            >
              la
            </text>
            <circle fill="black" r="2" cy="636.9" cx="230"></circle>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="652.65"
              x="240"
            >
              integración
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="652.65"
              x="299.95"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="652.65"
              x="315.58000000000004"
            >
              nuevos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="652.65"
              x="354.48"
            >
              elementos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="652.65"
              x="410.17"
            >
              orientados
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="652.65"
              x="466.81"
            >
              al
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="652.65"
              x="478.7"
            >
              usuario
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="652.65"
              x="516.0699999999999"
            >
              .
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="666.4"
              x="240"
            >
              Crear
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="666.4"
              x="270.81"
            >
              código
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="666.4"
              x="308.33000000000004"
            >
              reutilizable
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="666.4"
              x="365.08000000000004"
            >
              para
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="666.4"
              x="391.76"
            >
              su
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="666.4"
              x="406.05"
            >
              uso
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="666.4"
              x="426.74"
            >
              en
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="666.4"
              x="442.01"
            >
              el
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="666.4"
              x="453.34000000000003"
            >
              futuro
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="666.4"
              x="483.20000000000005"
            >
              .
            </text>
            <circle fill="black" r="2" cy="664.4" cx="230"></circle>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="680.15"
              x="240"
            >
              Implementar
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="680.15"
              x="307.88"
            >
              y
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="680.15"
              x="316.18"
            >
              actualizar
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="680.15"
              x="368.44"
            >
              módulos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="680.15"
              x="415.05"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="680.15"
              x="430.68"
            >
              las
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="680.15"
              x="447.79"
            >
              aplicaciones
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="680.15"
              x="511.81"
            >
              .
            </text>
            <circle fill="black" r="2" cy="678.15" cx="230"></circle>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="693.9"
              x="240"
            >
              Optimizar
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="693.9"
              x="291.19"
            >
              aplicaciones
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="693.9"
              x="357.88"
            >
              para
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="693.9"
              x="384.56"
            >
              ofrecer
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="693.9"
              x="422.85"
            >
              una
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="693.9"
              x="445.08"
            >
              mayor
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="693.9"
              x="480.57"
            >
              rapidez
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="693.9"
              x="520.46"
            >
              y
            </text>
            <circle fill="black" r="2" cy="691.9" cx="230"></circle>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="707.65"
              x="240"
            >
              comodidad
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="707.65"
              x="298.67"
            >
              .
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="721.4"
              x="240"
            >
              Realizar
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="721.4"
              x="281.67"
            >
              pruebas
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="721.4"
              x="326.17"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="721.4"
              x="341.8"
            >
              control
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="721.4"
              x="379.57000000000005"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="721.4"
              x="395.20000000000005"
            >
              calidad
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="721.4"
              x="435.90000000000003"
            >
              del
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="721.4"
              x="453.99"
            >
              producto
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="721.4"
              x="500.15000000000003"
            >
              .
            </text>
            <circle fill="black" r="2" cy="719.4" cx="230"></circle>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="735.15"
              x="240"
            >
              Mantener
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="735.15"
              x="290.61"
            >
              la
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="735.15"
              x="302.5"
            >
              seguridad
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="735.15"
              x="356.22"
            >
              del
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="735.15"
              x="374.31"
            >
              producto
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="735.15"
              x="423.14"
            >
              para
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="735.15"
              x="449.82"
            >
              proteger
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="735.15"
              x="495.90999999999997"
            >
              todos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="735.15"
              x="527"
            >
              los
            </text>
            <circle fill="black" r="2" cy="733.15" cx="230"></circle>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="748.9"
              x="240"
            >
              datos
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="748.9"
              x="268.78"
            >
              .
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="776.4"
              x="220"
            >
              6
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="776.4"
              x="229.02"
            >
              meses
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="776.4"
              x="264.83"
            >
              de
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="776.4"
              x="280.46"
            >
              pasantía
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="776.4"
              x="327.89"
            >
              remunerada
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="776.4"
              x="393.8"
            >
              con
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="776.4"
              x="415.34000000000003"
            >
              posterior
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="776.4"
              x="462.55"
            >
              contratación
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="776.4"
              x="529.95"
            >
              por
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="790.15"
              x="220"
            >
              servicios
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="790.15"
              x="266.04"
            >
              profesionales
            </text>
            <text
              fill="black"
              style="
                font: normal 10px Poppins;
                white-space: pre;
                letter-spacing: 0px;
              "
              y="790.15"
              x="333.53999999999996"
            >
              .
            </text>
          </svg>
        </div>
      </div>
      <div style="position: relative">
        <canvas
          style="position: absolute; left: 0; top: 0; width: 100%; height: 100%"
        ></canvas>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 595.28 841.89"
          style="direction: ltr"
          class="document-preview"
        >
          <rect fill="white" height="100%" width="100%"></rect>
          <path
            fill="#333333"
            d="M 0,0 L 200,0 C 200,0,200,0,200,0 L 200,841.89 C 200,841.89,200,841.89,200,841.89 L 0,841.89 C 0,841.89,0,841.89,0,841.89 L 0,0 C 0,0,0,0,0,0 Z"
          ></path>
          <text
            fill="#999999"
            style="
              font: normal 12px Poppins;
              white-space: pre;
              letter-spacing: 1px;
            "
            y="32.15"
            x="40"
          >
            APTITUDES
          </text>
          <path
            fill="#999999"
            d="M 40,49.625 L 47.5,49.625 C 47.5,49.625,47.5,49.625,47.5,49.625 L 47.5,57.125 C 47.5,57.125,47.5,57.125,47.5,57.125 L 40,57.125 C 40,57.125,40,57.125,40,57.125 L 40,49.625 C 40,49.625,40,49.625,40,49.625 Z"
          ></path>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="56.625"
            x="52.5"
          >
            Amabilidad
          </text>
          <path
            fill="#999999"
            d="M 40,73.375 L 47.5,73.375 C 47.5,73.375,47.5,73.375,47.5,73.375 L 47.5,80.875 C 47.5,80.875,47.5,80.875,47.5,80.875 L 40,80.875 C 40,80.875,40,80.875,40,80.875 L 40,73.375 C 40,73.375,40,73.375,40,73.375 Z"
          ></path>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="80.375"
            x="52.5"
          >
            Trabajo
          </text>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="80.375"
            x="93.47"
          >
            en
          </text>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="80.375"
            x="108.74"
          >
            equipo
          </text>
          <path
            fill="#999999"
            d="M 40,97.125 L 47.5,97.125 C 47.5,97.125,47.5,97.125,47.5,97.125 L 47.5,104.625 C 47.5,104.625,47.5,104.625,47.5,104.625 L 40,104.625 C 40,104.625,40,104.625,40,104.625 L 40,97.125 C 40,97.125,40,97.125,40,97.125 Z"
          ></path>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="104.125"
            x="52.5"
          >
            Capacidad
          </text>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="104.125"
            x="111.98"
          >
            de
          </text>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="104.125"
            x="127.61000000000001"
          >
            aceptar
          </text>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="117.875"
            x="52.5"
          >
            críticas
          </text>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="117.875"
            x="91.58"
          >
            constructivas
          </text>
          <path
            fill="#999999"
            d="M 40,134.625 L 47.5,134.625 C 47.5,134.625,47.5,134.625,47.5,134.625 L 47.5,142.125 C 47.5,142.125,47.5,142.125,47.5,142.125 L 40,142.125 C 40,142.125,40,142.125,40,142.125 L 40,134.625 C 40,134.625,40,134.625,40,134.625 Z"
          ></path>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="141.625"
            x="52.5"
          >
            Accesibilidad
          </text>
          <path
            fill="#999999"
            d="M 40,158.375 L 47.5,158.375 C 47.5,158.375,47.5,158.375,47.5,158.375 L 47.5,165.875 C 47.5,165.875,47.5,165.875,47.5,165.875 L 40,165.875 C 40,165.875,40,165.875,40,165.875 L 40,158.375 C 40,158.375,40,158.375,40,158.375 Z"
          ></path>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="165.375"
            x="52.5"
          >
            Perseverancia
          </text>
          <path
            fill="#999999"
            d="M 40,182.125 L 47.5,182.125 C 47.5,182.125,47.5,182.125,47.5,182.125 L 47.5,189.625 C 47.5,189.625,47.5,189.625,47.5,189.625 L 40,189.625 C 40,189.625,40,189.625,40,189.625 L 40,182.125 C 40,182.125,40,182.125,40,182.125 Z"
          ></path>
          <text
            fill="white"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="189.125"
            x="52.5"
          >
            Empatía
          </text>
          <rect
            fill="#2f71a1"
            height="16.5"
            width="87.07199999999999"
            y="20"
            x="220"
          ></rect>
          <text
            fill="white"
            style="
              font: normal 12px Poppins;
              white-space: pre;
              letter-spacing: 1px;
            "
            y="32.15"
            x="224"
          >
            PROYECTOS
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="56.625"
            x="510.92999999999995"
          >
            presente
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="70.375"
            x="220"
          >
            Firma
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="70.375"
            x="250.96"
          >
            Electronica
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="94.125"
            x="220"
          >
            Laravel
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="94.125"
            x="259.01"
          >
            Sistema
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="94.125"
            x="302.69"
          >
            De
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="94.125"
            x="318.55"
          >
            Gestion
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="94.125"
            x="359.62"
          >
            De
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="107.875"
            x="220"
          >
            Herramientas
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="107.875"
            x="291.81"
          >
            Y
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="107.875"
            x="300.46000000000004"
          >
            Materiales
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="107.875"
            x="355.96000000000004"
          >
            UES
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="94.125"
            x="531.75"
          >
            2022
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="131.625"
            x="220"
          >
            Laravel
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="131.625"
            x="256.41"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="131.625"
            x="262.26"
          >
            Lumen
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="131.625"
            x="298.84000000000003"
          >
            Api
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="131.625"
            x="317.83000000000004"
          >
            Sistema
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="131.625"
            x="361.51"
          >
            Proleche
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="131.625"
            x="509.15999999999997"
          >
            ago
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="131.625"
            x="531.75"
          >
            2022
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="220"
          >
            Java
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="247.56"
          >
            (
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="252.48000000000002"
          >
            Spring
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="285.05"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="290.9"
          >
            mvc
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="313.05"
          >
            )
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="320.57"
          >
            Registro
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="364.36"
          >
            de
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="379.91"
          >
            Notas
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="409.34000000000003"
          >
            ,
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="169.125"
            x="220"
          >
            Calificacion
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="169.125"
            x="282.64"
          >
            automatica
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="155.375"
            x="531.75"
          >
            2022
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="192.875"
            x="220"
          >
            C#
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="192.875"
            x="239.05"
          >
            .
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="192.875"
            x="241.46"
          >
            NET
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="192.875"
            x="262.15"
          >
            Core
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="192.875"
            x="288.87"
          >
            Api
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="192.875"
            x="307.86"
          >
            sistemas
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="192.875"
            x="356.18"
          >
            de
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="192.875"
            x="371.73"
          >
            ventas
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="206.625"
            x="220"
          >
            UES
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="192.875"
            x="531.75"
          >
            2022
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="230.375"
            x="220"
          >
            Vue
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="230.375"
            x="242.2"
          >
            js
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="230.375"
            x="252.78"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="230.375"
            x="261.23"
          >
            firebase
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="230.375"
            x="304.87"
          >
            Tienda
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="230.375"
            x="341.97"
          >
            Cellphone
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="230.375"
            x="534.3"
          >
            2021
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="254.125"
            x="220"
          >
            Laravel
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="254.125"
            x="259.01"
          >
            Ecommerce
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="254.125"
            x="322.19"
          >
            UES
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="254.125"
            x="534.3"
          >
            2021
          </text>
          <rect
            fill="#2f71a1"
            height="16.5"
            width="125.796"
            y="277.75"
            x="220"
          ></rect>
          <text
            fill="white"
            style="
              font: normal 12px Poppins;
              white-space: pre;
              letter-spacing: 1px;
            "
            y="289.9"
            x="224"
          >
            CERTIFICACIONES
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="314.375"
            x="220"
          >
            Introducción
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="314.375"
            x="286.45"
          >
            a
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="314.375"
            x="295.83"
          >
            Python
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="314.375"
            x="510.14"
          >
            nov
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="314.375"
            x="531.22"
          >
            2020
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="328.125"
            x="220"
          >
            Secretaría
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="328.125"
            x="274.09000000000003"
          >
            de
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="328.125"
            x="289.72"
          >
            Innovación
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="328.125"
            x="347.75"
          >
            de
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="328.125"
            x="363.38"
          >
            la
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="328.125"
            x="375.27"
          >
            Presidencia
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="220"
          >
            Api
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="236.39"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="242.24"
          >
            rest
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="261.31"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="267.16"
          >
            nodejs
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="300.96000000000004"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="306.81"
          >
            desde
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="338.05"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="343.9"
          >
            cero
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="366.29"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="372.14"
          >
            usando
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="410.4"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="365.625"
            x="220"
          >
            mongodb
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="365.625"
            x="269.98"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="365.625"
            x="275.83"
          >
            o
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="365.625"
            x="282.21000000000004"
          >
            -
          </text>
          <text
            fill="black"
            style="
              font: bold 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="365.625"
            x="288.06"
          >
            mysql
          </text>
          <text
            fill="black"
            style="
              font: normal 10px Poppins;
              white-space: pre;
              letter-spacing: 0px;
            "
            y="351.875"
            x="531.75"
          >
            2022
          </text>
        </svg>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  padding: 30px;
  position: relative;
  background: linear-gradient(
    to top,
    rgba(30, 35, 38, 0.8),
    rgba(30, 35, 38, 1)
  );
}

.botones{
  display: flex;
}
.container .button{
  background-color: transparent;
  border: 2px solid #fff;
  width: fit-content;
  display: block;
  margin: 10px auto;
  text-decoration: none;
  padding: 10px 22px;
  font-size: 16px;
  color: #fff;
  position: relative;
}
.container .button i{
  color:red;
}
.container .btn{
  background-color: transparent;
  border: 2px solid #fff;
  width: fit-content;
  display: block;
  margin: 10px;
  text-decoration: none;
  padding: 10px 22px;
  font-size: 16px;
  color: #fff;
}
.container .button:hover{
  background-color: #465CFF;
}
.container .btn:hover{
  background-color: #465CFF;
}

</style>