import { IResult } from "./types";

import Abyssinian from '../../assets/cat/abyssinian.jpg';
import Ameshort from '../../assets/cat/ameshort.jpg';
import Bengal from '../../assets/cat/bengal.jpg';
import Balinese from '../../assets/cat/balinese.jpg';
import British from '../../assets/cat/british.jpg';
import Exotic from '../../assets/cat/exotic.jpg';
import Korshort from '../../assets/cat/korshort.jpg';
import Lynx from '../../assets/cat/lynx.jpg';
import Mainecoon from '../../assets/cat/mainecoon.jpg';
import Munchkin from '../../assets/cat/munchkin.jpg';
import Norwegianforest from '../../assets/cat/norwegian.jpg';
import Persian from '../../assets/cat/persian.jpg';
import Ragdoll from '../../assets/cat/ragdoll.jpg';
import RussianBlue from '../../assets/cat/russianblue.jpg';
import Scottishfold from '../../assets/cat/scottishfold.jpg';
import Siamese from '../../assets/cat/siamese.jpg';
import Sphinx from '../../assets/cat/sphinx.jpg';
import Tonkinese from '../../assets/cat/tonkinese.png';
import Turkishangora from '../../assets/cat/turkishangora.jpg';


export const resultData: IResult[] = [
  {
    id: 1,
    name: '브리티쉬 숏헤어',
    best: 'ISTJ',
    desc: '내성적이고 지적이라 훈련이 쉽고 빠른 편이며, 기억력도 좋아요. 가족들과 친밀한 관계를 맺고 끝까지 충실한 고양이입니다.',
    image: `${British}`
  },
  {
    id: 2,
    name: '스라소니',
    best: 'ISTP',
    desc: '과묵하고 분석적이며 적응력이 강해요. 개인적이고 지능적이며 뭔가를 실행하기 전에 주의 깊게 분석하고 효율적으로 행동하는 독립적인 고양이입니다.',
    image: `${Lynx}`
  },
  {
    id: 3,
    name: '드래곤 리',
    best: 'ESTJ',
    desc: '똑똑하고 친근하며 책임감이 넘쳐 가족이나 다른 고양이들을 보호하는 스타일이에요. 기억력도 좋고 활동성이 있어 재능있는 사냥꾼 고양이입니다.',
    image: `${Korshort}`
  },
  {
    id: 4,
    name: '페르시안',
    best: 'ISFJ',
    desc: '성실하고 느긋하면서도 우아해요. 집사에게 충실하며 평화롭고 고요한 환경을 선호하는 고양이입니다.',
    image: `${Persian}`
  },
  {
    id: 5,
    name: '아나톨리안',
    best: 'ISFP',
    desc: "온화하면서도 조용해요. 큰 몸집인데도 불구하고 다른 동물과 어린 아이를 배려해 '온순한 거인'이라고도 불리는 고양이입니다.",
    image: `${Turkishangora}`
  },
  {
    id: 6,
    name: '스핑크스',
    best: 'ESFP',
    desc: '장난기 많고 활기차며 친근감 넘쳐요. 사랑스럽고 사교적인 성격으로 인해 가장 애정이 넘치는 고양이입니다.',
    image: `${Sphinx}`
  },
  {
    id: 7,
    name: '스코티쉬 폴드',
    best: 'ESFJ',
    desc: '애정이 넘치고 사랑스러워요. 사람과 함께 하는 것을 매우 좋아하는 고양이입니다.',
    image: `${Scottishfold}`
  },
  {
    id: 8,
    name: '러시안 블루',
    best: 'INFJ',
    desc: '부드럽고 조용하며 상대방을 잘 이해해줘요. 내성적이지만 누군가를 신뢰하기 시작한다면 다정해지며 도우려는 고양이입니다.',
    image: `${RussianBlue}`
  },
  {
    id: 9,
    name: '버만',
    best: 'INFP',
    desc: '온순하고 침착해요. 자기 혼자만의 시간을 좋아해 조용하고 평화로운 시간을 즐기는 고양이입니다.',
    image: `${Ragdoll}`
  },
  {
    id: 10,
    name: '싱가푸라',
    best: 'ENFP',
    desc: '상상력과 순발력이 뛰어나요. 탐험하고 노는 것을 좋아하며 활발하고 호기심 많은 고양이입니다.',
    image: `${Abyssinian}`
  },
  {
    id: 11,
    name: '통키니즈',
    best: 'ENFJ',
    desc: '열정적이고 친근하며 똑똑해요. 사람과 함께 하는 것을 즐기지만 고집이 세고 의지가 강한 고양이입니다.',
    image: `${Tonkinese}`
  },
  {
    id: 12,
    name: '노르웨이 숲',
    best: 'INTJ',
    desc: '독립적이면서 분석력이 뛰어나요. 정기적으로 새로운 걸 배우는 걸 좋아하고, 복잡한 퍼즐 장난감을 갖고 노는 걸 좋아하는 고양이입니다.',
    image: `${Norwegianforest}`
  },
  {
    id: 13,
    name: '터키쉬 앙고라',
    best: 'INTP',
    desc: '지능적이고 호기심이 많아요. 무슨 일이 일어날지 궁금해서 여러가지 물건에 관심을 보이는 고양이입니다.',
    image: `${Turkishangora}`
  },
  {
    id: 14,
    name: 'ENTP',
    best: '발리니즈',
    desc: '박학다식하고 독창적이에요. 새롭고 독특한 방법으로 주변을 탐험하는 데 관심이 많으며, 지루함을 싫어하는 고양이입니다.',
    image: `${Balinese}`
  },
  {
    id: 15,
    name: '샴',
    best: 'ENTJ',
    desc: '외향적이고 지배적이에요. 자신의 의견을 전달하고 알리는 것을 좋아하는 고양이입니다.',
    image: `${Siamese}`
  },
  {
    id: 16,
    name: '뱅갈',
    best: 'ESTP',
    desc: '자신감 넘치고 민첩해요. 뭐든지 쉽게 배우며 새로운 것에 대한 관심도 많은 고양이입니다.',
    image: `${Bengal}`
  },
];

