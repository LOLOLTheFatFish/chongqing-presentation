// 中英双语字幕数据
const subtitleData = [
  {
    slide: 1,
    english: "So let's talk about Chongqing. You've probably seen it. It's that mind-bending Chinese megacity that just completely took over the internet. You know, the 8D Magic city with buildings you can drive a train through. And that famously spicy hot pot that absolutely nailed going viral. But all of this success brings up one really, really important question.",
    chinese: "那么，我们来聊聊重庆。你很可能已经见过了。就是那座令人匪夷夷的中国特大城市，它简直刷爆了全网。你知道的，就是那座8D魔幻之都，轻轨可以从大楼里穿过。还有那著名的麻辣火锅，他们也成功地让它火出了圈。但所有这些成功也带来了一个非常非常重要的问题。",
    duration: 28.5
  },
  {
    slide: 2,
    english: "Right? It sounds like a great problem to have, but it can be a total trap. How do you actually convert all that temporary algorithm-driven hype into something that lasts? You know, how do you make sure your city isn't just a one-hit wonder?",
    chinese: "对吧？这听起来像是个甜蜜的烦恼，但它也可能是一个彻头彻尾的陷阱。你到底该如何把所有这些由算法驱动的暂时热度，转化为能持久的东西呢？你懂的，你如何确保你的城市不只是一个昙花一现的网红？",
    duration: 25.3
  },
  {
    slide: 3,
    english: "And you know, the analysis we're digging into today just nails this. The whole challenge is about moving from being Wang Hong, which means internet famous, super trendy, but can disappear in a flash, to being Chang Hong, which is like evergreen. Think classic, timeless, something people always want to visit. So the billion-dollar question is, how on earth do you make that jump?",
    chinese: "你知道，我们今天深入研究的这份分析报告正好抓住了这一点。整个挑战的核心就是如何从网红，意思是网络知名度高、超级新潮，但可能瞬间消失，转变为长红，也就是常青树。想象一下经典、永恒，是那种人们总想去参观的地方。所以，这个价值千金的问题就是，你到底要怎样才能实现这个跳跃呢？",
    duration: 30.8
  },
  {
    slide: 4,
    english: "And trust me, the stakes are unbelievably high. This isn't just about getting likes on a video. Take a look at that number. That's over 500 billion yuan. That's the city's domestic tourism revenue for 2024. We are talking about a gigantic economic engine that they have to keep running smoothly.",
    chinese: "相信我，这其中的利害关系高得令人难以置信。这不仅仅是为了在视频上获得点赞。看看那个数字。那是超过5万亿人民币。这是该市2024年的国内旅游收入。我们谈论的是一个他们必须保持平稳运行的庞大经济引擎。",
    duration: 26.7
  },
  {
    slide: 5,
    english: "And this brings us right to the heart of the problem, what we can call the fame trap, because Chongqing's wild success is also its biggest weakness. It is the definition of a double-edged sword.",
    chinese: "这就把我们带到了问题的核心，也就是我们所说的声名陷阱，因为重庆的巨大成功同时也是它最大的弱点。这正是双刃剑这个词的完美定义。",
    duration: 20.5
  },
  {
    slide: 6,
    english: "So the analysis breaks it down into two major threats. First, the city is way too reliant on that internet famous label, you know how it is, trends change, what looks amazing and futuristic one day can feel kind of played out the next, people get tired of seeing the same thing. And second, the competition is just insane in China's travel market, some other city is always just one viral video away from becoming the new 'it' spot.",
    chinese: "所以，这份分析将其分解为两大主要威胁。首先，这座城市过分依赖那个网红标签了，你也知道情况就是这样，潮流总是在变。今天看起来很神奇、很未来的东西，明天可能就让人觉得有点老套了，人们会厌倦看同样的东西。其次，中国旅游市场的竞争简直到了疯狂的地步，其他城市总是离成为下一个爆款打卡地只有一支病毒视频的距离。",
    duration: 35.2
  },
  {
    slide: 7,
    english: "And this quote just says it all, doesn't it? In the age of short-form video the bar for becoming an internet famous city is almost non-existent, any city with a cool gimmick can suddenly steal the spotlight, which makes that viral fame model super, super unstable.",
    chinese: "而这句话简直说明了一切，不是吗？在这个短视频时代，成为一个网红城市的门槛几乎不存在，任何一个有点酷的噱头的城市都可以突然抢走聚光灯，这使得那种病毒式成名模式变得超级、超级不稳定。",
    duration: 23.8
  },
  {
    slide: 8,
    english: "Okay, so before we get into the fix, let's just quickly look at how Chongqing even pulled this off. I mean, this didn't just happen by accident, it was really a perfect storm of the right factors coming together at the right time.",
    chinese: "好了，那么在我们深入探讨解决方案之前，让我们先快速回顾一下重庆当初到底是如何做到的。我的意思是，这绝非偶然，它实际上是多种正确因素在正确的时间汇集到一起所形成的完美风暴。",
    duration: 29.5
  },
  {
    slide: 9,
    english: "So you've got these four pillars holding it all up. Politically you have the government pushing for integration with its neighbor Sichuan. Economically, people just had more money to spend, especially after the pandemic, creating this huge travel boom. Socially, the city was smart, It jumped on new trends like City Walk instead of just pushing the same old sites. And finally, technology, a massive upgrade in transportation is making it easier than ever to get in and out. But this very success story was pointing towards something else.",
    chinese: "有这四大支柱在支撑着这一切。政治上，你有政府在推动与邻省四川的一体化发展。经济上，人们手头有了更多的钱可以消费，尤其是在疫情之后，这催生了巨大的旅游热潮。社会层面，这座城市很聪明，它迅速抓住了像城市漫步这样的新潮流，而不是一味地推广那些老掉牙的景点。最后是技术层面，交通运输的巨大升级使得进出重庆变得前所未有的容易。但正是这个成功故事本身，也正指向了别的东西。",
    duration: 42.3
  },
  {
    slide: 10,
    english: "Yeah, all of those things created this incredible boom in domestic travel, but it was kind of like a massive spotlight that didn't just illuminate the success, it also cast a shadow revealing this huge untapped market just sitting there waiting.",
    chinese: "是的，所有这些因素共同造就了国内旅游业的惊人繁荣，但这又有点像一束巨大的聚光灯，它不仅照亮了成功，也投下了一片阴影，在这片阴影中显现出了一个巨大的、尚未开发的市场，正静静地等在那里。",
    duration: 24.7
  },
  {
    slide: 11,
    english: "And here it is, wow, while everyone was laser focused on the domestic tourists, look at this, a more than 183% jump in international arrivals in 2024. That is not just a little bump. That is a massive signal that there's a whole new engine for growth just waiting to be fired up.",
    chinese: "答案揭晓了，哇哦！就在所有人都激光聚焦在国内游客身上时，快看这个——2024年的国际入境游客数量增长了超过183%！这可不仅仅是一个小小的波动。这是一个极其强烈的信号，表明有一个全新的增长引擎正等待着被点燃。",
    duration: 21.24
  },
  {
    slide: 12,
    english: "Okay, so that leads us to the solution, tapping into that huge international opportunity is the key to chongqing's whole strategic playbook. It's a four-part plan to turn it from a viral hit into a truly evergreen destination.",
    chinese: "好的，这就引导我们找到了解决方案。开拓那个巨大的国际机遇，就是重庆整个战略手册的关键所在。这是一个分为四部分的计划，旨在将其从一个病毒式爆款转变为一个真正的常青树旅游地。",
    duration: 24.8
  },
  {
    slide: 13,
    english: "The first move is pure offense. It's the SO strategy, that just means using your inherent strengths to seize outside opportunities. The big idea here is to leverage what Chongqing is already good at, like its unique culture and all that government support, to grab the huge opportunity of a unified market with its neighbor SiChuan. Basically, stop competing and start working together.",
    chinese: "第一个行动是纯粹的进攻。这就是SO策略。意思就是利用你的内在优势去抓住外部机遇。这里的核心构想是杠杆化重庆已经擅长的东西，比如它独特的文化和所有的那些政府支持，去抓住与邻省四川形成统一市场的巨大机遇。基本上就是停止竞争，开始合作。",
    duration: 15.084
  },
  {
    slide: 14,
    english: "So what does that actually look like? Well, for starters, you create travel packages that cover both regions built around shared history, and here's the kicker, you market it to the world as one powerful brand, the bashu region, making the entire area a must-see, not just one city.",
    chinese: "那么，这具体看起来是什么样的呢？嗯，首先，你创建覆盖两个地区的旅游套餐，这些套餐要围绕着共同的历史来打造。然后，重头戏来了：你把它作为一个统一的强大品牌——巴蜀地区——向全世界推广，让整个区域成为一个必看之地，而不仅仅是（重庆）一座城市。",
    duration: 23.976
  },
  {
    slide: 15,
    english: "Alright, next up is the WO strategy. Think of this as a turnaround play, you're tackling your internal weaknesses by taking advantage of external opportunities. The weakness? Chongqing is way too dependent on online travel agencies and can get super overcrowded. The opportunity? Tourists are now demanding higher quality, unique experiences.",
    chinese: "好了，接下来是WO策略。你可以把这看作一个扭转战，你通过利用外部机遇来解决你的内部弱点。弱点是什么？重庆过分依赖在线旅行社，而且可能会变得超级拥挤。机遇是什么？游客现在要求的是更高质量、更独特的体验。",
    duration: 18.288
  },
  {
    slide: 16,
    english: "So this is all about taking back control. You beef up the city's official app with exclusive deals on local stuff you can't get anywhere else, that pulls people away from the giant travel platforms, and you use data to actually manage the crowds, guiding people to cool new neighborhoods instead of letting everyone pile into the same three tourist traps.",
    chinese: "所以，这一招的核心就是夺回控制权。你得强化城市的官方APP，用那些你在别处根本拿不到的独家优惠和本地特色产品，把人们从那些巨头旅游平台上拉开。同时，你利用数据来真正地管理人群，引导人们去那些很酷的新街区，而不是让所有人都挤进那几个老一套的游客陷阱里。",
    duration: 22.68
  },
  {
    slide: 17,
    english: "Path number 3 is all about defense. This is the ST strategy, which means using your unique strengths to neutralize those outside threats. It's about building a competitive moat around your city. How do you stop other places from copying you? You double down on the things that are impossible to replicate.",
    chinese: "第三条路径完全是关于防御。这就是ST策略，意思就是利用你的独特优势来抵御那些外部威胁。这关乎于在你的城市周围建立一条竞争护城河。你如何阻止其他地方抄袭你？（答案是）你必须加倍投入那些无法被复制的东西。",
    duration: 21.06
  },
  {
    slide: 18,
    english: "This means you've got to shift the story you're telling. The 8D Magic City stuff looks cool sure, but other places can build futuristic stuff. What they can't copy is the deep ancient history of the Three Gorges. It also means making amazing service, like literally closing roads for tourists, a standard feature of the brand, not just a one-off viral stunt.",
    chinese: "这意味着你必须转变你正在讲述的故事。那个8D魔幻之都的东西看起来很酷。当然，其他地方也能建造充满未来感的东西。但他们无法复制的，是三峡深厚的古老历史。这也意味着你要把优质的服务——比如真正地为游客封路——变成一个品牌的标准特色，而不仅仅是一次偶然的病毒式噱头。",
    duration: 19.332
  },
  {
    slide: 19,
    english: "And the last path, the WT strategy, this one is about changing the game entirely, it's about tackling your internal weaknesses, which are vulnerable to external threats by just pivoting to a whole new market.",
    chinese: "最后一条路径，WT策略。这一条是关于彻底改变游戏规则的。它是关于通过转向一个全新的市场，来解决那些容易受到外部威胁攻击的内部弱点。",
    duration: 22.86
  },
  {
    slide: 20,
    english: "And this is that big pivot we saw earlier. It means you start shifting your marketing dollars away from the hyper-competitive domestic market, the Red Sea, and into the wide open blue ocean of international travelers, especially after 2025. And for that audience, you drop the internet famous angle. The new story is all about the grandeur of the Yangtze River civilization and the practicality of being a huge visa-free transit hub.",
    chinese: "这就是我们前面提到过的那个大转向。这意味着你开始把你的营销资金从高度竞争的国内市场，也就是红海，转移开，投向国际游客那片广阔的、开放的蓝海。而对这部分受众，你要抛弃网红的那个角度。新的故事将完全是关于长江文明的宏伟壮丽，以及作为一个巨大的免签过境枢纽的实用性。",
    duration: 12.456
  },
  {
    slide: 21,
    english: "So when you put all four of these strategies together, your offense, your turnaround, your defense, and your big pivot, the end goal is crystal clear. It's a full on plan to evolve from a passing social media trend into a truly timeless global destination. from Wang Hong to Chong Hong.",
    chinese: "所以，当你把所有这四种策略——你的进攻、你的扭转、你的防御和你的大转向——结合在一起时，最终目标就变得无比清晰了。这是一个全面的计划，旨在从一个短暂易逝的社交媒体潮流，进化成一个真正永恒的全球目的地。从网红变为长红。",
    duration: 18.468
  },
  {
    slide: 22,
    english: "So Chongqing has its playbook, it's a smart, clear path forward. But it kind of leaves us with a much bigger question, doesn't it? In an age where what we see and where we go is so heavily influenced by these mysterious algorithms, can any long-term plan really, truly outsmart the internet? That's something every city in the world has to be thinking about right now.",
    chinese: "所以，重庆有了它的战略手册，这是一条清晰、明智的前进之路。但这似乎给我们留下了一个更大的问题，不是吗？在这个我们所见和所去之处都深受这些神秘算法巨大影响的时代，真的有任何长期计划，能够真正地智胜互联网吗？这是全世界每个城市现在都必须思考的问题。",
    duration: 24.192
  }
];

// 导出字幕数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = subtitleData;
}
