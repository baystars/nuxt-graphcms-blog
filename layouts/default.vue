<template>
  <div>
    <section class="hero is-primary is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-start">
                <nuxt-link
                  active-class="is-active"
                  to="/"
                  class="navbar-item"
                  exact
                  >Home</nuxt-link
                >

                <nuxt-link
                  active-class="is-active"
                  to="/blog"
                  class="navbar-item"
                  exact
                  >Blog</nuxt-link
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">My Portfolio</h1>

          <h2 class="subtitle">Nuxt + GraphCMS + Netlify Sample</h2>
        </div>
      </div>
    </section>
    <!-- displays the page component -->
    <nuxt />
  </div>
</template>

<style>
.main-content {
  margin: 30px 0;
}
</style>
 