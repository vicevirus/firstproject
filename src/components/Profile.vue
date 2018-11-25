<template>
<div id="app">
    <b-jumbotron>
  <template slot="header">
    Profile page
  </template>
</b-jumbotron>
<el-card class="box-card">
  <div>
    <h3><b>Name:</b></h3>
    <el-input type="text" v-model="Name" :disabled="!isEditing"
           :class="{view: !isEditing}"></el-input>
  </div>
  <div>
  <h3><b>Sector:</b></h3>
    <el-input type="text" v-model="Sector" :disabled="!isEditing"
           :class="{view: !isEditing}"></el-input>
  </div>
  <div>
  <h3><b>No tel:</b></h3>
    <el-input type="text" v-model="Telefon" :disabled="!isEditing"
           :class="{view: !isEditing}"></el-input>
  </div>
  <div>
  <h3><b>Address:</b></h3>
    <el-input type="text" v-model="Address" :disabled="!isEditing"
           :class="{view: !isEditing}"></el-input>
  </div>
   <el-button type="primary" plain @click="isEditing = !isEditing">
    {{ isEditing ? 'Save' : 'Edit' }}
  </el-button>
  <el-button type="primary" plain v-if="isEditing" @click="isEditing = false">Cancel</el-button>
  </el-card>
</div>


</template>

<script>

export default {
    data() {
        return {
            Name: 'Salman bin Abu',
            Sector: 'Office',
            Telefon: '01494823',
            Address: '2843 ROAD AVENUA TAMAN LUSUH BANDAR SALAK SELATAN',
            isEditing: false
        }
    }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.app {
  border-color: transparent;
  background-color: initial;
  color: initial
}

</style>
