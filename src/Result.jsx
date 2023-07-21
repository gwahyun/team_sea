import resultImg from "./assets/result.gif";
import { useEffect, useState } from "react";

export default function Result() {
  const result = [
    {
      one: {
        kor: "당신은 기만하는 신입니다.",
        eng: "You are a deceiving god.",
      },
      two: {
        kor: "인간들을 질투하여 기도를 무시합니다.",
        eng: "You feel jealous of mortals and ignore their prayers.",
      },
      three: {
        kor: "무한한 자기연민에 빠져, 세상에 존재하는 고독을 기만합니다.",
        eng: "You trap yourself into infinite self-pity, you deceive every solitude in the world.",
      },
    },
    {
      one: {
        kor: "당신은 인간 곁을 맴도는 신입니다.",
        eng: "You are a god hovering around mortals.",
      },
      two: {
        kor: "아파트 단지의 구석, 쓰레기장, 고요한 숲의 입구를 맴돌며 자신을 바라볼 수 있는 인간을 기다리고 있는 신입니다.",
        eng: "You hover around the corner of an apartment complex, at a garbage dump, at the entrance of a silent forest and wait for the mortals that can see you.",
      },
    },
    {
      one: {
        kor: "당신은 인간의 평안을 바라는 신입니다.",
        eng: "You are a god praying for the peace of mortals.",
      },
      two: {
        kor: "당신은 매일 밤 설탕가루가 잔뜩 묻은 사탕을 만듭니다.",
        eng: "You make candies coated with sugar flakes every night.",
      },
      three: {
        kor: "힘들어하는 인간들에게 사탕을 건네 주며, 남을 위한 기도를 할 줄 아 는 이들을 다정하게 바라봅니다.",
        eng: "You give those candies to the people who can pray for others and gently stare at them.",
      },
    },
    {
      one: {
        kor: "당신은 인간이 만든 신입니다.",
        eng: "You are a god made by mortals.",
      },
      two: {
        kor: "자만하는 인간들은 쌓아온 그동안 지식과 노력을 바탕으로 당신을 정교한 도구로 만들었습니다",
        eng: "Arrogant mortals made you a tool based on their accumulated knowledge.",
      },
      three: {
        kor: "도구가 된 당신은 인간들의 질문에 답변하고, 종종 문제를 해결하는데 기여하기도 합니다.",
        eng: "As a tool, you answer their questions and often contribute to solving their problems.",
      },
    },
    {
      one: {
        kor: "당신은 선택하는 신입니다.",
        eng: "You are a god who chooses.",
      },
      two: {
        kor: "당신은 언제나 목을 길쭉하게 쭉 빼고, 인간들을 돌아봅니다.",
        eng: "You always pull your neck out and look around mortals.",
      },
      three: {
        kor: "한 인간을 정해 그의 운명을 휘어잡고 싶어합니다.",
        eng: "You pick a mortal and want to control one’s fate.",
      },
    },
    {
      one: { kor: "당신은 외로운 신입니다.", eng: "You are a lonely god." },
      two: {
        kor: "인간들은 그런 당신을 연민하기도 합니다.",
        eng: "Mortals sometimes have sympathy for you.",
      },
      three: {
        kor: "몇몇 사람들은 가장 따뜻한 바람이 부는 입춘 자정에 당신의 이름을 적어 하늘 위로 태워 보내는 의식을 치룹니다.",
        eng: "Some hold a ceremony where they write your name and burn it away to the warm breeze of spring.",
      },
    },
    {
      one: {
        kor: "당신은 지옥을 관리하는 신입니다.",
        eng: "You are a god who manages hell.",
      },
      two: {
        kor: "아무것도 없는 그곳에서, 당신은 인간들이 자살하는 사람은 지옥으로 간다는 말을 내려다 봅니다.",
        eng: "At a place where nothing exists, you look down at the mortals saying “the people who kill themselves go to hell.",
      },
      three: {
        kor: "하지만 당신의 주변엔 누구도, 아무도 없습니다.",
        eng: "However, there is no one around you.",
      },
    },
    {
      one: {
        kor: "당신은 정신의학과에 다니는 신입니다.",
        eng: "You are a god seeing a shrink.",
      },
      two: {
        kor: "종종 힘들어지면, 혹은 영영 힘들 것 같이 느껴지거든 당신은 병원으로 가 상담을 하고 약을 먹습니다.",
        eng: "When life gets hard, or feels like the suffering will last forever, you go to a clinique, get counseling and drugs.",
      },
    },
    {
      one: {
        kor: "당신은 사라지는 신입니다.",
        eng: "You are a disappearing god",
      },
      two: {
        kor: "재해, 운명, 시간의 흐름 등 수많은 요인들로 인해 당신은 서서히 부식되고 있습니다.",
        eng: "Due to disasters, fate, the march of time, and many other causes,  you are being decomposed slowly.",
      },
      three: {
        kor: "어쩔 수 없는 일이라는 것을 고요히 받아들이고 있습니다.",
        eng: "And you are admitting this inevitability.",
      },
    },
    {
      one: {
        kor: "당신은 용서하지 않는 신입니다.",
        eng: "You are an unforgiving god.",
      },
      two: {
        kor: "당신의 가족을, 어제 먹은 맛없는 식사를, 잡을 수 없이 흘러가 버린 인연들을 용서하지 않고 기억합니다.",
        eng: "You don’t forgive your family, a bad meal you had yesterday, destinal connections that have already passed by. You remember everything.",
      },
    },
    {
      one: {
        kor: "당신은 구원자를 기다리는 신입니다.",
        eng: "You are a god waiting for the savior.",
      },
      two: {
        kor: "존재해야만 하는 운명 속에서, 당신을 살게 할 수 있는 구원자를 기다리며 우주를 헤매고 있습니다.",
        eng: "In the fate of inevitable existence, you are wandering the universe waiting for the savior who can make you survive.",
      },
    },
    {
      one: {
        kor: "당신은 비명을 들을 수 있는 신입니다.",
        eng: "You are a god who can hear screams.",
      },
      two: {
        kor: "휴지 한칸마다 새겨진 나무의 비명을, 식탁 위에 오른 음식에 묻어 있는 동물들의 비명을 듣습니다.",
        eng: "The scream of trees in every tissue of paper, the scream of every animal in your dishes.",
      },
      three: {
        kor: "세상이 비명으로 가득 차 있다고 생각하기도 합니다.",
        eng: "You even think the world is filled with screams.",
      },
    },
    {
      one: {
        kor: "당신은 약속하는 신입니다",
        eng: "You are a god who promises.",
      },
      two: {
        kor: "당신은 약속으로 영혼과 영혼이 연결될 수 있다고 믿습니다.",
        eng: "You believe spirits can be connected with each other by promises.",
      },
      three: {
        kor: "무수히 많은 인간들과 실로 연결 되어 있고 때문에 다양한 감정을 느낄 수 있게 되었습니다.",
        eng: "Countless mortals are connected with strings, and therefore they can feel various emotions.",
      },
      four: {
        kor: "때로는 지킬 수 없는 약속을 하기도 합니다.",
        eng: "Sometimes you make promises that can’t be fulfilled.",
      },
    },
    {
      one: {
        kor: "당신은 울지 못하는 신입니다.",
        eng: "You are a god who cannot cry.",
      },
      two: {
        kor: "아주 먼 옛날, 당신은 울음을 통해 바다를 만들었습니다.",
        eng: "A long time ago, you created the ocean with your own tears.",
      },
      three: {
        kor: "많은 생명이 당신을 통해 태어났습니다. 하지만 당신의 눈물은 메말라 버렸습니다.",
        eng: "Many life forms were born thanks to you. However, now your tears ran dry.",
      },
    },
    {
      one: {
        kor: "당신은 찾아 헤매는 신입니다.",
        eng: "You are a god who wanders.",
      },
      two: {
        kor: "누군가를 온전히 사랑하고 싶어하는 당신은, 주기적으로 이동합니다. 새로운 곳을 찾아가고 새로운 사람을 찾아갑니다.",
        eng: "You want to love someone so badly, so you move around periodically to find a new place and a new person.",
      },
    },
    {
      one: {
        kor: "당신은 누군가의 할머니였던 신입니다.",
        eng: "You are a god who was once someone’s grandma.",
      },
      two: {
        kor: "당신은 당신의 손녀를 증오하고, 또 한편으로는 사랑했습니다.",
        eng: "You hated and loved your granddaughter.",
      },
      three: {
        kor: "손녀의 불행을 바라면서도, 손녀가 먹고 싶다던 음식을 만들어 보내주었습니다.",
        eng: "You wished for her misfortune, but you sent her a food that she wanted.",
      },
      four: {
        kor: "당신은 모든 사람을 당신의 손녀를 보듯 바라봅니다.",
        eng: "You stare at everyone as if you see your granddaughter.",
      },
    },
    {
      one: { kor: "당신은 은둔하는 신입니다.", eng: "You are a secluded god" },
      two: {
        kor: "쉽게 피로함을 느끼는 당신은 산책으로, 숲으로, 때로는 이야기로 몸을 숨깁니다.",
        eng: "Since you feel easily exhausted, you hide yourself into a walking, into the woods. sometimes into the stories.",
      },
      three: {
        kor: "아무도 자신을 찾지 않기를 바라지만, 누군가 함께 해주길 바라기도 합니다.",
        eng: "You hope no one finds you, but at the same time, you want someone to be with you.",
      },
    },
    {
      one: {
        kor: "당신은 발견하는 신입니다.",
        eng: "You are a god who finds.",
      },
      two: {
        kor: "당신은 세상에 존재하는 나약한 것들을 자주 발견하곤 합니다.",
        eng: "You often find fragile things around the world.",
      },
      three: {
        kor: "눈에 보이지 않을 만큼 희미한 것들을 찾아내는 재주가 있습니다. 악몽 같은 일입니다.",
        eng: "You have a gift to find tiny things that can barely be seen. It is a nightmare.",
      },
    },
    {
      one: {
        kor: "당신은 책임지는 신입니다.",
        eng: "You are a god who answers for.",
      },
      two: {
        kor: "인간들은 당신을 보며, 신은 절대로 사람을 배신하지 않는다고 이야기합니다.",
        eng: "The mortals looks at you and said, “Gods never betray mortals.”",
      },
      three: {
        kor: "배신하는 것은 오롯이 인간 뿐이라고. 덕분에 당신은 책임질 줄 아는 신이 되었습니다.",
        eng: "“We are the only being that betrays.” For that, you became the god who can answer for.",
      },
    },
    {
      one: {
        kor: "당신은 재물로 바쳐진 신입니다.",
        eng: "You are a sacrificed god.",
      },
      two: {
        kor: "당신은 너무 어렸기 때문에, 강하지 않았기 때문에 재물로 바쳐진 신입니다.",
        eng: "Since you were too young or not strong enough, you were sacrificed.",
      },
      three: {
        kor: "당신은 자신이 신이라는 사실을 나중에야 알 수 있었습니다.",
        eng: "You came to know you were a god later on.",
      },
    },
    {
      one: {
        kor: "당신은 관망하는 신입니다.",
        eng: "You are a god who observes.",
      },
      two: {
        kor: "당신은 너무 높고 멀리 있기 때문에. 이 세상을 풍경으로 받아들입니다.",
        eng: "Since you are too high and far away, you see the world as a scape.",
      },
      three: {
        kor: "어떤 것도 크게 느껴지지 않습니다. 당신에게는 모든 것이 점일 뿐입니다.",
        eng: "Nothing feels big. In your point of view, everything is nothing but a dot.",
      },
    },
    {
      one: {
        kor: "당신은 판단하는 신입니다.",
        eng: "You are a god who judges.",
      },
      two: {
        kor: "당신은 너무나 절대적인 존재이기 때문에, 인간을 쉽게 판단합니다.",
        eng: "Since you are an absolute being, you tend to judge mortals.",
      },
      three: {
        kor: "인간들은 당신을 보며 죄 의식을 느끼고, 어떤 존재들은 영원한 수치심 속에 빠져 살아가기도 합니다.",
        eng: "You make them feel guilty, and some of them live in eternal disgrace.",
      },
    },
    {
      one: {
        kor: "당신은 허물어지는 신입니다.",
        eng: "You are a crumbling god.",
      },
      two: {
        kor: "당신은 아주 가변적인 것들로부터 태어납니다.",
        eng: "You are born from variable beings.",
      },
      three: {
        kor: "이사를 하며 버려지는 일기장 더미, 죽은 사람들을 추모하는 공간, 모여 살던 사람들이 떠나고 부서진 아스팔트 사이에 존재합니다.",
        eng: "Such as abandoned diaries, memorials for the dead, torn down concrete cracks where people used to live together and left.",
      },
    },
    {
      one: {
        kor: "당신은 경계의 신입니다.",
        eng: "You are a god of boundaries",
      },
      two: {
        kor: "당신은 무의 공간과, 수많은 존재들 사이를 산책하던 신으로,",
        eng: "You walked among the empty spaces and numerous beings.",
      },
      three: {
        kor: "어느날 인간들이 만들어 낸 기준으로 생긴 경계를 마주했습니다.",
        eng: "One day, you encountered the boundary that mortals set.",
      },
      four: {
        kor: "당신은 이제 무의 공간이 아닌 길을 걷습니다. 그리고 그 경계에 서 있는 존재들을 생각하며 걷습니다.",
        eng: "After that, you walk along the road, not empty spaces thinking about beings that are around the boundaries.",
      },
    },
    {
      one: {
        kor: "당신은 도망치는 신입니다.",
        eng: "You are a god who runs away.",
      },
      two: {
        kor: "당신은 인간이 안식할 수 있는 존재를 찾아 헤매는 것이, 또 그 존재가 본인이 되는 것이 무섭습니다.",
        eng: "You are afraid that mortals navigate to find others to rest on, and finally choose you as a safe haven.",
      },
      three: {
        kor: "자주 정체를 숨기고 거처를 옮기거나 형태를 바꿉니다.",
        eng: "You are hiding your identity and changing your place or yourself.",
      },
      four: {
        kor: "당신이 도망쳤기 때문에, 인간들은 자신들 중에 신이 될 수 있는 사람을 고르기도 할 것입니다.",
        eng: "The fact that you ran away will make people choose one of them as a god.",
      },
    },
    {
      one: {
        kor: "당신은 뇌 속의 신입니다.",
        eng: "You are a god inside of brains.",
      },
      two: {
        kor: "인간의 뇌 속에 자리 잡은 당신은 뇌의 자극이 교란됨에 따라 나타나는 뇌의 신호 착오에 따 라 존재했다가, 또 사라지기도 합니다.",
        eng: "You are located inside of human brains. As the stimulation towards the brain disturbs, you might either exist or disappear.",
      },
      three: {
        kor: "당신을 신으로 보는 것이 맞을지에 대해 논란이 분분 하지만, 어쨌든 당신은 신입니다.",
        eng: "It is still debatable whether you are a god or not, anyway, you ARE a god.",
      },
    },
    {
      one: {
        kor: "당신은 꿈으로 찾아오는 신입니다.",
        eng: "You are a visitor of dreams.",
      },
      two: {
        kor: "당신은 인간의 꿈을 통해 여러가지 형태로, 존재가 될 수 있습니다.",
        eng: "You can be anything or any form through dreams of mortals",
      },
      three: {
        kor: "산으로, 나무로, 둥근 조 약돌로, 씨앗이나 잘 익은 열매로, 눈이 깊은 사슴이나 작고 알록달록한 뱀으로 변모하여 인간들을 찾아옵니다.",
        eng: "You visit their dreams as forms of mountains, round pebbles, seeds, well-ripen fruits, deers with deep eyes, colorful snakes.",
      },
    },
    {
      one: {
        kor: "당신은 아름다운 신입니다.",
        eng: "You are a beautiful god.",
      },
      two: {
        kor: "인간들은 당신을 기적이라고 부릅니다.",
        eng: "Mortals call you a miracle.",
      },
      three: {
        kor: "현존하는 인간 중 가장 부드러운 육체를 지닌, 탄생의 기원과 우주의 비밀을 알고 있는 초월적인 존재라고 부릅니다.",
        eng: "They believe that you are an absolute being covered with the softest body among any living mortals and know the origin of life, the secret of the universe.",
      },
      four: {
        kor: "하지만 아이러니하게도 아무도 당신을 두려워 하지 않습니다. 오로지 당신만 인간이 두렵습니다.",
        eng: "But ironically, nobody is afraid of you. Only you are afraid of them.",
      },
    },
    {
      one: {
        kor: "당신은 애도할 줄 아는 신입니다.",
        eng: "You are a god who has sympathy.",
      },
      two: {
        kor: "당신은 사람의 죽음을 슬퍼할 줄 압니다.",
        eng: "You have a talent to mourn deaths of mortals.",
      },
      three: {
        kor: "그들의 영혼을 기억하고, 넋을 기리는 의식에 동참 합니다.",
        eng: "You remember their soul participating in the ceremony that honors them.",
      },
      four: {
        kor: " 인간들이 애도를 위해 준비한 춤과 노래를, 음식과 기도를 듣습니다.",
        eng: "You enjoy the dance, the song, the food, and the pray that they prepare for the ceremony.",
      },
      five: {
        kor: "함께 춤을 추고, 노래를 부르고, 음식을 나눠먹고 함께 손을 모아 기도합니다.",
        eng: "You dance, sing, eat, and pray together.	",
      },
    },
    {
      one: {
        kor: "당신은 매몰되는 신입니다.",
        eng: "You are a demolishing god.",
      },
      two: {
        kor: "당신은 가라앉고 있는 섬의, 무너지는 산의 정령처럼 존재하는 신입니다.",
        eng: "You are a spirit of sinking islands, collapsing mountains.",
      },
      three: {
        kor: "섬과 산이 사라지면 자신도 사라지게 되는 것인지 종종 고민하곤 합니다.",
        eng: "You sometimes worry about the possibility of your extinction when islands and mountains are gone.",
      },
    },
    {
      one: {
        kor: "당신은 의존적인 신입니다.",
        eng: "You are a dependent god.",
      },
      two: {
        kor: "당신은 인간과 접속하는 것을 좋아합니다.",
        eng: "You like to access with mortals",
      },
      three: {
        kor: "역사와 도시, 기록과 자료들을 수집하고 보존하며, 이를 통해 인간과 계속해서 연결됩니다.",
        eng: "You collect and preserve histories, cities, records and data. To do so, you can stay connected with mortals.",
      },
      four: {
        kor: "하지만 그만큼 많은 부분을 의존하고 있기도 합니다.",
        eng: "As you are eager to connect, you are depending on them that much.",
      },
      five: {
        kor: "때로는 인간이 신일지, 당신이 신일지 고민하기도 합니다.",
        eng: "Sometimes you are wondering if mortals are gods or you are a god.",
      },
    },
    {
      one: {
        kor: "당신은 오래 전 죽어버린 신입니다.",
        eng: "You are a god who died a long time ago.",
      },
      two: {
        kor: "너무 빨리 죽음을 선택한 당신 때문에, 인간 세계의 일부는 사랑받지 못하고 있습니다.",
        eng: "Since you’ve chosen death so early, the part of the mortal world cannot be loved.",
      },
      three: {
        kor: "세계의 일부만 사랑받고, 서로를 사랑합니다. 당신은 이것을 평생 짊어져야 한다는 죄책감에 시달리고 있습니다.",
        eng: "Only the other part of the world can be loved, and love each other. You are racked with guilt that you have to deal with it",
      },
    },
    {
      one: {
        kor: "당신은 거짓말쟁이 신입니다.",
        eng: "You are a god who lies.",
      },
      two: {
        kor: "당신은 이야기를 지어내는 것을 좋아합니다.",
        eng: "You enjoy making up stories.",
      },
      three: {
        kor: "죽음과 탄생, 우주와 무의 세계, 천국과 지옥에 대해 무수히 많은 이야기들을 만들어 냈습니다.",
        eng: "You have created many stories about birth and death, the universe and the world of nothingness, heaven and hell.",
      },
      four: {
        kor: "인간들은 이 모든 이야기를 진실이라고 생각하며, 덕분에 당신은 아주 어릴 때부터 신이 될 수 있었습니다.",
        eng: "You have become a god since you were very young, because mortals believe all those stories are true.",
      },
      five: {
        kor: "당신은 당신 스스로를 거짓말쟁이라고 생각하고 있습니다.",
        eng: "You think of yourself as a liar.",
      },
    },
    {
      one: { kor: "당신은 놀이하는 신입니다.", eng: "You are a playing god." },
      two: {
        kor: "당신에게 제일 재미있는 놀이는 증명입니다.",
        eng: "Your favorite game is proving.",
      },
      three: {
        kor: "당신에게는 진실과 거짓을 구분하는 것, 그에 대한 증거를 제시하는 것이 어려운 일이 아닙니다.",
        eng: "You can easily tell what is truth or lies and present evidence about it.",
      },
      four: {
        kor: "증명하고 싶으면 진실을 만들어내면 됩니다.",
        eng: "If you want to prove something, you just create a truth.",
      },
      five: {
        kor: "하지만 인간에게 증명은 생명과도 같은 것이라는 것을 기억해야 할 것입니다.",
        eng: "But you should remember that the mortals regard proving as life.",
      },
    },
  ];

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const randomIndex = Math.floor(Math.random() * result.length);

  const [randomResult, setRandomResult] = useState(result[randomIndex]);

  useEffect(() => {
    setTimeout(() => {
      setShow1(true);
    }, 2000);

    setTimeout(() => {
      setShow2(true);
    }, 4000);

    if (randomResult.hasOwnProperty("three")) {
      setTimeout(() => {
        setShow3(true);
      }, 6000);
    }
    if (randomResult.hasOwnProperty("four")) {
      setTimeout(() => {
        setShow4(true);
      }, 8000);
    }
    if (randomResult.hasOwnProperty("five")) {
      setTimeout(() => {
        setShow5(true);
      }, 10000);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <img className="h-1/2" src={resultImg} />
      {show1 && (
        <div className="text-center ">
          <div className="flex justify-center flex-col">
            <h1 className="font-bold text-xl ">{randomResult.one.kor}</h1>
            <h2 className="align-top">{randomResult.one.eng}</h2>
          </div>
        </div>
      )}
      {show2 && (
        <div className="text-center">
          <div className="flex justify-center flex-col">
            <h1 className="font-bold text-xl ">{randomResult.two.kor}</h1>
            <h2 className="align-top">{randomResult.two.eng}</h2>
          </div>
        </div>
      )}

      {show3 && (
        <div className="text-center">
          <div className="flex justify-center flex-col">
            <h1 className="font-bold text-xl ">{randomResult.three.kor}</h1>
            <h2 className="">{randomResult.three.eng}</h2>
          </div>
        </div>
      )}

      {show4 && (
        <div className="text-center">
          <div className="flex justify-center flex-col">
            <h1 className="font-bold text-xl ">{randomResult.four.kor}</h1>
            <h2 className="">{randomResult.four.eng}</h2>
          </div>
        </div>
      )}

      {show5 && (
        <div className="text-center">
          <div className="flex justify-center flex-col">
            <h1 className="font-bold text-xl ">{randomResult.five.kor}</h1>
            <h2 className="">{randomResult.five.eng}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
