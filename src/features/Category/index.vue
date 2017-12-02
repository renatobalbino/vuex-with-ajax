<template>
	<div>
		<h3>Categorias</h3>
	</div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapState('Category', ['list']),
      ...mapGetters('Category', ['leanList'])
    },

    methods: {
      ...mapActions('Category', ['setList'])
    },

    mounted: function () {
      this.setList()
    }
  }
</script>