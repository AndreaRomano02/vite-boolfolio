<script>
export default {
  name: 'HomePage',
};
</script>

<template>
  <div id="guest-home">
    <div class="container pb-5">
      <div class="row h-100">

        <div class="col-8 py-4 left">
          <h1>Hello World</h1>
          <p>I'm Andrea Romano and I am Junior Full Stack Web Developer.</p>

          <h2>The last Projects</h2>

          <!-- <ul class="last-projects p-0">
            @forelse ($projects as $project)
            <li class="project-title">
              <a href="#">{{ $project -> title }}
                <span class="project-year">{{ $project -> getYearCreated() }}</span>
                <span class="project-year">{{ $project -> type -> label }}</span>
              </a>
            </li>
            @empty
            <h2>Non ci sono progetti</h2>
            @endforelse
          </ul> -->
        </div>
        <div class="col-4 right">
        </div>
      </div>
    </div>
    <img class="image-home" src="../assets/img/andrea.jpg" alt="Andrea">
  </div>
</template>

<style scoped lang="scss">
@use "../scss/vars" as *;

#guest-home {
  position: relative;
  min-height: calc(100vh - 166px);


  .left {
    h1 {
      color: red;
      font-family: "M PLUS 1 Code", monospace;
      font-family: "Montserrat", sans-serif;
      font-family: "Press Start 2P", cursive;

      overflow: hidden;
      /* Ensures the content is not revealed until the animation */
      white-space: nowrap;
      /* Keeps the content on a single line */
      letter-spacing: 0.15em;
      /* Adjust as needed */
      animation: typing 2.5s steps(30, end) infinite;
    }

    p {
      width: 90%;
      margin-top: 15px;
      font-family: "M PLUS 1 Code", monospace;
      font-size: 1.8rem;
    }

    h2 {
      font-family: 'Abduction2002', sans-serif;
      font-size: 3rem;
      background-color: $lightred;
      display: inline-block;
      padding: 1.5rem;
      border-radius: 20px;
      margin-top: 80px;
    }
  }

  .image-home {
    animation: slideIn 1s ease-out forwards;

    width: 40%;
    position: absolute;
    top: -10px;
    right: 0;
    max-width: 100%;
    opacity: 1;

  }

  .last-projects {

    .project-title {
      width: 75%;
      padding-top: 35px;

      &:hover {
        transform: matrix(1, 0.17, 0.36, 1.11, 0, 0);
      }

      &:hover a {
        text-shadow: 5px 10px 6px gray;
      }
    }

    a {
      padding: 35px 0;
      color: black;
      text-decoration: none;
      font-weight: bolder;
      font-size: 6rem;
      font-family: 'Druk Cond Trial', sans-serif;

    }

    .project-year {
      font-size: 2.5rem;
      margin-left: 20px;
    }
  }
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 70%;
  }
}

@keyframes visibility {
  0% {
    opacity: 0;
  }

  99% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(500px) scale(0.4);
  }

  100% {
    transform: translateX(0px) scale(1);
  }
}
</style>