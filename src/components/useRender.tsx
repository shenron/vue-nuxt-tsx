import {CreateElement, VNode} from "vue";
import './style.scss'

export default function (h: CreateElement, context: any): VNode {
  return (
    <header class='header'>
      <h1 class='title'>Member</h1>
    </header>
  );
}
