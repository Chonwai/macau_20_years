<template>
    <div class="timeline-component">
        <input type="range" name="timeline" id="timeline" min="1999" max="2019" v-model="timelineYear">
    </div>
</template>

<script>
export default {
    name: 'Timeline',
    data() {
        return {
            timelineYear: 1999
        }
    },
    watch: {
        timelineYear() {
            this.$store.commit('setCurrentYear', this.timelineYear);
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>