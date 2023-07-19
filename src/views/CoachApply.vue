<template>
  <h1>教練申請</h1>
  <form action="/submit" method="post" enctype="multipart/form-data">
    <container>
      <div class="col-md-4 col-xs-6">
        <label for="name">姓名：</label>
        <input type="text" id="name" name="name" required /><br />
      </div>
    </container>
    <container>
      <div class="col-md-4 col-xs-6">
        <label for="email">電子郵件：</label>
        <input type="email" id="email" name="email" required /><br />
      </div>
    </container>
    <label for="self_intro">自我介紹：</label><br />
    <textarea
      id="self_intro"
      name="self_intro"
      rows="4"
      cols="50"
      required
    ></textarea
    ><br />

    <label for="photo">上傳照片：</label>
    <input
      type="file"
      id="photo"
      name="photo"
      accept="image/*"
      required
    /><br />

    <input type="submit" value="提交申請" />
  </form>
</template>
<script
  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
  integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
  crossorigin="anonymous"
></script>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
  integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
  crossorigin="anonymous"
></script>
