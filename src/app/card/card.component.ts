import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  Department= [
    {
    id:1,
    title:"SHIRT",
    Image:"https://sfycdn.speedsize.com/d31641c5-60cb-4a0b-8662-59094f81bb6e/https://row.representclo.com/cdn/shop/files/lLlqkQwyGer18TKk2fNigmyeI-L_5izTI-mDvqo-sY8.jpg?v=1721316692&width=1280",
    description:"REPRESENT BY ASIM",
  },
  {
    id:2,
    title:"SHIRT",
    Image:"https://sfycdn.speedsize.com/d31641c5-60cb-4a0b-8662-59094f81bb6e/https://row.representclo.com/cdn/shop/files/roQI63V9jJYxl2wS3PR1utBKHuyswupdc2R2_pxMd1M.jpg?v=1721316692&width=1280",
    description:"REPRESENT BY ASIM",
  },
  {
    id:3,
    title:"SHIRT",
    Image:"https://sfycdn.speedsize.com/d31641c5-60cb-4a0b-8662-59094f81bb6e/https://row.representclo.com/cdn/shop/files/v-EDCfyFMr0_O3dtNVUpkLO0Gr9rbmfmyw7Eu0RtXeY.jpg?v=1721316692&width=1280",
    description:"REPRESENT BY ASIM",
  },
  {
    id:4,
    title:"SHIRT",
    Image:"https://sfycdn.speedsize.com/d31641c5-60cb-4a0b-8662-59094f81bb6e/https://row.representclo.com/cdn/shop/files/vg2FcoWTkKwvm99RYqPZjDdptUxdOnhczg3u3UCBuWc.jpg?v=1721316692&width=1280",
    description:"REPRESENT BY ASIM",
  },
  
]}
