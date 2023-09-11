<script>

export default {
  data() {
    return {}
  },
  components: {},
  props: {
    project: Object
  },
  computed: {
    getCreatedAt() {

    }
  },
  methods: {}
}
</script>

<template>
    <div class="card projectCard">
        <h2 class="card-title pb-3"> {{ project.title }} </h2>
        <div class="d-flex justify-content-center align-items-center" v-if="project.image">
            <img :src="project.image" class="card-img-top image" :alt="project.title">
        </div>
        <div class="card-body">
            <div class="cardInfo text-start">
                <div class="description">
                    <span><strong>Description: </strong></span>
                    <div> {{ project.description }} </div>
                </div>
                <div class="createdAt">
                    <span><strong>Created: </strong></span>
                    <span> {{ project.created_at }} </span>
                </div>
                <div class="updatedAt">
                    <span><strong>Last Update: </strong></span>
                    <span> {{ project.updated_at }} </span>
                </div>
                <div class="type">
                    <span><strong>Type: </strong></span>
                    <span> {{ project.type.label }} </span>
                </div>
                <div class="updatedAt">
                    <span><strong>Technologies: </strong></span>
                    <span>
                        <ul>
                            <li v-for="technology in project.technologies">
                                <div class="badge rounded-pill" :class="`text-bg-${technology.color}`"> {{ technology.label }} </div>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.image{
    width: 300px;
}

.projectCard{
    height: 100%;
}

ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.cardInfo>*{
    margin: 0.5rem 0;
}
</style>
