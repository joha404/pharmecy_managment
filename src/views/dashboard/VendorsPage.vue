<template>
  <div>
    <div class="d-flex jc-between ai-center">
      <h2>vendors</h2>
      <the-button @click="addModal = true">Add new</the-button>
    </div>
    <div class="text-center" v-if="gettingVendors">Loading..</div>

    <table class="mt-4" v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vendor in vendors" :key="vendor.name">
          <td>{{ vendor.name }}</td>
          <td>{{ vendor.description }}</td>
          <td>
            <img
              src="./img/edit.png"
              alt=""
              class="action-icon"
              @click="
                selectedVendor = vendor;
                editModal = true;
              "
            />
            <img
              src="./img/trash.png"
              alt=""
              class="action-icon action-icon-delete"
              @click="
                selectedVendor = vendor;
                deleteModal = true;
              "
            />
          </td>
        </tr>
      </tbody>
    </table>
    <the-modal v-model="addModal" heading="Add New Vendor">
      <form @submit.prevent="addNew">
        <label class="block">Vendor Name</label>
        <input
          type="text"
          placeholder="Enter vendor name"
          class="mt-1 w-100"
          required
          v-model="newVendor.name"
        />
        <label class="block mt-3">Description</label>
        <input
          type="text"
          placeholder="Write short description"
          class="mt-1 w-100"
          required
          v-model="newVendor.description"
        />
        <the-button :loading="adding" class="w-100 pt-2">Add</the-button>
      </form>
    </the-modal>

    <!-- updating vendor  -->
    <the-modal v-model="editModal" heading="Edit vendor">
      <form @submit.prevent="editVendor">
        <label class="block">Vendor Name</label>
        <input
          type="text"
          placeholder="Enter vendor name"
          class="mt-1 w-100"
          required
          v-model="selectedVendor.name"
        />
        <label class="block mt-3">Description</label>
        <input
          type="text"
          placeholder="Write short description"
          class="mt-1 w-100"
          required
          v-model="selectedVendor.description"
        />
        <the-button :loading="editing" class="w-100 pt-2"
          >Save Changes</the-button
        >
      </form>
    </the-modal>

    <!-- another modal for deleting vendors -->

    <the-modal v-model="deleteModal" heading="Are you sure">
      <p>
        Do you really want to delete
        <strong>{{ selectedVendor.name }}</strong>
      </p>
      <the-button class="pt-4" @click="deleteVendor" :loading="deleting"
        >Yes</the-button
      >
      <the-button class="mt-4 mx-3" @click="deleteModal = false">No</the-button>
    </the-modal>
  </div>
</template>

<script>
// import axios from 'axios'
import TheButton from "../../components/TheButton.vue";
import TheModal from "../../components/TheModal.vue";
import { MyError, MySuccess } from "../../utils/functions";

import myService from "../../service/privectService";
import axios from "axios";

export default {
  name: "Vendors",
  data() {
    return {
      addModal: false,
      deleteModal: false,
      editModal: false,
      newVendor: {
        name: "",
        description: "",
      },
      selectedVendor: {},
      deleting: false,
      editing: false,
      adding: false,
      vendors: [],
      gettingVendors: false,
    };
  },
  components: {
    TheButton,
    TheModal,
  },
  mounted() {
    this.getAllVendors();
  },
  methods: {
    resetForm() {
      this.newVendor = {
        name: "",
        description: "",
      };
    },
    getAllVendors() {
      this.gettingVendors = true;
      myService
        .getVendors()
        .then((res) => {
          this.vendors = res.data;
        })
        .catch((err) => {
          MyError(err);
        })
        .finally(() => {
          this.gettingVendors = false;
        });
    },

    addNew() {
      this.adding = true;
      myService
        .addVendor(this.newVendor)

        .then((res) => {
          MySuccess(res);
          this.addModal = false;
          this.resetForm();
          this.getAllVendors();
        })
        .catch((err) => {
          MyError(err);
        })
        .finally(() => {
          this.adding = false;
        });
    },
    deleteVendor() {
      this.deleting = true;

      axios;
      myService
        .deleteVendor(this.selectedVendor._id)
        .then((res) => {
          MySuccess(res);
          this.deleteModal = false;
          this.getAllVendors();
        })
        .catch((err) => {
          MyError(err);
        })
        .finally(() => {
          this.deleting = false;
        });
    },
    editVendor() {
      this.editing = true;

      myService
        .editVendor(this.selectedVendor)
        .then((res) => {
          MySuccess(res);
          this.editModal = false;
        })
        .catch((err) => {
          MyError(err);
        })
        .finally(() => {
          this.editing = false;
        });
    },
  },
};
</script>

<style>
.the-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.the-modal__container {
  width: 444px;
  min-height: 222px;
  background-color: rgb(235, 235, 235);
  border-radius: 9px;
  box-shadow: 0 0 15px 5px rgb(0 0 0 / 20%);
}
.the-modal__header {
  font-size: 22px;
  font-weight: bold;
  color: red;
}
.the-modal__close {
  cursor: pointer;
  padding: 3px 9px;
  font-weight: bold;
}
.the-modal__close:hover {
  color: green;
}
.action-icon {
  width: 18px;
  height: 18px;
}
</style>
