import { defineCustomElement } from "vue";
import CurrentTime from "../CurrentTime.ce.vue";

export default function getCurrentTime() {
  const CurrentTimeElement = defineCustomElement(CurrentTime);
  customElements.define("current-time", CurrentTimeElement);
  return customElements;
}
getCurrentTime();
