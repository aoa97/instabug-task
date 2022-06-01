<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: ProximaNova;
  src: local("ProximaNova"), "./assets/fonts/proximaNova.ttf", format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: ProximaNova, Helvetica, Arial, sans-serif;
}

body {
  font-size: 1.6rem;
}

#app {
  color: #2c3e50;
  height: 100vh;
}

button {
  width: 100%;
  min-height: 4rem;
  padding-block: 1.2rem;
  background: #fff;
  outline: 0;
  border: 0;
  border-radius: 0.4rem;
  font-family: ProximaNova, Helvetica, Arial, sans-serif;
  font-weight: bold;
  cursor: pointer;
}
</style>
