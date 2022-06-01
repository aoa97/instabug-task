<template>
  <form @submit.prevent="handleSubmit">
    <div class="errorField" v-if="errorCredentials">{{ errorCredentials }}</div>

    <label>
      <span>Work Email</span>

      <input
        type="email"
        placeholder="you@company.com"
        v-model="email"
        @keyup="validateEmail"
        @blur="validateEmail"
        :class="{ error: errorEmail }"
      />
      
      <p class="errorMessage email" v-if="errorEmail">{{ errorEmail }}</p>
    </label>

    <label>
      <span>Password<a href="#">Forgot password?</a></span>
      
      <input
        type="password"
        placeholder="8+ Characters"
        v-model="password"
        @keyup="validatePassword"
        @blur="validatePassword"
        :class="{ error: errorPassword }"
      />

      <p class="errorMessage password" v-if="errorPassword">{{ errorPassword }}</p>
    </label>

    <button :class="{ active: activeBtn() }">Log in</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { users } from "@/assets/data/data";

const router = useRouter();
const email = ref(null);
const password = ref(null);
const errorEmail = ref(null);
const errorPassword = ref(null);
const errorCredentials = ref(null);

// Already Logged User
const user = localStorage.getItem("user");

if (user) {
  router.push("/welcome");
}

const handleSubmit = () => {
  const user = users.find((x) => x.email === email.value && x.password === password.value);

  if (user) {
    router.push("/welcome");
    localStorage.setItem("user", user.email);
  } else {
    errorCredentials.value = "Your email and/or password are incorrect";
  }
};

const validateEmail = () => {
  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  errorEmail.value = !pattern.test(email.value) && "Enter a valid email address";
};

const validatePassword = () => {
  const emailName = email.value?.toLowerCase().split("@")[0];

  if (password.value?.search(/[A-Z]/) < 0)
    errorPassword.value ="Password must contain at least one upper case letter";
  else if (password.value?.search(/[0-9]/) < 0)
    errorPassword.value = "Password must contain at least one number";
  else if (password.value?.length < 6)
    errorPassword.value = "Password must be 6 characters or more";
  else if (password.value?.toLowerCase().includes(emailName))
    errorPassword.value = "Password shouldn't contain the email address name";
  else errorPassword.value = null;
};

const activeBtn = () => {
  return !errorEmail.value && !errorPassword.value && email.value && password.value;
};
</script>

<style scoped lang="scss">
form {
  margin-bottom: 1.5rem;

  label {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1.5rem;

    span {
      display: flex;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: #a6a6a6;
        font-size: 1.4rem;

        &:hover {
          color: #0089a5;
        }
      }
    }

    input {
      padding: 1rem 1.6rem;
      outline: 0;
      border: 0.1rem solid #dcdee3;
      border-radius: 0.4rem;

      &::placeholder {
        color: #dcdee3;
      }

      &.error {
        border-color: rgb(242, 66, 32);
      }
    }
  }

  button {
    color: #fff;
    background: #ccc;

    &.active {
      background: #002177;
    }
  }
}

.errorMessage {
  color: rgb(242, 66, 32);
  font-size: 1.2rem;
  margin-block: 0.4rem;
}

.errorField {
  padding: 1rem 1.6rem;
  margin-bottom: 1.6rem;
  background: #f6e6e2;
  color: #445065;
  border: 0.1rem solid rgba(0, 0, 0, 0.25);
  border-radius: 0.4rem;
}
</style>
