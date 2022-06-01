<template>
  <div class="notFoundView">
    <img src="@/assets/images/404.png" alt="404" />

    <h3>404 - Page Not Found!</h3>

    <p>Sorry, that page doesn't exist. What would you like to do?</p>
  </div>
</template>

<style scoped lang="scss">
.notFoundView {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    margin-bottom: 6rem;
    padding-inline: 2rem;
    width: 30rem;
  }

  h3 {
    margin-bottom: 2rem;
    color: #002177;
  }

  p {
    padding-inline: 2rem;
    color: rgb(132, 132, 139);
  }
}
</style>
