<script setup>
import { VueFinalModal } from 'vue-final-modal';  


</script>
<template>

  <VueFinalModal
  >
  <div class="card-modal">
    <div class="card-modal-content">
        <h1 class="card-modal">{{ title }}</h1>
    <slot />
    <button
      class="mt-1 ml-auto px-2 border rounded-lg"
      @click="$emit('confirm')"
    >
      Confirm
    </button>
    </div>
  
  </div>

  </VueFinalModal>
</template>

<style scoped>
    .card-modal {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .card-modal-content {
        width: 400px;
        padding: 20px 10px;
        height: auto;
        background-color: #202020;
        position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    }
    .card-modal-content h1 {
        font-family: "Open Sans";
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;color: white;
    }
    .card-modal-content button {
        padding:  10px;
        background-color: rgb(15, 235, 15);
        font-family: "Open Sans";
        float: right;
        color: rgb(255, 255, 255);
        border: none;
        border-radius: 5px;
    }

</style>
<script>
    export default {
        name:"ModalConfirm",
        components: {
            VueFinalModal
        },
        props: ["title",]

 

    }
</script>
