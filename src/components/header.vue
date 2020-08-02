<template>


    
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand><b>Hello!</b></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Main</router-link></b-nav-item>
        <b-nav-item><router-link to="/contact">Contact</router-link></b-nav-item>
        <b-nav-item><router-link to="/weather">Weather</router-link></b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>


</template>

<script>
export default {
    
}
</script>

<style scoped>

a {
    color: #fff;
}

</style>