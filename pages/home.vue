<!-- eslint-disable vue/valid-v-slot -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div>
    <div id="wrapper" style="height: 100vh">
      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div class="container-fluid">
            <div class="d-flex justify-content-end mb-3">
              <!--  Modal trigger button  -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalId"
              >
                Add Book
              </button>
            </div>
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
                          v-model="book.bookName"
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
                          v-model="book.classification"
                          class="form-select form-select"
                          name="classification"
                        >
                          <option selected>Select one</option>
                          <option value="History">History</option>
                          <option value="Geography and Anthropology">
                            Geography and Anthropology
                          </option>
                          <option value="Social Sciences">
                            Social Sciences
                          </option>
                          <option value="Political Science">
                            Political Science
                          </option>
                          <option value="Music">Music</option>
                          <option value="Fine Arts">Fine Arts</option>
                          <option value="Language and Linguistics">
                            Language and Linguistics
                          </option>
                          <option value="Science and math">
                            Science and math
                          </option>
                          <option value="Medicine">Medicine</option>
                          <option value="Agriculture">Agriculture</option>
                        </select>
                        <small id="helpId" class="form-text text-muted"
                          >Classification</small
                        >
                      </div>
                      <div class="row pb-2">
                        <input
                          id="name"
                          v-model="book.author"
                          type="text"
                          class="form-control"
                          name="name"
                          aria-describedby="helpId"
                          placeholder="Author"
                        />
                        <small id="helpId" class="form-text text-muted"
                          >Author Name</small
                        >
                      </div>
                      <div class="row pb-2">
                        <input
                          id="name"
                          v-model="book.borrowedDate"
                          type="date"
                          class="form-control"
                          name="name"
                          aria-describedby="helpId"
                          placeholder="Borrowed Date"
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
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                      @click="
                        addItem(
                          book.bookName,
                          book.classification,
                          book.author,
                          book.borrowedDate
                        )
                      "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <b-table
              class="text-dark"
              striped
              hover
              :items="books"
              :fields="fields"
            >
              <template #cell(ID)="data">
                <span>{{ data.value }}</span>
              </template>
              <template #cell(bookName)="data">
                <b-form-input
                  v-if="books[data.index].action"
                  v-model="books[data.index].bookName"
                  type="text"
                >
                </b-form-input>
                <span v-else>{{ data.value }}</span>
              </template>
              <template #cell(classification)="data">
                <select
                  v-if="books[data.index].action"
                  id="classification"
                  v-model="books[data.index].classification"
                  class="form-select form-select"
                  name="classification"
                >
                  <option selected>Select one</option>
                  <option value="History">History</option>
                  <option value="Geography and Anthropology">
                    Geography and Anthropology
                  </option>
                  <option value="Social Sciences">Social Sciences</option>
                  <option value="Political Science">Political Science</option>
                  <option value="Music">Music</option>
                  <option value="Fine Arts">Fine Arts</option>
                  <option value="Language and Linguistics">
                    Language and Linguistics
                  </option>
                  <option value="Science and math">Science and math</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Agriculture">Agriculture</option>
                </select>
                <span v-else>{{ data.value }}</span>
              </template>
              <template #cell(author)="data">
                <b-form-input
                  v-if="books[data.index].action"
                  v-model="books[data.index].author"
                  type="text"
                >
                </b-form-input>
                <span v-else>{{ data.value }}</span>
              </template>
              <template #cell(borrowedDate)="data">
                <b-form-datepicker
                  v-if="books[data.index].action"
                  v-model="books[data.index].borrowedDate"
                >
                </b-form-datepicker>
                <span v-else>{{ data.value }}</span>
              </template>
              <template #cell(action)="data">
                <b-button class="bg-primary" @click="editItem(data)">
                  <span v-if="!books[data.index].action">Edit</span>
                  <span v-else>Done</span>
                </b-button>
                <b-button class="bg-danger" @click="deleteItem(data)">
                  Delete
                </b-button>
              </template>
            </b-table>
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
      fields: [
        {
          key: 'ID',
          sortable: true,
        },
        {
          key: 'bookName',
          sortable: true,
        },
        {
          key: 'classification',
          sortable: true,
        },
        {
          key: 'author',
          sortable: true,
        },
        {
          key: 'borrowedDate',
          sortable: true,
        },
        {
          key: 'action',
        },
      ],
      book: {
        ID: '',
        bookName: '',
        classification: '',
        author: '',
        borrowedDate: '',
        action: false,
      },
      books: [],
      count: Math.floor(Math.random() * 99999999 + 1),
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
  mounted() {},
  methods: {
    addItem(ibookName, iClassification, iAuthor, iBorrowedDate) {
      this.books.push({
        ID: this.count++,
        bookName: ibookName,
        classification: iClassification,
        author: iAuthor,
        borrowedDate: iBorrowedDate,
        action: false,
      })
      this.book = []
    },
    editItem(data) {
      this.books[data.index].action = !this.books[data.index].action
    },
    deleteItem(data) {
      this.books.splice(data.index, 1)
    },
  },
}
</script>
