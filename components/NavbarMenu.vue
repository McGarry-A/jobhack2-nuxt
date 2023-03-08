<template>
  <nav class="NavbarMenu">
    <content-wrapper>
      <ul class="NavbarMenu-List">
        <li class="NavbarMenu-ListItem">Home</li>
        <li class="NavbarMenu-ListItem">Contact</li>
        <li class="NavbarMenu-ListItem NavbarMenu-ListItemButton">
          My Account
        </li>
      </ul>
    </content-wrapper>
  </nav>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
.NavbarMenu {
  width: 100%;
  padding: 1rem;

  &-List {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    gap: $padding-s;
    cursor: pointer;

    &Item {
      cursor: pointer;

      &Button {
        background: skyblue;
        padding: 0.3rem 1rem;
        border-radius: 0.2rem;
        color: white;
      }
    }
  }
}
</style>