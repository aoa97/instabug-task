<template>
  <div class="loginRight">
    <div class="title">
      <IconLogo />
      <h2>Log in to Instabug</h2>
    </div>

    <SocialLogin />

    <div class="separator">OR</div>

    <FormLogin />

    <div class="other">
      <span>Don't have an account? <a href="#">Sign up</a></span>
      <a>Login via SSO</a>
    </div>

    <p>Trusted by the top companies.</p>

    <SponsorsIcons />
  </div>
</template>

<script setup>
import IconLogo from "@/components/svg/IconLogo.vue";
import FormLogin from "./FormLogin.vue";
import SocialLogin from "./SocialLogin.vue";
import SponsorsIcons from "./SponsorsIcons.vue";
</script>

<style scoped lang="scss">
.loginRight {
  padding: 3% 15%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    h2 {
      color: #445065;
      font-weight: 400;
    }
  }

  .separator {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-inline: auto;
    font-weight: 600;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 45%;
      height: 1px;
      top: 24px;
      background-color: #dcdee3;
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }

  .other {
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1rem;

    a {
      text-decoration: none;
      color: #0089a5;
    }
  }

  p {
    color: #a1a7b2;
    text-align: center;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>
