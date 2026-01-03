function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

<script>
  if (window.location.href.endsWith(".html")) {
    window.location.href = window.location.href.replace(".html", "");
  }
</script>
