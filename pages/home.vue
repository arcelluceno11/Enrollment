<template>
  <div>
    <div id="wrapper" style="height: 100vh">
      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div class="container-fluid">
            <div class="pb-3 d-flex justify-content-end">
              <!--  Modal trigger button  -->
              <button
                type="button"
                class="btn btn-primary"
                @click="addBook('Nametest', 'Test')"
              >
                Add Book
              </button>
              <!-- Modal Body-->
              <div
                id="modalId"
                class="modal fade"
                tabindex="-1"
                role="dialog"
                aria-labelledby="modalTitleId"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modalTitleId" class="modal-title">Add Book</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="container-fluid">
                        <div class="row pb-2">
                          <input
                            id="name"
                            type="text"
                            class="form-control"
                            name="name"
                            aria-describedby="helpId"
                            placeholder="Book Name"
                          />
                          <small id="helpId" class="form-text text-muted"
                            >Book Name</small
                          >
                        </div>
                        <div class="row pb-2">
                          <select
                            id="classification"
                            class="form-select form-select"
                            name="classification"
                          >
                            <option selected>Select one</option>
                            <option value="">History</option>
                            <option value="">Geography and Anthropology</option>
                            <option value="">Social Sciences</option>
                            <option value="">Political Science</option>
                            <option value="">Music</option>
                            <option value="">Fine Arts</option>
                            <option value="">Language and Linguistics</option>
                            <option value="">Science and math</option>
                            <option value="">Medicine</option>
                            <option value="">Agriculture</option>
                            <option value="">Technology</option>
                            <option value="">
                              Bibliography and Library Science
                            </option>
                          </select>
                          <small id="helpId" class="form-text text-muted"
                            >Classification</small
                          >
                        </div>
                        <div class="row pb-2">
                          <input
                            id="name"
                            type="text"
                            class="form-control"
                            name="name"
                            aria-describedby="helpId"
                            placeholder="Book Name"
                          />
                          <small id="helpId" class="form-text text-muted"
                            >Author Name</small
                          >
                        </div>
                        <div class="row pb-2">
                          <input
                            id="name"
                            type="date"
                            class="form-control"
                            name="name"
                            aria-describedby="helpId"
                            placeholder="Book Name"
                          />
                          <small id="helpId" class="form-text text-muted"
                            >Borrowed Date</small
                          >
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <table id="example" class="table table-striped" style="width: 100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Classification</th>
                  <th>Author</th>
                  <th>Borrowed Date</th>
                  <th>Last Modified</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="book in books" :key="book.message">
                  <td>{{ book.bookName }}</td>
                  <td>{{ book.bookClassification }}</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2012-03-29</td>
                  <td>
                    <a
                      id=""
                      name=""
                      class="btn btn-primary me-1"
                      href="#"
                      role="button"
                      >Edit</a
                    ><a
                      id=""
                      name=""
                      class="btn btn-danger me-1"
                      href="#"
                      role="button"
                      >Delete</a
                    >
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Classification</th>
                  <th>Author</th>
                  <th>Borrowed Date</th>
                  <th>Last Modified</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <a class="border rounded d-inline scroll-to-top" href="#page-top"
        ><i class="fas fa-angle-up"></i
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: [],
      dt: ''
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js',
          body: true,
        },
        {
          src: 'https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js',
          body: true,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap5.min.css',
        },
      ],
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.dt = $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#example').DataTable()
    });
  },
  methods: {
    addBook(Name, Classification) {
      this.books.push({
        bookName: Name,
        bookClassification: Classification,
      });
    },
    deleteBook() {},
    updateBook() {},
  },
}
</script>
