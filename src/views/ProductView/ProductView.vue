<script setup lang="ts">
import PageTitle from '@/components/shared/PageTitle.vue';
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import getProductById from '@/helpers/getProductById'

const product = ref<Product>()
const route = useRoute()
const router = useRouter()

const fetchProduct = async () => {
  try {
    product.value = await getProductById(route.params.id)
  } catch (error) {
    console.error('Failed to fetch products data:', error)
  }
}

onMounted(() => {
  fetchProduct()
})
</script>

<template>
  <main class="product-view">
    <PageTitle>
      Selected Product
      <button @click="() => router.push('/')">Go back</button>
    </PageTitle>
    <pre>
      {{ product }}
    </pre>
  </main>
</template>

<style scoped lang="scss">
.product-view {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
