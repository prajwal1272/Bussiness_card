import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faShareNodes} from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  icon=faPhone;
  icon1=faEnvelope;
  icon2=faGlobe;
  icon3=faLocationDot;
  icon4=faShareNodes;
  icon7=faArrowCircleRight;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
