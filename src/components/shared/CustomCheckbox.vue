<script setup lang="ts"></script>

<template>
  <label class="checkbox-container">
    <input type="checkbox" name="checkbox" />
    <span class="checkmark" />
  </label>
</template>

<style scoped lang="scss">
.checkbox-container {
  display: flex;
  cursor: pointer;
  position: relative;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked {
      ~ {
        .checkmark {
          background-color: var(--link-active-text-color);
          &:after {
            display: block;
          }
        }
      }
    }
  }
  &:hover {
    input {
      ~ {
        .checkmark {
          background-color: var(--link-active-text-color);
        }
      }
    }
  }
  .checkmark {
    &:after {
      left: 9px;
      top: 5px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
.checkmark {
  height: 24px;
  width: 24px;
  background-color: transparent;
  border: 2px solid var(--grey-color);
  border-radius: 7px;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
}
</style>
