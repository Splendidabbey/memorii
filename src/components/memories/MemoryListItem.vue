<template>
    <ion-item :router-link="`/memories/${memory.id}`" :image="memory.image">
    <ion-thumbnail slot="start">
        <ion-img :src="memory.image" :alt="memory.title">
        </ion-img>
    </ion-thumbnail>
    <ion-label>
        {{ memory.title}}
    </ion-label>
    </ion-item>
</template>

<script>
import {IonItem, IonThumbnail, IonImg, IonLabel} from '@ionic/vue'

export default {
  components: {
    IonItem,
    IonImg,
    IonLabel,
    IonThumbnail
  },
  props: ['memory']
}
</script>
