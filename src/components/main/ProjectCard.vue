<script>

export default {
    name: 'ProjectCard',
    data() {
        return {}
    },
    components: {},
    props: {
        project: Object,
        isDetail: Boolean
    },
    computed: {
        abstract() {
            if (this.isDetail) return this.project.description;
            const abstract = this.project.description.slice(0, 249) + '...';
            return abstract;
        }
  },
  methods: {
    formatDates($in_date) {
        const date = new Date($in_date);

        let day = date.getDate();
        let month = date.getMonth() + 1;
        const year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        const out_date = `${day}/${month}/${year} at ${hours}:${minutes}`;
        return out_date;
    }
  }
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
                <div class="description" v-if="project.description">
                    <span><strong>Description: </strong></span>
                    <div> {{ abstract }} </div>
                </div>
                <div class="author" v-if="project.author">
                    <span><strong>Author: </strong></span>
                    <span> {{ project.author.name }} </span>
                </div>
                <div class="createdAt">
                    <span><strong>Created: </strong></span>
                    <span> {{ formatDates(project.created_at) }} </span>
                </div>
                <div class="updatedAt">
                    <span><strong>Last Update: </strong></span>
                    <span> {{ formatDates(project.updated_at) }} </span>
                </div>
                <div class="type" v-if="project.type">
                    <span><strong>Type: </strong></span>
                    <span> {{ project.type.label }} </span>
                </div>
                <div class="technologies" v-if="project.technologies">
                    <span><strong>Technologies: </strong></span>
                    <span>
                        <ul>
                            <li v-for="technology in project.technologies" :key="technology.label">
                                <div class="badge rounded-pill" :class="`text-bg-${technology.color}`"> {{ technology.label }} </div>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
        <div class="card-footer py-3">
            <router-link v-if="!isDetail" class="btn btn-primary" :to="{name: 'detailPage', params: {id: project.id}}">Info</router-link>
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
