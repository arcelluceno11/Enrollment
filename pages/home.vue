<template>
  <div>
    <div id="wrapper" style="height: 100vh">
      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div class="container-fluid">
            <!-- Add Book Modal -->
            <div class="d-flex justify-content-end mb-3">
              <b-button v-b-modal="'modalAddBook'" class="bg-primary"
                >Add Book</b-button
              >
              <b-modal id="modalAddBook" title="Add Book Details">
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
                      v-model="book.bookClassification"
                      class="form-select form-select"
                      name="classification"
                    >
                      <option selected>Select one</option>
                      <option value="History">History</option>
                      <option value="Geography and Anthropology">
                        Geography and Anthropology
                      </option>
                      <option value="Social Sciences">Social Sciences</option>
                      <option value="Political Science">
                        Political Science
                      </option>
                      <option value="Music">Music</option>
                      <option value="Fine Arts">Fine Arts</option>
                      <option value="Language and Linguistics">
                        Language and Linguistics
                      </option>
                      <option value="Science and math">Science and math</option>
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
                      v-model="book.bookAuthor"
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
                <template #modal-footer>
                  <b-button
                    variant="primary"
                    class="float-right"
                    @click="addItem()"
                  >
                    Add
                  </b-button>
                </template>
              </b-modal>
            </div>

            <!-- Edit Book Modal -->
            <b-modal
              id="modalEditBook"
              title="Edit"
            >
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
                    v-model="book.bookClassification"
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
                  <small id="helpId" class="form-text text-muted"
                    >Classification</small
                  >
                </div>
                <div class="row pb-2">
                  <input
                    id="name"
                    v-model="book.bookAuthor"
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
              <template #modal-footer>
                <b-button
                  variant="primary"
                  class="float-right"
                  @click="updateBook()"
                >
                  Update
                </b-button>
              </template>
            </b-modal>

            <!-- Book Table -->
            <b-table
              class="text-dark"
              striped
              hover
              :items="books"
              :fields="fields"
            >
              <template #cell(action)="data">
                <b-button class="bg-primary" @click="editItem(data)">
                  Edit
                </b-button>
                <b-button class="bg-danger" @click="deleteItem(data)">
                  Delete
                </b-button>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: [],
      book: {
        ID: '',
        bookName: '',
        bookClassification: '',
        bookAuthor: '',
        borrowedDate: '',
      },
      fields: [
        {
          key: '_id',
          sortable: true,
        },
        {
          key: 'bookName',
          sortable: true,
        },
        {
          key: 'bookClassification',
          sortable: true,
        },
        {
          key: 'bookAuthor',
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
    }
  },
  mounted() {
    this.fetchBooks()
  },
  methods: {
    async fetchBooks() {
      await this.$axios.get('http://localhost:8080/books').then((result) => {
        this.books = result.data
      })

      let i = 0
      while (i < this.books.length) {
        this.books[i].action = false
        i++
      }
    },
    async addItem() {
      // Insert Data MongoDB
      await this.$axios.post('http://localhost:8080/books', {
        bookName: this.book.bookName,
        bookClassification: this.book.bookClassification,
        bookAuthor: this.book.bookAuthor,
        borrowedDate: this.book.borrowedDate,
      })

      // Reset the Values
      this.book.bookName = ''
      this.book.bookClassification = ''
      this.book.bookAuthor = ''
      this.book.borrowedDate = ''

      // Refresh the Table
      this.fetchBooks()

      // Hide the Modal
      this.$bvModal.hide('modalAddBook')
    },
    async deleteItem(data) {
      // Delete Data MongoDB
      await this.$axios.delete(
        'http://localhost:8080/books/' + this.books[data.index]._id
      )

      // Refresh the Table
      this.fetchBooks()
    },
    async updateBook() {
      // Update Data MongoDB
      await this.$axios.put('http://localhost:8080/books/' + this.book.ID, {
        bookName: this.book.bookName,
        bookClassification: this.book.bookClassification,
        bookAuthor: this.book.bookAuthor,
        borrowedDate: this.book.borrowedDate,
      })

      // Reset the Values
      this.book.bookName = ''
      this.book.bookClassification = ''
      this.book.bookAuthor = ''
      this.book.borrowedDate = ''

      // Refresh the Table
      this.fetchBooks()

      // Hide the Modal
      this.$bvModal.hide('modalEditBook')
    },
    editItem(data) {
      // Set the Values
      this.book.ID = this.books[data.index]._id
      this.book.bookName = this.books[data.index].bookName
      this.book.bookClassification = this.books[data.index].bookClassification
      this.book.bookAuthor = this.books[data.index].bookAuthor
      this.book.borrowedDate = this.books[data.index].borrowedDate

      // Show the Modal
      this.$bvModal.show('modalEditBook')
    },
  },
}
</script>
