<script>
  export default {
    name: 'FootBar',
  };
</script>

<template>
  <footer class="footer">
    <div class="social-icons">
      <a href="https://instagram.com">
        <img src="../assets/images/insta.png" alt="Instagram">
      </a>
      <a href="https://twitter.com">
        <img src="../assets/images/twitter.png" alt="Twitter">
      </a>
      <a href="https://linkedin.com">
        <img src="../assets/images/linkedin.png" alt="LinkedIn">
      </a>
      <a href="https://facebook.com">
        <img src="../assets/images/facebook.png" alt="Facebook">
      </a>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
}
.social-icons a {
  margin: 0 10px;
}
.social-icons img {
  width: 30px;
  height: 30px;
}
.copyright img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
.copyright span {
  font-size: 14px;
}
</style>
