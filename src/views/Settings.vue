<template>
  <div id="settings" class="overflow-auto">
    <b-table :items="items" :fields="fields" @row-clicked="selectAlarm" id="my-table" :per-page="perPage" :current-page="currentPage" small>
      <template v-slot:cell(preview)="data">
        <audio controls :src="'./alarms/'+ data.item.file"></audio>
      </template>
      <template v-slot:cell(select)="data">
        <font-awesome-icon v-if="data.item.file==alarm" :icon="['fas', 'check']"></font-awesome-icon>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      id="pagination"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      perPage: 4,
      currentPage: 1,
      items: [
        {
          name: '鬧鈴01',
          file: 'alarm_01.mp3'
        },
        {
          name: '鬧鈴02',
          file: 'alarm_02.wav'
        },
        {
          name: '鬧鈴03',
          file: 'alarm_03.wav'
        },
        {
          name: 'bird',
          file: 'bird.wav'
        },
        {
          name: 'cat',
          file: 'cat.wav'
        },
        {
          name: 'chicken',
          file: 'chicken.mp3'
        },
        {
          name: 'cow',
          file: 'cow.wav'
        },
        {
          name: 'dog',
          file: 'dog.wav'
        }
      ],
      fields: [
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'preview',
          label: '預覽'
        },
        {
          key: 'select',
          label: '選擇'
        }
      ]
    }
  },
  computed: {
    alarm () {
      return this.$store.getters.alarm
    },
    rows () {
      return this.items.length
    }
  },
  methods: {
    selectAlarm (item) {
      this.$store.commit('selectAlarm', item.file)
    }
  }

}
</script>

<style lang="stylus">
#settings
  #pagination
    width 100%
    position absolute
    bottom 8%
</style>
