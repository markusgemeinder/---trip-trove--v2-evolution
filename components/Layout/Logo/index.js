import styled from "styled-components";
import Link from "next/link";

const LogoSvg = styled.svg`
  display: block;
  width: 150px;
  margin: auto;
  height: 100%;

  @media (min-width: 600px) and (min-height: 600px) {
    width: 200px;
  }

  /* @media (min-width: 900px) {
    width: 220px;
  } */
`;

const LogoPathPlane = styled.path`
  fill: none;
  stroke: var(--color-logo-main);
  stroke-width: 2.2;
`;

const LogoPathWordmark = styled.path`
  fill: var(--color-logo-main);
  fill-rule: nonzero;
`;

const LogoPathHeart = styled.path`
  fill: none;
  stroke: var(--color-logo-jewel);
  stroke-width: 2.7px;
  stroke-linejoin: miter;
  stroke-miterlimit: 10;
  stroke-dasharray: 2.83426 4.533825 0 0 0 0;
`;

export default function Logo() {
  return (
    <>
      <Link href="/">
        <LogoSvg
          viewBox="0 0 237 68"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <LogoPathPlane d="M232.99965494 15.23438534 184.99013257 26.5079356l14.99010802 4.54579039 33.0196621-15.81934065h-.00024775Zm-33.0196621 15.81934065 2.6697971 10.75623991 8.31611076-7.33128861-5.02915845-1.5695216 15.67663435 4.87257792 11.38627834-22.54734827-27.06291269 17.67477036-3.28695231 8.9008102" />
          <LogoPathWordmark d="M18.70136408 28.50656712c.33025608 0 .63375473.03047374.91049595.09142122.27674122.06069973.50492265.2294202.6845443.50566592.17962165.27649346.2693086.74152772.2693086 1.39559828 0 .63400248-.09092572 1.0928429-.2730249 1.37676898-.1820992.28392608-.41622673.4551241-.7028781.51359404-.28640363.05822219-.5946096.0872094-.92486569.0872094h-4.68998322v15.0753354c0 .39021255-.03641984.75787948-.10925951 1.10275305-.07283968.34487357-.2596462.62359682-.5606673.83666526-.30102111.21306844-.81337639.31960266-1.53657031.31960266-.69445446 0-1.1956608-.11049828-1.50411454-.33099934-.30820597-.22050106-.49402147-.50442715-.55695099-.85177826-.06317727-.3473511-.09464203-.71625681-.09464203-1.10671711V32.47682497H4.87892067c-.3156386 0-.61665971-.03295129-.90306333-.09885385-.28640363-.06590256-.52077891-.23685282-.7028781-.51334629-.18185144-.2762457-.27302491-.73905018-.27302491-1.38816566 0-.63870981.0899347-1.09631145.26955635-1.37280491.17962165-.27624571.41622672-.44496619.71006297-.50566592.29358849-.06094748.59584837-.09142122.90653188-.09142122h13.81525855Zm1.77713944 21.30461421c-.70411687 0-1.20903952-.11049828-1.5150157-.33099934-.30572844-.22050106-.49030517-.51210752-.55323469-.87481938-.06317727-.3624641-.09488978-.73880243-.09488978-1.12926273V36.86553932c0-.41052838.03542882-.78835323.10579096-1.1332268.07036213-.34487356.25840742-.62111927.5643836-.82898488.30572844-.2078656.81312864-.31192228 1.52195283-.31192228.68949938 0 1.18475963.0963763 1.48578074.28912891.3010211.19250486.48782762.41573122.5606673.66918356.07283968.2537001.10925951.47172361.10925951.65407056l-.34958089.1825947c.04855978-.0862184.15534176-.23313652.32059368-.44100212.16500416-.20786561.39442436-.4298532.68801285-.665715.29383625-.23561406.64713345-.43728581 1.05964386-.60451976.41275817-.1674817.89092339-.2509748 1.43474342-.2509748.20885662 0 .44422292.0188293.70634665.05698342.26237149.03790636.53415762.10009261.81585392.186311.28144855.0862184.54010372.20538807.77547002.35750903.2353663.15212095.42489811.34214827.56809992.57057746.14320182.22793368.21480272.5019496.21480272.8213045 0 .82650735-.18333796 1.52888994-.54976612 2.10690002-.36667592.57801009-.8267551.867139-1.38023754.867139-.33000833 0-.5666134-.0279962-.7098152-.08374085-.14344957-.05574465-.25493887-.11545336-.33521117-.17863063-.08002454-.06342503-.18209919-.12313374-.30572844-.17887839-.123877-.05574465-.33397239-.08374085-.63003842-.08374085-.2913587 0-.57156848.0431092-.84112483.12932759-.26955635.08621839-.51334629.21554598-.73186531.38798276-.21851903.17243678-.39095582.3840187-.5170626.6349935-.12635454.25122256-.18928406.53366212-.18928406.84806194v6.6705287c0 .3904603-.03542882.76184355-.10579096 1.1143975-.07036213.35230618-.25964619.63375472-.56785216.84409787-.30845373.2105909-.8267551.31588635-1.5549041.31588635Zm12.73009603 0c-.70411687 0-1.21027829-.11049828-1.51848427-.33099934-.30820597-.22050106-.49402147-.50715244-.55719874-.85945863-.06292952-.35255394-.09464203-.72393719-.09464203-1.1143975V36.8883327c0-.3904603.03518107-.75787949.1055432-1.10275305.07036214-.34487357.25989395-.62632212.56809993-.84434564.30845373-.21802352.81684493-.32703528 1.52566913-.32703528.70907195 0 1.21275583.11025053 1.5112994.33099935.29854357.22050106.4831203.50690468.55348243.85945862.07036214.3523062.1055432.73384735.1055432 1.14462348v10.58751944c0 .3904603-.03518106.76184355-.1055432 1.1143975-.07036213.35230618-.25617763.63375472-.55719874.84409787-.30102111.2105909-.81312863.31588635-1.53657031.31588635Zm0-17.41016909c-.72344168 0-1.24298182-.11297582-1.55862041-.33867972-.31539085-.22545614-.50715244-.5207789-.5752848-.8859683-.06788459-.3651894-.10182689-.75044687-.10182689-1.15626792 0-.42068629.03741086-.80743028.11272807-1.15973647.07531722-.35255394.2720339-.63648003.58990228-.852026.31811613-.21554599.83889504-.32307122 1.56208897-.32307122.72344168 0 1.2392655.11272807 1.54771924.33843196.30820597.2257039.49996757.5197879.57528478.882252.07531722.3624641.11297583.74920809.11297583 1.15998422 0 .40037047-.03765861.78215938-.11297583 1.14462348-.07531721.3624641-.2670788.65159302-.57528478.867139-.30845373.21554598-.83393997.32331897-1.57670646.32331897Zm13.16713408 17.12104017c-.95162311 0-1.78927938-.19523015-2.51272106-.58569045-.72319393-.3904603-1.32523615-.92932526-1.80612666-1.6163471-.48064276-.68702184-.84087708-1.4768616-1.08144621-2.3692715-.24032138-.89240991-.35304945-1.84824484-.33843197-2.8675048.01436973-1.0038992.1454316-1.95849537.3931856-2.86354073.24750625-.90504536.61170463-1.70380426 1.09234739-2.39578118.48064276-.69222468 1.07550011-1.23728348 1.7843243-1.63542415.7088242-.39814068 1.53186299-.59708714 2.46886861-.59708714.86887328 0 1.70281325.20291052 2.50157214.60848382.79851114.4055733 1.51105165.95955124 2.13737376 1.66193383.62632211.7023826 1.11910482 1.5085741 1.47834812 2.41857455.3592433.9102482.5391127 1.8673219.5391127 2.87146886 0 1.02917012-.1798694 1.99268542-.5391127 2.89029816-.3592433.897365-.8483097 1.68076314-1.46744694 2.35019445-.6188895.66918355-1.32771369 1.19144898-2.12647259 1.5667963-.7987589.37509955-1.63988372.56289708-2.52337449.56289708Zm-5.60766403 6.57910747c-.69445446 0-1.1956608-.10653422-1.50386678-.3193549-.30845373-.21306844-.49526025-.48807538-.56091506-.82526858-.06540705-.3371932-.09835834-.70114382-.09835834-1.09135637V36.8581067c0-.39566314.03171252-.76184355.09488979-1.09903674.06292951-.33744095.2450287-.6161642.54604981-.83666526.30102111-.22074881.7987589-.33099934 1.4929656-.33099934.59237982 0 1.07178381.08869593 1.43821198.26633555.36667592.17739186.62285355.46131794.7685329.85177825v18.12518713c.02898722.3904603.00470733.75936601-.07283967 1.10646936-.07779476.34735111-.27079512.62756089-.5790011.84062933-.30845373.21282068-.81684494.3193549-1.52566913.3193549Zm5.01776176-10.8612876c.53390987 0 1.01703017-.1357692 1.44911315-.40705983.43208297-.27129063.77695654-.64019633 1.0341252-1.10646936.2574164-.46652078.38600072-.98383113.38600072-1.5516833 0-.588168-.12486801-1.11315872-.37509955-1.57447667-.24998379-.4615657-.5908933-.82279104-1.02297627-1.08392375-.43233073-.26113272-.91520327-.39169908-1.4493609-.39169908-.52920254 0-1.0098453.1357692-1.44192828.40705983-.43208297.27129063-.77324023.63375473-1.02322402 1.08764006-.25023154.45388532-.37509955.9721867-.37509955 1.5553996 0 .56785218.12858432 1.08516253.38600073 1.55168331.25716865.46627303.5983259.83517873 1.02322402 1.10646936.42465035.27129063.89439194.40705983 1.40922475.40705983Zm20.07823191-16.73330516c.33025609 0 .63375474.03047374.91049595.09142122.27649347.06069973.50492266.2294202.6845443.50566592.17962166.27649346.2693086.74152772.2693086 1.39559828 0 .63400248-.09092571 1.0928429-.2730249 1.37676898-.1820992.28392608-.41622672.4551241-.7028781.51359404-.28640363.05822219-.5946096.0872094-.92486568.0872094h-4.68998322v15.0753354c0 .39021255-.03641984.75787948-.10925952 1.10275305-.07283967.34487357-.25964619.62359682-.5606673.83666526-.30102111.21306844-.81337638.31960266-1.53681806.31960266-.69420671 0-1.19541305-.11049828-1.50386678-.33099934-.30820598-.22050106-.49402148-.50442715-.55719875-.85177826-.06292951-.3473511-.09464203-.71625681-.09464203-1.10671711V32.47682497h-4.73358792c-.3156386 0-.6166597-.03295129-.90306333-.09885385-.28640362-.06590256-.5207789-.23685282-.7028781-.51334629-.18209919-.2762457-.2730249-.73905018-.2730249-1.38816566 0-.63870981.0899347-1.09631145.2693086-1.37280491.1798694-.27624571.41647447-.44496619.71031071-.50566592.29358849-.06094748.59584837-.09142122.90653189-.09142122h13.81525854Zm1.77713945 21.30461421c-.70411687 0-1.20903952-.11049828-1.51476796-.33099934-.30597619-.22050106-.49055292-.51210752-.55373019-.87481938-.06292952-.3624641-.09464203-.73880243-.09464203-1.12926273V36.86553932c0-.41052838.03518107-.78835323.1055432-1.1332268.0706099-.34487356.25865518-.62111927.56463137-.82898488.30572844-.2078656.81312863-.31192228 1.52195282-.31192228.68949939 0 1.18475963.0963763 1.48578074.28912891.30102111.19250486.48782763.41573122.5606673.66918356.07283968.2537001.10925952.47172361.10925952.65407056l-.3495809.1825947c.04855979-.0862184.15534176-.23313652.32034593-.44100212.16525191-.20786561.39467212-.4298532.6882606-.665715.29383625-.23561406.64713346-.43728581 1.05964387-.60451976.41275816-.1674817.89092338-.2509748 1.43474341-.2509748.20885662 0 .44422292.0188293.70634665.05698342.26212374.03790636.53415763.10009261.81585393.186311.28144854.0862184.53985596.20538807.77547002.35750903.2353663.15212095.4248981.34214827.56809992.57057746.14320181.22793368.21480272.5019496.21480272.8213045 0 .82650735-.18333796 1.52888994-.54976613 2.10690002-.36667592.57801009-.8267551.867139-1.38023753.867139-.33000833 0-.56686116-.0279962-.71006297-.08374085-.14320181-.05574465-.25493886-.11545336-.3349634-.17863063-.08002455-.06342503-.1820992-.12313374-.30572844-.17887839-.123877-.05574465-.3339724-.08374085-.63003842-.08374085-.2913587 0-.57181624.0431092-.84112483.12932759-.26955636.08621839-.51359405.21554598-.73186532.38798276-.21851903.17243678-.39095581.3840187-.5170626.6349935-.12635454.25122256-.1895318.53366212-.1895318.84806194v6.6705287c0 .3904603-.03518108.76184355-.10554321 1.1143975-.07036214.35230618-.2596462.63375472-.56809992.84409787-.30820598.2105909-.82650735.31588635-1.55465635.31588635Zm16.23284208.23561405c-.91272574 0-1.81801886-.18878854-2.71637486-.5666134-.89810825-.37782484-1.71619196-.91272573-2.45425112-1.6049504-.73781142-.69197693-1.32424513-1.51848427-1.75880565-2.47952204-.43456052-.96079001-.65159302-2.02439793-.65159302-3.19057601 0-1.09532043.1977077-2.1182967.59337083-3.06917655.39566314-.9506321.94072194-1.78853613 1.63492865-2.51371209.69445446-.72517595 1.4929656-1.2942669 2.39602893-1.70752056.90306333-.41325368 1.86930393-.61988051 2.89847405-.61988051 1.40327865 0 2.67277015.34982865 3.80897 1.04948594 1.13619984.69990505 2.0439705 1.6443433 2.72355971 2.83331475.67983698 1.18897144 1.01975547 2.52139245 1.01975547 3.99701528 0 1.22192273-.2197578 2.31724316-.65902564 3.28571355-.4395156.96847038-1.022233 1.79497773-1.74790447 2.47952203-.72591922.6845443-1.53186298 1.20680973-2.41783129 1.5667963-.8859683.36023431-1.77590067.54010371-2.6693016.54010371Zm-.0582222-4.58642204c.46627303 0 .94196071-.12164722 1.42755855-.36494165.48535009-.24354218.89340093-.61244788 1.22340926-1.10671711.33025608-.49451699.49526024-1.11191996.49526024-1.8522089 0-.65407057-.13477817-1.22440028-.40408677-1.71123689-.26955635-.4868366-.64341714-.86590023-1.12158236-1.13719086-.47841297-.27129063-1.0281791-.40681206-1.64954613-.40681206-.573055 0-1.09110862.14196304-1.5549041.42588912-.46354774.28392609-.83493099.67314762-1.11414974 1.16741685-.27921876.49451698-.41870426 1.05865284-.41870426 1.69240757 0 .73013104.16128785 1.3410924.48411131 1.83313185.32282346.49179169.72468045.85821986 1.20532321 1.09903674.48064276.2408169.9565782.36122534 1.4273108.36122534Zm15.65780505 4.46477483c-.47098035 0-.87382836-.09117347-1.20879176-.27376817-.33496341-.1825947-.59485736-.46652078-.77918633-.852026l-5.2362808-10.9222351c-.35453597-.74028895-.46007917-1.34877277-.31687736-1.82545147.14320181-.47643094.58147864-.89984253 1.31458272-1.269987.7427665-.3803024 1.33390754-.51086875 1.77317538-.39169908.4395156.11892192.83393997.59436185 1.18352086 1.42607203l3.2698573 7.93308308 3.24805493-7.83422924c.36419838-.86193616.76357783-1.36661106 1.19813835-1.51352918.43456051-.14716588 1.04007129-.01783829 1.81702783.387735.7863712.40061823 1.22464802.85574232 1.31458273 1.3653723.08968694.50962998-.03047375 1.10399183-.36072983 1.78358105l-5.22141555 10.85385498c-.1798694.3803024-.43456051.66422848-.7648166.85177826-.33025608.18754977-.74028895.28144854-1.23084187.28144854Zm15.6360027.15212096c-1.3594262 0-2.52832957-.23189775-3.50671012-.69594099-.9781328-.46404324-1.77936923-1.07995969-2.4032138-1.84824484-.62384457-.76828515-1.08863108-1.6163471-1.39460727-2.54418583-.30597619-.92808648-.4588404-1.85840275-.4588404-2.79144431 0-1.53136748.33025608-2.88534309.99052049-4.06167908.6602644-1.176336 1.57546768-2.10045841 2.74560983-2.77236726 1.16989438-.67190885 2.50999577-1.00761552 4.01980865-1.00761552 1.12653743 0 2.10244044.18754978 2.92770901.56264934.82551633.3753473 1.50634432.85945862 2.04297949 1.45282945.5363874.59337083.93700563 1.23480594 1.2016069 1.92430532s.3969019 1.34629524.3969019 1.96989205c0 1.11563627-.25865517 1.94585992-.77571777 2.49091872-.5170626.5450588-1.1736107.81783595-1.96989205.81783595h-6.94776542c.04855978.51210752.23313651.95187087.55348243 1.3195378.32059368.36766694.72468045.6528318 1.21250808.85574232.48807538.20266278.99894413.30424192 1.53310175.30424192.46131795 0 .86788226-.02675744 1.2199407-.08002455.35205843-.0532671.6565481-.12412475.9139645-.21282068.25716865-.08869593.4890664-.17763962.69544548-.26633555.20637908-.08869593.3931856-.16599518.5606673-.23189775.1674817-.06590256.32901731-.10653422.48435907-.12164721.28640363-.01015791.5547212.07729925.804705.26237149.24998378.18507223.46974158.47271463.65927339.86317493.12610678.23338427.21579373.45140779.2693086.65431832.05351486.20266277.08002454.39789292.08002454.5854427 0 .5019496-.23660507.94443825-.71006297 1.32721818-.47321014.38302768-1.14437572.68603082-2.01349675.90900942-.86912104.22322636-1.91290864.33471566-3.13161056.33471566Zm-3.13161056-9.01304277h4.6173913c.3010211 0 .52548623-.05723117.67339537-.17119801.14815689-.1142146.22223533-.32579651.22223533-.63524126 0-.36494164-.10430443-.68578307-.31316105-.96202878-.20860887-.27624571-.4927827-.4917917-.852026-.64663794-.3592433-.1545985-.77918634-.23189775-1.2598291-.23189775-.59237981 0-1.12282113.12288599-1.59132394.36890571-.46850281.24601972-.8327012.56909094-1.09234739.96970916-.25989394.40061821-.39467212.83666525-.40433452 1.30838887Z" />
          <LogoPathHeart d="M46.64776753 54.8019379h82.22707506c14.2490758-1.56704404 20.21375335-6.74188184 25.85114786-9.54249306 3.21956323-1.59925207 5.58536618-4.77595386 7.97371474-7.26117423 2.29742284-2.3903306 4.94294005-5.15799053 6.35736764-7.64940475.85400804-1.50436229 1.70107896-3.20742328 2.33309942-5.27195737.14171529-.46255671.2725294-.94319947.39021255-1.44366255.35354496-1.50411454.27946651-3.59045097 0-4.86564081-.23239325-1.0589006-.93155504-1.99987029-1.67803784-2.78624148-.74821708-.78810548-1.76276971-1.49915946-2.8115124-1.94263912-1.04874268-.44347966-2.32046396-.66175093-3.48119145-.71799109-1.16097524-.0559924-2.4904232.12412475-3.48391675.38178891-.88299525.2289247-1.67927661.7212119-2.47679674 1.1639483-.94765905.52598174-3.20940531 1.9916944-3.20940531 1.9916944s-3.24260435-1.97831569-4.3168657-2.52461326c-.67091783-.34115726-1.38618363-.6290474-2.12870237-.75317216-1.04230107-.17417106-2.91011848-.41994303-4.12535185-.29185421-1.10721263.11693989-2.29841386.61096136-3.16703938 1.06113038-.77596553.40210474-1.51798876.94319948-2.04570478 1.63963597-.557942.7363249-1.07748215 1.780608-1.30194727 2.77831336-.26038945 1.15676343-.40631656 2.83207597-.26038945 4.1627627.14518384 1.32151984.60922708 2.60265578 1.13719086 3.82259647.53514864 1.23629246 1.21746315 2.50900476 2.07370098 3.59590156 1.47661384 1.87425901 4.42909825 5.26080844 6.78499104 7.64940475 2.32517129 2.35762706 4.10330175 3.73067973 7.35011792 6.68266864 3.15960676 2.87295539 9.09207629 4.87877177 13.86902116 4.17762795 7.5904393-1.11365423 23.64564176-7.61149839 31.67311912-10.86029659M9.88355147 54.80193791h25.8692339" />
        </LogoSvg>
      </Link>
    </>
  );
}
