import { trigger, transition, animate, style, state } from "@angular/animations";

export let tagger=trigger('tagger',[
  state('hidden',style({
    transform:'translateX(100%)',
  })),
  state('visible',style({
    transform:'translateX(0px)',
  })),
  transition('hidden=>visible',animate('0.8s ease-out')),
  transition('visible=>hidden',animate('0.6s ease-in'))

])
export let  videoNav=trigger('videoNav',[
  state('hidden',style({
    transform:'translateX(100%)',
  })),
  state('visible',style({
    transform:'translateX(0px)',
  })),
  transition('hidden=>visible',animate('0.8s ease-out')),
  transition('visible=>hidden',animate('0.6s ease-in'))

])


