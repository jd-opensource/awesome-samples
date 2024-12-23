<script setup>
document.body.setAttribute("data-theme", "classic");
document.body.style.backgroundColor = "#e5e5e5";
const onThemeChange = (e) => {
  document.body.className = e;
};
</script>

<template>
  <div w-100>
    <button class="btn">这个是一个按钮</button>
    <div flex justify-around mt-3>
      <button @click="onThemeChange('default')">default</button>
      <button @click="onThemeChange('peaple')">peaple</button>
      <button @click="onThemeChange('spring')">spring</button>
    </div>
    <div mb-3 flex justify-around mt-3>
      <button bg-primary text-white>primary</button>
      <button bg-warning text-white>warning</button>
      <button bg-danger text-white>danger</button>
      <button bg-info text-white>info</button>
    </div>
  </div>
</template>

<style scoped>
.btn {
  outline: none;
  position: relative;
  display: inline-flex;
  line-height: 1.5;
  font-size: 16px;
  padding: 7px 15px;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}


.btn {
  background-color: #1677ff;
  color: #fff;
}


[data-theme="classic"] .btn {
  background-color: #ff4d4f;
}
</style>
