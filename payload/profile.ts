import { faEnvelope, faPhone, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile_hsy.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '벌레 잡는 웹 개발자',
    small: '(한시연)',
  },
  contact: [
    {
      title: 'siyeonhan7@gmail.com',
      link: 'mailto:siyeonhan7@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/ithansiyeon',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/siyeon97/',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: '이력서 및 포트폴리오',
    icon: faInfoCircle,
  },
};

export default profile;
