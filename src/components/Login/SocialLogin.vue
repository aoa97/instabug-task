<template>
  <div class="social">
    <button class="google">
      <span class="ico"><IconGoogle /></span>
      <span class="txt">Google</span>
    </button>

    <button class="github">
      <span class="ico"><IconGitHub /></span>
      <span class="txt">GitHub</span>
    </button>

    <button class="microsoft">
      <span class="ico"><IconMicrosoft /></span>
      <span class="txt">Microsoft</span>
    </button>
  </div>
</template>

<script setup>
import IconGoogle from "../svg/IconGoogle.vue";
import IconMicrosoft from "../svg/IconMicrosoft.vue";
import IconGitHub from "../svg/IconGitHub.vue";
</script>

<style scoped lang="scss">
.social {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  button {
    position: relative;

    .ico {
      padding: 0.8rem 1.6rem;

      position: absolute;
      left: 0.2rem;
      top: 50%;
      transform: translateY(-50%);

      svg {
        width: 22px;
        height: 22px;
      }
    }

    &.google {
      background: #4285f4;

      .txt {
        color: #fff;
      }

      .ico {
        background: #fff;
        border-radius: 0.4rem;
        padding: 0.8rem;

        svg {
          width: 17px;
          height: 17px;
        }
      }
    }

    &.github {
      background: #333;

      .txt {
        color: #fff;
      }
    }

    &.microsoft {
      border: 1px solid #8c8c8c;

      .txt {
        color: #5e5e5e;
      }
    }
  }
}
</style>
