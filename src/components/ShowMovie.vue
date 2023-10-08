<template>
  <div>
    <!-- Bootstrap Modal -->
    <div
      class="modal fade"
      :id="'movieModal' + movie.id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="movieModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title fs-5" id="exampleModalLabel">
              Movie Title: {{ movie.title }}
            </h2>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <h4 class="modal-title fs-5 fst-italic" id="exampleModalLabel">
                Movie tagline: '{{ movie.tagline }}'
              </h4>
              <p>Description: {{ movie.overview }}</p>
              <p>Langauge: {{ movie.original_language }}</p>
              <p>Release Date: {{ movie.release_date }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>

        <!-- Button to trigger the modal -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"], // Pass movie details as a prop
};
</script>
