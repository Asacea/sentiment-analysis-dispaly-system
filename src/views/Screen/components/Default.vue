<template>
    <div class="container">
        <button data-text="Awesome" class="button">
            <span class="actual-text">&nbsp;welcome&nbsp;</span>
            <span class="hover-text" aria-hidden="true">&nbsp;welcome&nbsp;</span>
        </button>
    </div>

</template>
<style scoped lang="scss">
*{
    padding:0;
    margin:0;
}
.container{
  position: fixed;
  bottom: 0;
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
    position: relative;
    height: fit-content;
    width: fit-content;
    background: transparent;
    border: none;
  }
  
  /* button styling */
  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(255,255,255,0.6);
    --animation-color: #37FF8B;
    --fs-size: 4em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }
  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }
  /* hover */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color))
  }
</style>
