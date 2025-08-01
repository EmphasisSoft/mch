import { StaticImageData } from "next/image";

import service_img_1 from "@/assets/img/services/service-icon-1.png";
import service_img_2 from "@/assets/img/services/service-icon-2.png";
import service_img_3 from "@/assets/img/services/service-icon-3.png";
import service_img_4 from "@/assets/img/services/service-icon-4.png"; 

import service_img_4_1 from "@/assets/img/home4/services/h4__services__thumb1.png"; 
import service_img_4_2 from "@/assets/img/home4/services/h4__services__thumb2.png"; 
import service_img_4_3 from "@/assets/img/home4/services/h4__services__thumb3.png"; 

import service_img_5_1 from "@/assets/img/services/service1.png";
import service_img_5_2 from "@/assets/img/services/service2.png";
import service_img_5_3 from "@/assets/img/services/service3.png";
import service_img_5_4 from "@/assets/img/services/service4.png";
import service_img_5_5 from "@/assets/img/services/service5.png";
import service_img_5_6 from "@/assets/img/services/service6.png";

interface ServciesDataType {
  id: number;
  img: StaticImageData;
  sub_title?: string;
  title: string;
  sm_des: string;
  // pagse 
  service?: boolean;
}[]

const servcies_data: ServciesDataType[] = [
  {
    id: 1,
    img: service_img_1,
    sub_title: "Older & Children",
    title: "Medical Home Care",
    sm_des: "exercitation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip.",
  },
  {
    id: 2,
    img: service_img_2,
    sub_title: "Older & Children",
    title: "Medical Eye Point",
    sm_des: "exercitation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip.",
  },
  {
    id: 3,
    img: service_img_3,
    sub_title: "Older & Children",
    title: "Medical Older Care",
    sm_des: "exercitation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip.",
  },
  {
    id: 4,
    img: service_img_4,
    sub_title: "Older & Children",
    title: "Medical Dental Care",
    sm_des: "exercitation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip.",
  },
  // home 04 
  {
    id: 1,
    img: service_img_4_1,
    sub_title: "Surgical Care",
    title: "Medical Treatment",
    sm_des: "A hospital is a healthcare institution that provides medical treatment and care to patients, including diagnosis, treatment, and housing during  the treatment process.",
  },
  {
    id: 2,
    img: service_img_4_2,
    sub_title: "24/7 Emergency",
    title: "Emergency Help",
    sm_des: "108: Toll-free number for Ambulance Services and medical Emergencies. 112: National emergency number that connects to police, fire, and Ambulance Services.",
  },
  {
    id: 3,
    img: service_img_4_3,
    sub_title: "Expert Physicians",
    title: "Qualified Doctors",
    sm_des: "A medical professional who has completed the necessary education, training, and Licensing requirements diagnoses, treats, and prevents disease.",
  },
  {
    id: 4,
    img: service_img_4_3,
    sub_title: "Trusted Care Team",
    title: "Medical professionals",
    sm_des: "Medical professional include doctors, nurse, hospice workers, emergency medical technicians, and other trained Caregivers.",
  },
  // service data 
  {
    id: 1,
    img: service_img_5_1,
    service: true,
    title: "Body Surgery",
    sm_des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    id: 2,
    img: service_img_5_2,
    service: true,
    title: "Dental Fillings",
    sm_des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    id: 3,
    img: service_img_5_3,
    service: true,
    title: "Neurology Sargery",
    sm_des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    id: 4,
    img: service_img_5_4,
    service: true,
    title: "Neurology Sargery",
    sm_des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    id: 5,
    img: service_img_5_5,
    service: true,
    title: "Neurology Sargery",
    sm_des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    id: 6,
    img: service_img_5_6,
    service: true,
    title: "Neurology Sargery",
    sm_des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },


]
export default servcies_data